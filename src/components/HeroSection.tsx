
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-background/80 to-background overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(23, 92, 230, 0.1) 0%, transparent 50%)`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container px-4 py-16 mx-auto text-center z-10">
        <div className="max-w-5xl mx-auto mt-10">
          <div className="mb-8 flex justify-center">
            <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/86874257-a3a0-4c14-8371-3118ac60b402.png" 
                alt="Pintu Hembram" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-bold text-foreground mb-4 ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <span>Hi, I'm </span>
            <span className="text-accent">Pintu Hembram</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-foreground/80 mb-8 ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            Computer Science Engineering Student
          </p>
          
          <p 
            className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            Passionate about solving complex problems and learning new technologies
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 justify-center ${animate ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
