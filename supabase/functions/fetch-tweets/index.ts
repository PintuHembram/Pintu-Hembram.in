import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// OAuth 1.0a helper
function percentEncode(str: string): string {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

async function hmacSha1(key: string, data: string): Promise<string> {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function buildOAuthHeader(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerKey: string,
  consumerSecret: string,
  accessToken: string,
  accessTokenSecret: string
): Promise<string> {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: crypto.randomUUID().replace(/-/g, ""),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: "1.0",
  };

  const allParams = { ...params, ...oauthParams };
  const sortedKeys = Object.keys(allParams).sort();
  const paramString = sortedKeys.map((k) => `${percentEncode(k)}=${percentEncode(allParams[k])}`).join("&");
  const baseString = `${method.toUpperCase()}&${percentEncode(url)}&${percentEncode(paramString)}`;
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(accessTokenSecret)}`;
  const signature = await hmacSha1(signingKey, baseString);

  oauthParams["oauth_signature"] = signature;
  const authHeader = Object.keys(oauthParams)
    .sort()
    .map((k) => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`)
    .join(", ");

  return `OAuth ${authHeader}`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const consumerKey = Deno.env.get("TWITTER_CONSUMER_KEY");
    const consumerSecret = Deno.env.get("TWITTER_CONSUMER_SECRET");
    const accessToken = Deno.env.get("TWITTER_ACCESS_TOKEN");
    const accessTokenSecret = Deno.env.get("TWITTER_ACCESS_TOKEN_SECRET");
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!consumerKey || !consumerSecret || !accessToken || !accessTokenSecret) {
      throw new Error("Twitter API credentials not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache - return cached if less than 15 minutes old
    const { data: cached } = await supabase
      .from("social_posts")
      .select("*")
      .eq("platform", "twitter")
      .order("posted_at", { ascending: false })
      .limit(10);

    if (cached && cached.length > 0) {
      const latestFetch = new Date(cached[0].fetched_at);
      const fifteenMinAgo = new Date(Date.now() - 15 * 60 * 1000);
      if (latestFetch > fifteenMinAgo) {
        return new Response(JSON.stringify({ posts: cached, source: "cache" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Fetch from Twitter API v2
    const apiUrl = "https://api.x.com/2/users/me";
    const meParams = { "user.fields": "profile_image_url,username,name" };
    const meQueryString = new URLSearchParams(meParams).toString();
    const meAuthHeader = await buildOAuthHeader("GET", apiUrl, meParams, consumerKey, consumerSecret, accessToken, accessTokenSecret);

    const meRes = await fetch(`${apiUrl}?${meQueryString}`, {
      headers: { Authorization: meAuthHeader },
    });

    if (!meRes.ok) {
      const errText = await meRes.text();
      throw new Error(`Twitter user lookup failed [${meRes.status}]: ${errText}`);
    }

    const meData = await meRes.json();
    const userId = meData.data.id;
    const userName = meData.data.name;
    const userHandle = `@${meData.data.username}`;
    const profileImage = meData.data.profile_image_url;

    // Fetch tweets
    const tweetsUrl = `https://api.x.com/2/users/${userId}/tweets`;
    const tweetsParams: Record<string, string> = {
      max_results: "10",
      "tweet.fields": "created_at,public_metrics,attachments",
      "media.fields": "url,preview_image_url",
      expansions: "attachments.media_keys",
    };
    const tweetsQueryString = new URLSearchParams(tweetsParams).toString();
    const tweetsAuthHeader = await buildOAuthHeader("GET", tweetsUrl, tweetsParams, consumerKey, consumerSecret, accessToken, accessTokenSecret);

    const tweetsRes = await fetch(`${tweetsUrl}?${tweetsQueryString}`, {
      headers: { Authorization: tweetsAuthHeader },
    });

    if (!tweetsRes.ok) {
      const errText = await tweetsRes.text();
      throw new Error(`Twitter tweets fetch failed [${tweetsRes.status}]: ${errText}`);
    }

    const tweetsData = await tweetsRes.json();
    const mediaMap: Record<string, string> = {};
    if (tweetsData.includes?.media) {
      for (const m of tweetsData.includes.media) {
        mediaMap[m.media_key] = m.url || m.preview_image_url || "";
      }
    }

    const posts = (tweetsData.data || []).map((tweet: any) => {
      const mediaKeys = tweet.attachments?.media_keys || [];
      const postImage = mediaKeys.length > 0 ? mediaMap[mediaKeys[0]] || null : null;

      return {
        platform: "twitter",
        post_id: tweet.id,
        username: userName,
        handle: userHandle,
        profile_image: profileImage,
        text_content: tweet.text,
        post_image: postImage,
        post_url: `https://x.com/${meData.data.username}/status/${tweet.id}`,
        likes: tweet.public_metrics?.like_count || 0,
        comments: tweet.public_metrics?.reply_count || 0,
        shares: tweet.public_metrics?.retweet_count || 0,
        posted_at: tweet.created_at,
        fetched_at: new Date().toISOString(),
      };
    });

    // Upsert to cache
    if (posts.length > 0) {
      await supabase.from("social_posts").upsert(posts, { onConflict: "platform,post_id" });
    }

    return new Response(JSON.stringify({ posts, source: "api" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error fetching tweets:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
