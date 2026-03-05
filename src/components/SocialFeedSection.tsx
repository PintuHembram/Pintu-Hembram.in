
import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle, Repeat2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type Platform = 'all' | 'twitter' | 'instagram' | 'linkedin';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'instagram' | 'linkedin';
  profileImage: string;
  username: string;
  handle: string;
  text: string;
  image?: string;
  date: string;
  link: string;
  likes: number;
  comments: number;
  shares?: number;
}

const PLATFORM_CONFIG = {
  twitter: {
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="X">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'bg-foreground text-background',
  },
  instagram: {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="Instagram">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
  },
  linkedin: {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="LinkedIn">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'bg-[#0A66C2] text-white',
  },
};

const SAMPLE_POSTS: SocialPost[] = [
  {
    id: '1',
    platform: 'twitter',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: '@pintuhembram',
    text: '🚀 Just deployed my latest project using React and Tailwind CSS! The developer experience is incredible. #webdev #react #tailwindcss',
    date: '2026-03-04',
    link: 'https://x.com',
    likes: 42,
    comments: 8,
    shares: 12,
  },
  {
    id: '2',
    platform: 'instagram',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: '@pintuhembram',
    text: 'Behind the scenes of my coding setup 💻✨ Clean desk, clear mind.',
    image: '/lovable-uploads/86874257-a3a0-4c14-8371-3118ac60b402.png',
    date: '2026-03-02',
    link: 'https://instagram.com',
    likes: 156,
    comments: 23,
  },
  {
    id: '3',
    platform: 'linkedin',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: 'pintuhembram',
    text: "Excited to share that I've completed my certification in cloud computing! Always learning, always growing. 🎓 #CloudComputing #CareerGrowth",
    date: '2026-02-28',
    link: 'https://linkedin.com',
    likes: 89,
    comments: 15,
    shares: 7,
  },
  {
    id: '4',
    platform: 'twitter',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: '@pintuhembram',
    text: 'TypeScript tip: Use discriminated unions for cleaner error handling in your APIs. Thread 🧵👇',
    date: '2026-02-25',
    link: 'https://x.com',
    likes: 78,
    comments: 14,
    shares: 31,
  },
  {
    id: '5',
    platform: 'instagram',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: '@pintuhembram',
    text: 'Weekend hackathon vibes 🔥 Built a full-stack app in 48 hours!',
    image: '/lovable-uploads/64edc36e-2c0b-42c7-a14e-02631236e8fa.png',
    date: '2026-02-22',
    link: 'https://instagram.com',
    likes: 203,
    comments: 34,
  },
  {
    id: '6',
    platform: 'linkedin',
    profileImage: '/lovable-uploads/76bb4224-f535-45d7-a1f4-264521991156.png',
    username: 'Pintu Hembram',
    handle: 'pintuhembram',
    text: 'Great article on the future of web development. The shift toward server components and edge computing is fascinating. What are your thoughts?',
    date: '2026-02-18',
    link: 'https://linkedin.com',
    likes: 45,
    comments: 9,
    shares: 3,
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const FILTER_TABS: { key: Platform; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'twitter', label: 'X' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
];

const SocialFeedSection = () => {
  const [activeFilter, setActiveFilter] = useState<Platform>('all');

  const filteredPosts =
    activeFilter === 'all'
      ? SAMPLE_POSTS
      : SAMPLE_POSTS.filter((p) => p.platform === activeFilter);

  return (
    <section id="social-feed" className="section-container">
      <div className="flex items-center justify-between mb-2">
        <h2 className="section-heading mb-0">Social Feed</h2>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors disabled:opacity-50"
          aria-label="Refresh feed"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Stay updated with my latest thoughts, projects, and insights across platforms.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === tab.key
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const config = PLATFORM_CONFIG[post.platform];
          return (
            <Card
              key={post.id}
              className="group overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <CardContent className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-border">
                      <AvatarImage src={post.profileImage} alt={post.username} loading="lazy" />
                      <AvatarFallback>PH</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-card-foreground truncate">{post.username}</p>
                      <p className="text-xs text-muted-foreground truncate">{post.handle}</p>
                    </div>
                  </div>
                  <Badge className={`${config.color} shrink-0 gap-1 text-xs`}>
                    {config.icon}
                    <span className="hidden sm:inline">{config.label}</span>
                  </Badge>
                </div>

                {/* Content */}
                <p className="text-sm text-card-foreground/90 leading-relaxed mb-3">{post.text}</p>

                {/* Image */}
                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-3 border border-border/30">
                    <img
                      src={post.image}
                      alt="Post attachment"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1 text-xs">
                      <Heart className="w-3.5 h-3.5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                    {post.shares !== undefined && (
                      <span className="flex items-center gap-1 text-xs">
                        <Repeat2 className="w-3.5 h-3.5" /> {post.shares}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View original post"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SocialFeedSection;
