
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Instagram,
  Twitter,
  Youtube 
} from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PintuHembram',
      icon: <Github className="h-6 w-6" />,
      color: 'bg-[#171515]/10 hover:bg-[#171515]/20 text-[#171515]'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pintu-hembram-1a3b691a5',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5]'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Coder_Pintu',
      icon: <Twitter className="h-6 w-6" />,
      color: 'bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/gareebengineer_pin2',
      icon: <Instagram className="h-6 w-6" />,
      color: 'bg-[#E1306C]/10 hover:bg-[#E1306C]/20 text-[#E1306C]'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@HoCoder',
      icon: <Youtube className="h-6 w-6" />,
      color: 'bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000]'
    },
    {
      name: 'Blog',
      url: 'https://hembramit.blogspot.com/',
      icon: <ExternalLink className="h-6 w-6" />,
      color: 'bg-[#FF5722]/10 hover:bg-[#FF5722]/20 text-[#FF5722]'
    },
  ];

  return (
    <section id="contact" className="section-container pb-24">
      <h2 className="section-heading">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="border-muted bg-card/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <p className="text-foreground/70">
                  I'm currently open to new opportunities, collaborations, and interesting projects.
                  Feel free to reach out to me through any of these platforms.
                </p>
                
                <div className="flex items-center gap-2 text-foreground/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:pintuhembram@hembram.onmicrosoft.com" className="hover:text-primary transition-colors">
                    pintuhembram@hembram.onmicrosoft.com
                  </a>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-sm font-medium text-foreground/60 mb-3">Connect with me:</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${link.color} dark:bg-opacity-20`}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="border-muted bg-card/50 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
