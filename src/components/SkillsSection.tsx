
import React from 'react';
import {
  Code2,
  Database,
  FileCode,
  Terminal,
  Server,
  PenTool,
  Layers
} from 'lucide-react';

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  skills 
}: { 
  title: string; 
  icon: React.ElementType; 
  skills: string[] 
}) => (
  <div className="border border-border bg-card/50 rounded p-5 hover:border-primary/30 transition-colors bracket-card">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="h-4 w-4 text-primary" />
      <h3 className="text-xs font-mono font-semibold tracking-widest text-foreground uppercase">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-2.5 py-1 bg-muted/50 border border-border text-[11px] font-mono text-muted-foreground rounded hover:text-primary hover:border-primary/30 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const categories = [
    { title: 'Languages', icon: Code2, skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Objective-C'] },
    { title: 'Web Dev', icon: FileCode, skills: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
    { title: 'Cloud Infra', icon: Server, skills: ['Azure', 'AWS', 'Google Cloud', 'Heroku'] },
    { title: 'Dev Tools', icon: Terminal, skills: ['GitHub', 'GitHub Actions', 'VS Code', 'PowerShell', 'Postman'] },
    { title: 'Databases', icon: Database, skills: ['MySQL', 'MongoDB'] },
    { title: 'Design & Ops', icon: PenTool, skills: ['Canva', 'Adobe', 'Apache'] },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center gap-3 mb-2">
        <Layers className="h-5 w-5 text-primary" />
        <h2 className="section-heading">ARSENAL</h2>
      </div>
      <p className="text-muted-foreground text-xs font-mono mb-8 tracking-wider">// TECHNICAL CAPABILITIES — WEAPONS INVENTORY</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <SkillCategory key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
