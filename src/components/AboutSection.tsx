
import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Brain, 
  Code, 
  Cloud,
  FileText,
  Target
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="flex items-center gap-3 mb-2">
        <Target className="h-5 w-5 text-primary" />
        <h2 className="section-heading">INTEL BRIEFING</h2>
      </div>
      <p className="text-muted-foreground text-xs font-mono mb-8 tracking-wider">// PERSONNEL DOSSIER — CLASSIFICATION: PUBLIC</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="border border-border bg-card/50 p-5 rounded bracket-card">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Operative <span className="text-primary font-mono font-semibold">PINTU HEMBRAM</span> — Computer Science Engineering specialist with high proficiency in problem-solving, system design, and emerging technologies.
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              { icon: Brain, title: 'Tactical Problem Solver', desc: 'Expert at analyzing complex systems and deploying elegant solutions.' },
              { icon: Code, title: 'Tech Operations Specialist', desc: 'Proficient in AI/ML, Web Development, and systems engineering.' },
              { icon: Cloud, title: 'Continuous Reconnaissance', desc: 'Actively expanding capabilities in Python, JavaScript, and Cloud infrastructure.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 border border-border/50 bg-muted/20 rounded transition-colors hover:border-primary/30 hover:bg-primary/5">
                <div className="mt-0.5 p-1.5 bg-primary/10 rounded">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-medium text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono text-primary/60 mb-2 flex items-center gap-2">
            <FileText className="h-3.5 w-3.5" />
            SERVICE RECORD
          </div>
          
          {[
            { title: 'High Schooling', org: 'Board of Secondary Education, Odisha', detail: 'Govt High School Chandikhole, Jajapur', type: 'edu' },
            { title: 'Higher Secondary', org: 'CHSE Odisha / Arts Stream', detail: 'Salabani Gram Panchayat Junior College', type: 'edu' },
            { title: 'Diploma — IT', org: 'SCTEVT, Odisha', detail: 'Barapada School of Engineering & Technology', type: 'edu' },
            { title: 'B.Tech — CSE', org: 'BPUT, Rourkela', detail: 'Bhadrak Institute of Engineering & Technology', type: 'edu' },
            { title: 'Active Deployment', org: 'Hembram IT Solutions Pvt. Ltd', detail: 'Multi-domain technology operations', type: 'work' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 border border-border bg-card/50 rounded hover:border-primary/30 transition-colors group">
              <div className="mt-0.5">
                <div className={`p-2 rounded ${item.type === 'work' ? 'bg-secondary/10' : 'bg-primary/10'}`}>
                  {item.type === 'work' 
                    ? <Briefcase className="h-4 w-4 text-secondary" /> 
                    : <GraduationCap className="h-4 w-4 text-primary" />
                  }
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-mono font-medium text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/70 mt-0.5">{item.org}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
              <div className="ml-auto text-[10px] font-mono text-primary/30 self-start group-hover:text-primary/50 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
          
          <div className="p-4 border border-border bg-muted/20 rounded">
            <div className="text-xs font-mono text-primary/60 mb-3">COMMUNICATION CHANNELS</div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Instagram', url: 'https://instagram.com', color: 'border-secondary/30 text-secondary hover:bg-secondary/10' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/pintu-hembram-1a3b691a5', color: 'border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10' },
                { name: 'X / Twitter', url: 'https://twitter.com/Coder_Pintu', color: 'border-foreground/20 text-foreground/70 hover:bg-foreground/5' },
                { name: 'YouTube', url: 'https://www.youtube.com', color: 'border-secondary/30 text-secondary hover:bg-secondary/10' },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-3 py-1 border rounded text-[11px] font-mono tracking-wider transition-colors ${link.color}`}
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
