
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Radio,
  Send,
} from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/PintuHembram', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pintu-hembram-1a3b691a5', icon: Linkedin },
    { name: 'X', url: 'https://x.com/Coder_Pintu', icon: Twitter },
    { name: 'Instagram', url: 'https://instagram.com/gareebengineer_pin2', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@HoCoder', icon: Youtube },
    { name: 'Blog', url: 'https://hembramit.blogspot.com/', icon: ExternalLink },
  ];

  return (
    <section id="contact" className="section-container pb-24">
      <div className="flex items-center gap-3 mb-2">
        <Radio className="h-5 w-5 text-primary" />
        <h2 className="section-heading">COMMS CHANNEL</h2>
      </div>
      <p className="text-muted-foreground text-xs font-mono mb-8 tracking-wider">// ESTABLISH SECURE CONNECTION</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border bg-card/50 rounded p-6 bracket-card">
          <div className="text-xs font-mono text-primary/60 mb-4 tracking-widest">CONTACT INTEL</div>
          
          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
            Open to professional opportunities, freelance operations, technical collaborations, and innovative missions. Specializing in full-stack development, system architecture, and secure application deployment.
          </p>
          
          <div className="flex items-center gap-2 text-sm mb-6 p-3 border border-border bg-muted/20 rounded">
            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
            <a href="mailto:pintuhembram@hembram.onmicrosoft.com" className="text-xs font-mono text-foreground/80 hover:text-primary transition-colors truncate">
              pintuhembram@hembram.onmicrosoft.com
            </a>
          </div>
          
          <div className="text-xs font-mono text-primary/60 mb-3 tracking-widest">NETWORK LINKS</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border border-border bg-muted/20 rounded text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border border-border bg-card/50 rounded p-6 bracket-card">
          <div className="text-xs font-mono text-primary/60 mb-4 tracking-widest">TRANSMIT MESSAGE</div>
          
          <form className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                  Callsign
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 bg-muted/30 border border-border rounded text-xs font-mono text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                  Frequency
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-muted/30 border border-border rounded text-xs font-mono text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                Subject Line
              </label>
              <input
                id="subject"
                type="text"
                className="w-full px-3 py-2 bg-muted/30 border border-border rounded text-xs font-mono text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/50 transition-colors"
                placeholder="Mission brief"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                Transmission
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-muted/30 border border-border rounded text-xs font-mono text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/50 resize-none transition-colors"
                placeholder="Enter your message..."
              />
            </div>
            
            <Button type="submit" className="w-full font-mono text-xs tracking-widest uppercase gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="h-3.5 w-3.5" />
              TRANSMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
