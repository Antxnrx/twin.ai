import { useState } from 'react';
import { Paperclip, ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSend?: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim() && onSend) {
      onSend(value.trim());
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 bg-gradient-to-t from-background via-background to-transparent">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-2 px-4 py-3 bg-input-bar rounded-2xl border border-border/50 shadow-soft">
          <button
            type="button"
            className="flex-shrink-0 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            aria-label="Attach file"
          >
            <Paperclip className="w-5 h-5" strokeWidth={1.5} />
          </button>
          
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type here…"
            className="flex-1 bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          
          <button
            type="button"
            onClick={handleSend}
            disabled={!value.trim()}
            className={`
              flex-shrink-0 p-2 rounded-xl transition-all
              ${value.trim()
                ? 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
              }
            `}
            aria-label="Send message"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
