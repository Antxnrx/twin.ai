import { ReactNode } from 'react';

interface SettingsCardProps {
  title: string;
  children: ReactNode;
}

export function SettingsCard({ title, children }: SettingsCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-soft overflow-hidden animate-fade-in">
      <div className="px-4 py-3 border-b border-border/50">
        <h3 className="text-sm font-semibold text-foreground tracking-tight">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
