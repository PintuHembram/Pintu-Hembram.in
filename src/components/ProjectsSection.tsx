
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Project = ({ title, description, image, tags, githubUrl, liveUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border-muted bg-card/50 hover:shadow-md transition-all">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-muted text-foreground/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        
        {liveUrl && (
          <Button size="sm" asChild className="gap-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Personal Blog Site",
      description: "A personal blog site built with modern web technologies to share my thoughts and experiences.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "https://hembramit.blogspot.com/"
    },
    {
      title: "AI-Powered Study Assistant",
      description: "A web application that helps students with their studies using artificial intelligence.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Machine Learning", "Web Development", "Flask"],
      githubUrl: "https://github.com/PintuHembram",
    },
    {
      title: "Cloud-Based File Manager",
      description: "A secure file management system that allows users to store and share files in the cloud.",
      image: "https://images.unsplash.com/photo-1522253601-28c422399e69?q=80&w=2070&auto=format&fit=crop",
      tags: ["Azure", "JavaScript", "Security", "Cloud Computing"],
      githubUrl: "https://github.com/PintuHembram",
    },
    {
      title: "E-commerce Demo Platform",
      description: "A demo e-commerce platform with product browsing, cart functionality, and checkout process.",
      image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2070&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
      githubUrl: "https://github.com/PintuHembram",
      liveUrl: "https://github.com/PintuHembram"
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button asChild>
          <a
            href="https://github.com/PintuHembram"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
