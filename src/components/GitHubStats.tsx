
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, GitCommit, Star, GitPullRequest, AlertCircle } from 'lucide-react';

const GitHubStats = () => {
  const stats = [
    { label: 'Total Stars Earned', value: '1', icon: <Star className="h-5 w-5" /> },
    { label: 'Total Commits (2025)', value: '95', icon: <GitCommit className="h-5 w-5" /> },
    { label: 'Total PRs', value: '0', icon: <GitPullRequest className="h-5 w-5" /> },
    { label: 'Total Issues', value: '1', icon: <AlertCircle className="h-5 w-5" /> },
    { label: 'Contributed (last year)', value: '0', icon: <GitBranch className="h-5 w-5" /> },
  ];

  return (
    <section id="github-stats" className="section-container">
      <h2 className="section-heading">GitHub Stats</h2>
      
      <div className="mb-8">
        <Card className="border-muted overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Pintu Hembram's GitHub Stats</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-card/60 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-foreground/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-muted bg-card/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4">Most Used Languages</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Python</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-tech-python h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">JavaScript</span>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-tech-javascript h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Java</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-tech-java h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">C++</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-tech-blue h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-muted bg-card/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4">Contribution Activity</h3>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 49 }).map((_, i) => {
                // Randomly generate contribution levels for demonstration
                const level = Math.floor(Math.random() * 5);
                let bgColor = 'bg-muted/50';
                
                if (level === 1) bgColor = 'bg-primary/20';
                else if (level === 2) bgColor = 'bg-primary/40';
                else if (level === 3) bgColor = 'bg-primary/60';
                else if (level === 4) bgColor = 'bg-primary/80';
                
                return (
                  <div
                    key={i}
                    className={`${bgColor} w-4 h-4 rounded-sm`}
                    title={`${level} contributions`}
                  ></div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-foreground/60">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="bg-muted/50 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/20 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/40 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/60 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/80 w-3 h-3 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GitHubStats;
