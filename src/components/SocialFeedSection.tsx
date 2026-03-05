
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

const SocialFeedSection = () => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="social-feed" className="section-container">
      <h2 className="section-heading">Social Feed</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Stay updated with my latest thoughts, projects, and insights on X (formerly Twitter).
      </p>

      <Card className="border-border/50 bg-card">
        <CardContent className="p-6">
          <div className="twitter-timeline-container">
            <a
              className="twitter-timeline"
              href="https://x.com/Coder_Pintu"
              data-height="600"
              data-theme="light"
              data-chrome="noheader nofooter noborders transparent"
            >
              Tweets by @Coder_Pintu
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SocialFeedSection;
