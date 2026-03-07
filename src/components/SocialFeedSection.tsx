
import { useEffect, useRef, useState } from 'react';
import { Twitter, Instagram, Linkedin, ExternalLink, Radio, Monitor } from 'lucide-react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

type Platform = 'x' | 'instagram' | 'linkedin';

const platforms: { id: Platform; label: string; icon: React.ReactNode; handle: string; url: string }[] = [
  { id: 'x', label: 'X / TWITTER', icon: <Twitter className="w-3.5 h-3.5" />, handle: '@Coder_Pintu', url: 'https://x.com/Coder_Pintu' },
  { id: 'instagram', label: 'INSTAGRAM', icon: <Instagram className="w-3.5 h-3.5" />, handle: '@coder_pintu', url: 'https://instagram.com/coder_pintu' },
  { id: 'linkedin', label: 'LINKEDIN', icon: <Linkedin className="w-3.5 h-3.5" />, handle: 'Pintu Hembram', url: 'https://linkedin.com/in/pintuhembram' },
];

const SocialFeedSection = () => {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePlatform, setActivePlatform] = useState<Platform>('x');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || activePlatform !== 'x') return;
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
    const timer = setTimeout(() => {
      if (window.twttr?.widgets && embedRef.current) {
        window.twttr.widgets.load(embedRef.current);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isVisible, activePlatform]);

  const activeInfo = platforms.find(p => p.id === activePlatform)!;

  return (
    <section id="social-feed" ref={sectionRef} className="section-container">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Monitor className="h-5 w-5 text-primary" />
            <h2 className="section-heading">SIGNAL INTERCEPT</h2>
          </div>
          <p className="text-muted-foreground text-xs font-mono tracking-wider">// LIVE FEEDS — MULTI-PLATFORM SURVEILLANCE</p>
        </div>
        <a
          href={activeInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 rounded text-xs font-mono text-primary hover:bg-primary/10 transition-colors tracking-wider"
        >
          FOLLOW {activeInfo.label}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Platform Tabs */}
      <div className={`flex gap-1 mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePlatform(p.id)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-200 rounded-t ${
              activePlatform === p.id
                ? 'border-primary/50 border-b-transparent bg-card/80 text-primary'
                : 'border-border/30 border-b-border/50 bg-muted/20 text-muted-foreground hover:text-foreground hover:bg-muted/40'
            }`}
          >
            {p.icon}
            <span className="hidden sm:inline">{p.label}</span>
          </button>
        ))}
      </div>

      {/* Feed Content */}
      <div className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="border border-border bg-card/50 rounded overflow-hidden bracket-card">
          <div className="h-0.5 w-full bg-primary/50" />

          {/* X Feed */}
          {activePlatform === 'x' && (
            <div ref={embedRef} className="p-4">
              <a
                className="twitter-timeline"
                href="https://twitter.com/Coder_Pintu"
                data-height="500"
                data-theme="dark"
                data-chrome="noheader nofooter noborders transparent"
              >
                <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
                  <Radio className="w-6 h-6 status-pulse text-primary/50" />
                  <span className="text-xs font-mono tracking-wider">ACQUIRING SIGNAL…</span>
                </div>
              </a>
            </div>
          )}

          {/* Instagram Feed */}
          {activePlatform === 'instagram' && (
            <div className="p-6 min-h-[400px] flex flex-col items-center justify-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary/60" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-xs font-mono tracking-wider text-primary">INSTAGRAM FEED — @coder_pintu</p>
                <p className="text-xs font-mono text-muted-foreground max-w-xs">
                  SIGNAL CLASSIFIED — DIRECT ACCESS REQUIRED
                </p>
              </div>
              <a
                href="https://instagram.com/coder_pintu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 bg-primary/5 rounded text-xs font-mono text-primary hover:bg-primary/15 transition-colors tracking-wider"
              >
                <ExternalLink className="w-3 h-3" />
                OPEN INSTAGRAM
              </a>
            </div>
          )}

          {/* LinkedIn Feed */}
          {activePlatform === 'linkedin' && (
            <div className="p-6 min-h-[400px] flex flex-col items-center justify-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-primary/60" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-xs font-mono tracking-wider text-primary">LINKEDIN FEED — Pintu Hembram</p>
                <p className="text-xs font-mono text-muted-foreground max-w-xs">
                  ENCRYPTED CHANNEL — DIRECT ACCESS REQUIRED
                </p>
              </div>
              <a
                href="https://linkedin.com/in/pintuhembram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 bg-primary/5 rounded text-xs font-mono text-primary hover:bg-primary/15 transition-colors tracking-wider"
              >
                <ExternalLink className="w-3 h-3" />
                OPEN LINKEDIN
              </a>
            </div>
          )}

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-border bg-muted/20 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green status-pulse" />
              {activeInfo.label} — {activeInfo.handle}
            </span>
            <a
              href={activeInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors tracking-wider"
            >
              OPEN SOURCE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
