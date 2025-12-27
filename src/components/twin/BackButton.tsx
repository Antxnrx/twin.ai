import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="
        flex items-center justify-center gap-2
        w-full py-3.5 px-6
        bg-card hover:bg-muted/50
        border border-border/50
        rounded-2xl
        text-sm font-medium text-foreground
        shadow-soft
        transition-all duration-200
        active:scale-[0.98]
      "
    >
      <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
      <span>Back</span>
    </button>
  );
}
