
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Crosshair, Wifi } from 'lucide-react';

const roles = [
  'Security Enthusiast',
  'Cyber Security',
  'Android Developer',
  'Website Developer',
  'Social Activist',
  'Tribe Leader',
];

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden tactical-grid"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      
      {/* Radar circle decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/15 opacity-30" />
      
      {/* Sweep line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <div className="radar-sweep absolute top-0 left-1/2 w-px h-1/2 origin-bottom bg-gradient-to-t from-primary/60 to-transparent" />
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-20 left-6 font-mono text-[10px] text-primary/30 hidden md:block space-y-1">
        <div>SYS.STATUS: OPERATIONAL</div>
        <div>LAT: 21.4934° N</div>
        <div>LON: 86.1525° E</div>
      </div>
      <div className="absolute top-20 right-6 font-mono text-[10px] text-primary/30 hidden md:block text-right space-y-1">
        <div className="flex items-center gap-1 justify-end"><Wifi className="h-3 w-3" /> SECURE CHANNEL</div>
        <div>CLEARANCE: PUBLIC</div>
        <div>{new Date().toISOString().split('T')[0]}</div>
      </div>

      <div className="container px-4 py-16 mx-auto text-center z-10">
        <div className="max-w-4xl mx-auto mt-10">
          {/* Avatar with tactical frame */}
          <div className="mb-8 flex justify-center">
            <div className={`relative ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 relative">
                <img 
                  src="/lovable-uploads/86874257-a3a0-4c14-8371-3118ac60b402.png" 
                  alt="Pintu Hembram" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Crosshair overlay */}
              <Crosshair className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-primary/10" />
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-cyber-green rounded-full border-2 border-background status-pulse" />
            </div>
          </div>
          
          {/* Designation tag */}
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1 mb-4 border border-primary/30 bg-primary/5 rounded font-mono text-xs text-primary tracking-widest ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <Shield className="h-3 w-3" />
            OPERATIVE PROFILE
          </div>

          <h1 
            className={`text-4xl md:text-6xl font-mono font-bold text-foreground mb-4 tracking-tight ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-muted-foreground">{'> '}</span>
            <span>PINTU </span>
            <span className="text-primary">HEMBRAM</span>
          </h1>
          
          <p 
            className={`font-mono text-sm md:text-base text-muted-foreground mb-8 h-6 ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            {typedText}
            <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 animate-flicker" />
          </p>
          
          <p 
            className={`text-sm text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.9s' }}
          >
            Passionate about solving complex problems, building secure systems, and learning cutting-edge technologies.
          </p>
          
          <div 
            className={`flex flex-wrap gap-3 justify-center ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '1.1s' }}
          >
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs tracking-wider uppercase px-6"
            >
              <a href="#projects">
                <Crosshair className="h-3.5 w-3.5 mr-2" />
                View Operations
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10 font-mono text-xs tracking-wider uppercase px-6"
            >
              <a href="#contact">
                <Wifi className="h-3.5 w-3.5 mr-2" />
                Open Comms
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#about" className="text-primary/40 hover:text-primary transition-colors animate-bounce">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
