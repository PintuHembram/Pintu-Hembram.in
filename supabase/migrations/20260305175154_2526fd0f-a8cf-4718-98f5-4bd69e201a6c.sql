
CREATE TABLE public.social_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL DEFAULT 'twitter',
  post_id text NOT NULL,
  username text,
  handle text,
  profile_image text,
  text_content text,
  post_image text,
  post_url text,
  likes integer DEFAULT 0,
  comments integer DEFAULT 0,
  shares integer DEFAULT 0,
  posted_at timestamp with time zone,
  fetched_at timestamp with time zone DEFAULT now(),
  UNIQUE(platform, post_id)
);

ALTER TABLE public.social_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view social posts"
ON public.social_posts
FOR SELECT
TO anon, authenticated
USING (true);
