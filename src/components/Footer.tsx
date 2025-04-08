
import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/PintuHembram', icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pintu-hembram-1a3b691a5', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/gareebengineer_pin2', icon: <Instagram className="h-5 w-5" /> },
    { name: 'Twitter', url: 'https://twitter.com/Coder_Pintu', icon: <Twitter className="h-5 w-5" /> },
    { name: 'YouTube', url: 'https://youtube.com/@HoCoder', icon: <Youtube className="h-5 w-5" /> },
  ];
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-muted py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <span className="text-xl font-bold text-foreground">Pintu Hembram</span>
            </a>
            <p className="text-foreground/60 mt-2 text-sm">
              Computer Science Engineering Student
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Pintu Hembram. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by Pintu Hembram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
