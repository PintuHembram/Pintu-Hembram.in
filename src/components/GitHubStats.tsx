
import React from 'react';
import { GitBranch, GitCommit, Star, GitPullRequest, AlertCircle, Activity } from 'lucide-react';

const GitHubStats = () => {
  const stats = [
    { label: 'STARS', value: '310', icon: Star },
    { label: 'COMMITS', value: '790', icon: GitCommit },
    { label: 'PRs', value: '240', icon: GitPullRequest },
    { label: 'ISSUES', value: '100', icon: AlertCircle },
    { label: 'CONTRIB', value: '50', icon: GitBranch },
  ];

  const languages = [
    { name: 'Python', pct: 45, color: 'bg-primary' },
    { name: 'JavaScript', pct: 30, color: 'bg-cyber-amber' },
    { name: 'Java', pct: 15, color: 'bg-secondary' },
    { name: 'C++', pct: 10, color: 'bg-cyber-blue' },
  ];

  return (
    <section id="github-stats" className="section-container">
      <div className="flex items-center gap-3 mb-2">
        <Activity className="h-5 w-5 text-primary" />
        <h2 className="section-heading">COMMAND CENTER</h2>
      </div>
      <p className="text-muted-foreground text-xs font-mono mb-8 tracking-wider">// GITHUB TELEMETRY — REAL-TIME METRICS</p>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-border bg-card/50 rounded p-4 text-center hover:border-primary/30 transition-colors bracket-card">
            <stat.icon className="h-4 w-4 text-primary mx-auto mb-2" />
            <div className="text-2xl font-mono font-bold text-foreground">{stat.value}</div>
            <div className="text-[10px] font-mono text-muted-foreground tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Languages */}
        <div className="border border-border bg-card/50 rounded p-5">
          <h3 className="text-xs font-mono font-semibold tracking-widest text-foreground mb-4 uppercase">Language Distribution</h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{lang.name}</span>
                  <span className="text-xs font-mono text-primary">{lang.pct}%</span>
                </div>
                <div className="w-full bg-muted rounded-sm h-1.5">
                  <div className={`${lang.color} h-1.5 rounded-sm transition-all duration-1000`} style={{ width: `${lang.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution grid */}
        <div className="border border-border bg-card/50 rounded p-5">
          <h3 className="text-xs font-mono font-semibold tracking-widest text-foreground mb-4 uppercase">Activity Matrix</h3>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 49 }).map((_, i) => {
              const level = Math.floor(Math.random() * 5);
              const colors = ['bg-muted/30', 'bg-primary/20', 'bg-primary/40', 'bg-primary/60', 'bg-primary/80'];
              return (
                <div
                  key={i}
                  className={`${colors[level]} w-full aspect-square rounded-[2px]`}
                  title={`${level} contributions`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>LOW</span>
            <div className="flex gap-1">
              {['bg-muted/30', 'bg-primary/20', 'bg-primary/40', 'bg-primary/60', 'bg-primary/80'].map((c, i) => (
                <div key={i} className={`${c} w-3 h-3 rounded-[2px]`} />
              ))}
            </div>
            <span>HIGH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
