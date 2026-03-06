
import { useEffect } from 'react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const SocialFeedSection = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }

    const timer = setTimeout(() => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="social-feed" className="section-container">
      <h2 className="section-heading">Social Feed</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Stay updated with my latest thoughts and insights on X (formerly Twitter).
      </p>

      <div className="max-w-2xl mx-auto">
        <a
          className="twitter-timeline"
          href="https://twitter.com/Coder_Pintu"
          data-height="600"
          data-theme="dark"
          data-chrome="noheader nofooter noborders transparent"
        >
          Tweets by @pintuhembram
        </a>
      </div>
    </section>
  );
};

export default SocialFeedSection;
