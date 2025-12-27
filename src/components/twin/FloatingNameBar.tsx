import { useNavigate } from 'react-router-dom';

interface FloatingNameBarProps {
  name: string;
  isClickable?: boolean;
}

export function FloatingNameBar({ name, isClickable = true }: FloatingNameBarProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClickable) {
      navigate('/settings');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <button
        onClick={handleClick}
        disabled={!isClickable}
        className={`
          pointer-events-auto
          flex items-center gap-2.5 
          px-5 py-2.5
          bg-floating-bar 
          rounded-2xl
          shadow-floating
          border border-border/50
          transition-theme
          ${isClickable ? 'cursor-pointer hover:shadow-soft-lg active:scale-[0.98]' : 'cursor-default'}
        `}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-pulse-subtle absolute inline-flex h-full w-full rounded-full bg-status-dot opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-status-dot"></span>
        </span>
        <span className="text-sm font-medium text-floating-bar-foreground tracking-tight">
          {name}
        </span>
      </button>
    </div>
  );
}
