
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Crosshair } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  id: number;
}

const Project = ({ title, description, image, tags, githubUrl, liveUrl, id }: ProjectProps) => {
  return (
    <div className="border border-border bg-card/50 rounded overflow-hidden hover:border-primary/30 transition-all group bracket-card">
      {image && (
        <div className="h-44 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-background/80 backdrop-blur-sm border border-border rounded text-[10px] font-mono text-primary">
            OP-{String(id).padStart(3, '0')}
          </div>
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-sm font-mono font-bold text-foreground mb-2 uppercase tracking-wide">{title}</h3>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 border border-border bg-muted/30 text-[10px] font-mono text-muted-foreground rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="text-xs font-mono gap-1.5 border-border hover:border-primary/30 hover:text-primary">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                SOURCE
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild className="text-xs font-mono gap-1.5 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                DEPLOY
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hembram IT Solution Pvt.Ltd Website",
      description: "Information technology blog providing comprehensive coverage of IT industry trends and insights.",
      image: "/lovable-uploads/42cb0790-3a54-49d4-bb39-8a7216c93fb5.png",
      tags: ["Web Dev", "IT Blog", "Responsive"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "http://hembramit.blogspot.com/"
    },
    {
      title: "AI-Powered Study Assistant",
      description: "Intelligent web application leveraging machine learning for academic support and optimization.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "ML", "Flask"],
      githubUrl: "https://github.com/PintuHembram",
    },
    {
      title: "Master International School",
      description: "Full-featured school platform with admissions portal, academic resources, and student management.",
      image: "/lovable-uploads/image.png",
      tags: ["React", "UI/UX", "Education"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "https://mispadamapur.lovable.app/"
    },
    {
      title: "E-commerce Demo Platform",
      description: "Demo e-commerce system with product catalog, cart functionality, and checkout flow.",
      image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2070&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JS", "E-commerce"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "https://github.com/PintuHembram"
    },
    {
      title: "AIHLAC — Ho Language Committee",
      description: "Digital platform for preserving and promoting the Ho language and cultural heritage across India.",
      image: "/lovable-uploads/imaihlac.png",
      tags: ["HTML", "CSS", "JS", "Cultural"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "https://aihlac.lovable.app/"
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="flex items-center gap-3 mb-2">
        <Crosshair className="h-5 w-5 text-primary" />
        <h2 className="section-heading">OPERATIONS</h2>
      </div>
      <p className="text-muted-foreground text-xs font-mono mb-8 tracking-wider">// DEPLOYED MISSIONS — {projects.length} ACTIVE</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} id={index + 1} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="font-mono text-xs tracking-wider border-primary/30 text-primary hover:bg-primary/10 gap-2">
          <a href="https://github.com/PintuHembram" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            VIEW ALL OPERATIONS
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
