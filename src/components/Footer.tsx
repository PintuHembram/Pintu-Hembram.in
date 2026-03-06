
import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/PintuHembram', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pintu-hembram-1a3b691a5', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/gareebengineer_pin2', icon: Instagram },
    { name: 'Twitter', url: 'https://twitter.com/Coder_Pintu', icon: Twitter },
    { name: 'YouTube', url: 'https://youtube.com/@HoCoder', icon: Youtube },
  ];

  const navLinks = [
    { name: 'RECON', href: '#home' },
    { name: 'INTEL', href: '#about' },
    { name: 'ARSENAL', href: '#skills' },
    { name: 'OPS', href: '#projects' },
    { name: 'COMMS', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono font-bold text-foreground tracking-widest uppercase">P.Hembram</span>
            <span className="text-[10px] font-mono text-muted-foreground ml-2">// CSE OPERATIVE</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-[10px] font-mono tracking-widest px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-[10px] font-mono text-muted-foreground tracking-wider">
            &copy; {new Date().getFullYear()} PINTU HEMBRAM — ALL RIGHTS RESERVED — CLASSIFIED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
