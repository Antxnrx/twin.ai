import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light' as const, label: 'Light', icon: Sun },
    { id: 'dark' as const, label: 'Dark', icon: Moon },
    { id: 'midnight' as const, label: 'Midnight', icon: Sparkles },
  ];

  return (
    <div className="flex gap-2">
      {themes.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`
            flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg
            transition-all duration-200
            ${theme === id
              ? 'bg-primary/10 border border-primary/30 text-primary'
              : 'bg-muted/50 border border-transparent text-muted-foreground hover:bg-muted'
            }
          `}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-xs font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}
