
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Radio } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isHomePage ? [
    { name: 'RECON', href: '#home', isAnchor: true },
    { name: 'INTEL', href: '#about', isAnchor: true },
    { name: 'ARSENAL', href: '#skills', isAnchor: true },
    { name: 'OPS', href: '#projects', isAnchor: true },
    { name: 'BLOG', href: '/blog', isAnchor: false },
    { name: 'COMMS', href: '#contact', isAnchor: true },
  ] : [
    { name: 'HQ', href: '/', isAnchor: false },
    { name: 'BLOG', href: '/blog', isAnchor: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrollY > 20 
          ? 'bg-background/95 backdrop-blur-md border-primary/20 shadow-[0_2px_20px_-5px_hsl(var(--primary)/0.15)]' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 group">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono font-bold text-foreground tracking-widest uppercase">
                P.Hembram
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-mono">
                <Radio className="h-2.5 w-2.5 status-pulse" />
                ONLINE
              </span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navLinks.map((link, i) => (
                link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary px-3 py-1.5 text-xs font-mono font-medium tracking-wider transition-colors relative group"
                  >
                    <span className="text-primary/40 mr-1">{String(i + 1).padStart(2, '0')}</span>
                    {link.name}
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary px-3 py-1.5 text-xs font-mono font-medium tracking-wider transition-colors relative group"
                  >
                    <span className="text-primary/40 mr-1">{String(i + 1).padStart(2, '0')}</span>
                    {link.name}
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-muted-foreground hover:text-primary border border-border rounded transition-colors"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="px-4 py-2 space-y-0.5">
            {navLinks.map((link, i) => (
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary px-3 py-2.5 text-xs font-mono tracking-wider transition-colors border-l-2 border-transparent hover:border-primary hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary px-3 py-2.5 text-xs font-mono tracking-wider transition-colors border-l-2 border-transparent hover:border-primary hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
