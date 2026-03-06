
import { useEffect, useRef, useState } from 'react';
import { Twitter, ExternalLink, Radio } from 'lucide-react';

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
    <section id="social-feed" ref={sectionRef} className="section-container">
      <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Twitter className="h-5 w-5 text-primary" />
            <h2 className="section-heading">SIGNAL INTERCEPT</h2>
          </div>
          <p className="text-muted-foreground text-xs font-mono tracking-wider">// LIVE FEED FROM X — @Coder_Pintu</p>
        </div>
        <a
          href="https://x.com/Coder_Pintu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 rounded text-xs font-mono text-primary hover:bg-primary/10 transition-colors tracking-wider"
        >
          FOLLOW FEED
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="border border-border bg-card/50 rounded overflow-hidden bracket-card">
          <div className="h-0.5 w-full bg-primary/50" />
          
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

          <div className="px-4 py-2.5 border-t border-border bg-muted/20 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green status-pulse" />
              FEED ACTIVE
            </span>
            <a
              href="https://x.com/Coder_Pintu"
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
