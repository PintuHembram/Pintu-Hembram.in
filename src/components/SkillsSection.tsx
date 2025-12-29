
import React from 'react';
import {
  PanelTop,
  Code2,
  Database,
  FileCode,
  Search,
  Terminal,
  Server,
  PenTool
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TechBadge = ({ 
  children, 
  color = 'blue',
  className = '', 
}: { 
  children: React.ReactNode; 
  color?: string;
  className?: string;
}) => {
  return (
    <div 
      className={`tech-badge ${className}`}
      style={{ backgroundColor: `rgba(var(--${color}-rgb), 0.1)`, color: `rgb(var(--${color}-rgb))` }}
    >
      {children}
    </div>
  );
};

// Define CSS variables for the tech colors
const techColorVars = `
  :root {
    --blue-rgb: 0, 116, 217;
    --orange-rgb: 255, 133, 27;
    --red-rgb: 255, 65, 54;
    --azure-rgb: 0, 137, 214;
    --yellow-rgb: 245, 209, 66;
    --green-rgb: 46, 204, 64;
    --python-rgb: 48, 105, 152;
    --java-rgb: 248, 152, 32;
    --mysql-rgb: 0, 117, 143;
    --mongodb-rgb: 77, 179, 61;
    --html-rgb: 227, 79, 38;
    --css-rgb: 38, 77, 228;
    --javascript-rgb: 240, 219, 79;
    --github-rgb: 23, 21, 21;
    --canva-rgb: 0, 196, 204;
  }
`;

const SkillsSection = () => {
  const programmingLanguages = [
    { name: 'C', color: 'blue', icon: <Code2 size={16} /> },
    { name: 'C++', color: 'blue', icon: <Code2 size={16} /> },
    { name: 'Java', color: 'java', icon: <Code2 size={16} /> },
    { name: 'Python', color: 'python', icon: <Code2 size={16} /> },
    { name: 'JavaScript', color: 'javascript', icon: <Code2 size={16} /> },
    { name: 'Objective-C', color: 'blue', icon: <Code2 size={16} /> },
  ];

  const webDevelopment = [
    { name: 'HTML5', color: 'html', icon: <FileCode size={16} /> },
    { name: 'CSS3', color: 'css', icon: <FileCode size={16} /> },
    { name: 'JavaScript', color: 'javascript', icon: <FileCode size={16} /> },
  ];

  const cloudServices = [
    { name: 'Azure', color: 'azure', icon: <Server size={16} /> },
    { name: 'AWS', color: 'yellow', icon: <Server size={16} /> },
    { name: 'Google Cloud', color: 'yellow', icon: <Server size={16} /> },
    { name: 'Heroku', color: 'purple', icon: <Server size={16} /> },
  ];

  const devTools = [
    { name: 'GitHub', color: 'purple', icon: <PanelTop size={16} /> },
    { name: 'GitHub Actions', color: 'purple', icon: <PanelTop size={16} /> },
    { name: 'Windows Terminal', color: 'blue', icon: <Terminal size={16} /> },
    { name: 'PowerShell', color: 'blue', icon: <Terminal size={16} /> },
    { name: 'Visual Studio Code', color: 'blue', icon: <Search size={16} /> },
    { name: 'Postman', color: 'orange', icon: <Search size={16} /> },
  ];

  const databases = [
    { name: 'MySQL', color: 'mysql', icon: <Database size={16} /> },
    { name: 'MongoDB', color: 'mongodb', icon: <Database size={16} /> },
  ];

  const other = [
    { name: 'Canva', color: 'canva', icon: <PenTool size={16} /> },
    { name: 'Adobe', color: 'red', icon: <PenTool size={16} /> },
    { name: 'Apache', color: 'red', icon: <Server size={16} /> },
  ];

  return (
    <section id="skills" className="section-container">
      <style>{techColorVars}</style>
      <h2 className="section-heading">Tech Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {webDevelopment.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Cloud Services</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cloudServices.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <PanelTop className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Development Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devTools.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {databases.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <PenTool className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Design & Others</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {other.map((tech, index) => (
                <TechBadge key={index} color={tech.color}>
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
