
import { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, X, ChevronRight } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

const COMMANDS: Record<string, (args: string[]) => string[]> = {
  help: () => [
    '┌─── AVAILABLE COMMANDS ───────────────────┐',
    '│  help        — Show this help menu        │',
    '│  whoami      — Operator identity           │',
    '│  skills      — List combat capabilities    │',
    '│  projects    — List mission operations      │',
    '│  contact     — Communication channels       │',
    '│  status      — System diagnostics           │',
    '│  socials     — Social feed links            │',
    '│  clear       — Wipe terminal                │',
    '│  date        — Current timestamp            │',
    '│  echo [msg]  — Echo a message               │',
    '│  exit        — Close terminal               │',
    '└────────────────────────────────────────────┘',
  ],
  whoami: () => [
    '> OPERATOR: Pintu Hembram',
    '> CALLSIGN: Coder_Pintu',
    '> ROLE: Full-Stack Developer & Security Enthusiast',
    '> CLEARANCE: TOP SECRET // COSMIC',
    '> STATUS: ACTIVE DUTY',
  ],
  skills: () => [
    '╔══ ARSENAL MANIFEST ══════════════════════╗',
    '║ [PRIMARY]   React · TypeScript · Node.js ║',
    '║ [SECONDARY] Python · Tailwind · Supabase ║',
    '║ [RECON]     Git · Docker · Linux         ║',
    '║ [COMMS]     REST · GraphQL · WebSockets  ║',
    '╚═══════════════════════════════════════════╝',
  ],
  projects: () => [
    '── MISSION LOG ──────────────────────────────',
    '  OP-001  Portfolio HQ      [ACTIVE]',
    '  OP-002  Blog Platform     [DEPLOYED]',
    '  OP-003  Social Intel      [MONITORING]',
    '─────────────────────────────────────────────',
    'Type "projects" for details. Visit /projects.',
  ],
  contact: () => [
    '── COMMS CHANNELS ───────────────────────────',
    '  EMAIL   → pintuhembram@example.com',
    '  GITHUB  → github.com/PintuHembram',
    '  X       → x.com/Coder_Pintu',
    '  LINKEDIN → linkedin.com/in/pintuhembram',
    '─────────────────────────────────────────────',
  ],
  status: () => {
    const uptime = Math.floor(performance.now() / 1000);
    const mins = Math.floor(uptime / 60);
    const secs = uptime % 60;
    return [
      '── SYSTEM DIAGNOSTICS ───────────────────────',
      `  UPTIME     : ${mins}m ${secs}s`,
      `  TIMESTAMP  : ${new Date().toISOString()}`,
      `  BROWSER    : ${navigator.userAgent.split(' ').pop() || 'CLASSIFIED'}`,
      `  SCREEN     : ${window.innerWidth}x${window.innerHeight}`,
      `  PLATFORM   : ${navigator.platform}`,
      '  THREAT LVL : LOW',
      '  STATUS     : ALL SYSTEMS NOMINAL',
      '─────────────────────────────────────────────',
    ];
  },
  socials: () => [
    '── SOCIAL INTEL FEEDS ──────────────────────',
    '  [X]         x.com/Coder_Pintu',
    '  [INSTAGRAM] instagram.com/coder_pintu',
    '  [LINKEDIN]  linkedin.com/in/pintuhembram',
    '─────────────────────────────────────────────',
  ],
  date: () => [new Date().toLocaleString()],
};

const BOOT_SEQUENCE: TerminalLine[] = [
  { type: 'system', text: '╔══════════════════════════════════════════════╗' },
  { type: 'system', text: '║   TACTICAL OPERATIONS COMMAND TERMINAL v2.0  ║' },
  { type: 'system', text: '║   CLASSIFICATION: UNCLASSIFIED // FOUO       ║' },
  { type: 'system', text: '╚══════════════════════════════════════════════╝' },
  { type: 'system', text: '' },
  { type: 'output', text: '[BOOT] Initializing secure shell...' },
  { type: 'output', text: '[AUTH] Identity verified — Welcome, Operator.' },
  { type: 'output', text: '[SYS]  Type "help" for available commands.' },
  { type: 'system', text: '' },
];

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Ctrl + `
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Boot sequence on open
  useEffect(() => {
    if (isOpen) {
      setLines(BOOT_SEQUENCE);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { type: 'input', text: `operator@hq:~$ ${trimmed}` },
    ];

    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const [command, ...args] = trimmed.toLowerCase().split(' ');

    if (command === 'clear') {
      setLines(BOOT_SEQUENCE);
      setInput('');
      return;
    }

    if (command === 'exit') {
      setIsOpen(false);
      setInput('');
      return;
    }

    if (command === 'echo') {
      newLines.push({ type: 'output', text: args.join(' ') || '' });
    } else if (COMMANDS[command]) {
      const output = COMMANDS[command](args);
      output.forEach(line => newLines.push({ type: 'output', text: line }));
    } else {
      newLines.push({ type: 'error', text: `[ERR] Command not found: "${command}". Type "help" for available commands.` });
    }

    newLines.push({ type: 'system', text: '' });
    setLines(newLines);
    setInput('');
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded border border-primary/30 bg-card/90 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-200 backdrop-blur-sm group"
        title="Open Terminal (Ctrl + `)"
      >
        <Terminal className="w-4 h-4 group-hover:animate-pulse" />
      </button>

      {/* Terminal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-2xl border border-primary/30 rounded bg-card/95 shadow-[0_0_40px_rgba(200,160,0,0.1)] backdrop-blur-md flex flex-col max-h-[80vh] animate-scale-in"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-primary">
                <Terminal className="w-3.5 h-3.5" />
                TACTICAL TERMINAL — SECURE SHELL
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green status-pulse" />
                  CONNECTED
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="text-muted-foreground hover:text-destructive transition-colors p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed scroll-smooth"
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === 'input'
                      ? 'text-primary'
                      : line.type === 'error'
                      ? 'text-cyber-red'
                      : line.type === 'system'
                      ? 'text-primary/60'
                      : 'text-muted-foreground'
                  }
                >
                  {line.text || '\u00A0'}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center gap-1.5 text-primary mt-1">
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
                <span className="text-muted-foreground">operator@hq:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-xs caret-primary"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-4 py-1.5 border-t border-border bg-muted/20 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>CTRL + ` TO TOGGLE</span>
              <span>TYPE "help" FOR COMMANDS</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalEasterEgg;
