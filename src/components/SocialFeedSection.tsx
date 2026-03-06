
import { useEffect, useRef, useState } from 'react';
import { Twitter, ExternalLink, MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

const SocialFeedSection = () => {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
    if (!isVisible) return;

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
  }, [isVisible]);

  return (
    <section
      id="social-feed"
      ref={sectionRef}
      className="section-container"
    >
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Twitter className="w-5 h-5" />
            </div>
            <h2 className="section-heading mb-0">Social Feed</h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            Stay updated with my latest thoughts, insights, and dev updates on X.
          </p>
        </div>
        <a
          href="https://x.com/Coder_Pintu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
        >
          Follow @Coder_Pintu
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Timeline Card */}
      <div className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-lg shadow-black/10">
          {/* Decorative top gradient */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

          {/* Embedded timeline */}
          <div ref={embedRef} className="p-4">
            <a
              className="twitter-timeline"
              href="https://twitter.com/Coder_Pintu"
              data-height="500"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
            >
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
                <MessageCircle className="w-8 h-8 animate-pulse" />
                <span className="text-sm">Loading tweets…</span>
              </div>
            </a>
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live from X
            </span>
            <a
              href="https://x.com/Coder_Pintu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              View on X →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
