
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Briefcase, 
  GraduationCap, 
  Brain, 
  Code, 
  Cloud 
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-foreground/80">
            👋 Hi there! I'm Pintu Hembram, a Computer Science Engineering student with a passion for technology and problem-solving.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-primary/20 p-2 rounded-md">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Passionate Problem Solver</h3>
                <p className="text-foreground/70">
                  I enjoy tackling complex problems and finding elegant solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-primary/20 p-2 rounded-md">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Technology Enthusiast</h3>
                <p className="text-foreground/70">
                  Interested in Artificial Intelligence, Machine Learning, and Web Development.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-primary/20 p-2 rounded-md">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Continuous Learner</h3>
                <p className="text-foreground/70">
                  Currently enhancing my skills in Python, JavaScript, and Cloud Computing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="overflow-hidden border-muted bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">High Schooling</h3>
                  <p className="text-foreground/80 font-medium">Board of Secondary Education, Odisha</p>
                  <p className="text-foreground/60 text-sm">Govt High School Chandikhole, Jajapur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-muted bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Higher Secondary School</h3>
                  <p className="text-foreground/80 font-medium">Council of Higher Secondary Education, Odisha / Arts Stream</p>
                  <p className="text-foreground/60 text-sm">Salabani Gram Panchayat Junior College, Salabani, Anandapur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-muted bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Diploma</h3>
                  <p className="text-foreground/80 font-medium">Information Technology (SCTEVT, Odisha)</p>
                  <p className="text-foreground/60 text-sm">Barapada School of Engineering and Technology, Bhadrak</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-muted bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Bachelor of Technology</h3>
                  <p className="text-foreground/80 font-medium">Computer Science Engineering (BPUT, Rourkela)</p>
                  <p className="text-foreground/60 text-sm">Bhadrak Institute of Engineering & Technology (BIET)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-muted bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Experience</h3>
                  <p className="text-foreground/80 font-medium">Hembram IT Solutions Pvt. Ltd</p>
                  <p className="text-foreground/60 text-sm">Working on Various Technology Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 border border-muted rounded-lg bg-muted/30">
            <h3 className="font-medium mb-2 text-foreground">Social Profiles</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E1306C]/10 hover:bg-[#E1306C]/20 text-[#E1306C] px-3 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com/in/pintu-hembram-1a3b691a5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] px-3 py-1.5 rounded text-sm font-medium transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/Coder_Pintu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] px-3 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] px-3 py-1.5 rounded text-sm font-medium transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
