import { FloatingNameBar } from '@/components/twin/FloatingNameBar';
import { SettingsCard } from '@/components/twin/SettingsCard';
import { SettingsToggle } from '@/components/twin/SettingsToggle';
import { ThemeSelector } from '@/components/twin/ThemeSelector';
import { BackButton } from '@/components/twin/BackButton';
import { Download, Upload } from 'lucide-react';

export default function SettingsScreen() {
  return (
    <div className="min-h-screen bg-background transition-theme">
      <FloatingNameBar name="Anton Raj" isClickable={false} />
      
      {/* Settings Content */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-lg mx-auto space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-6">
            Settings
          </h1>

          {/* Appearance */}
          <SettingsCard title="Appearance">
            <ThemeSelector />
          </SettingsCard>

          {/* Memory */}
          <SettingsCard title="Memory">
            <p className="text-sm text-muted-foreground mb-4">
              8 core memories, 5 preferences, 14 temporary
            </p>
            <button className="w-full py-2.5 px-4 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium text-foreground transition-colors">
              Manage Memory
            </button>
          </SettingsCard>

          {/* Backup & Import */}
          <SettingsCard title="Backup & Import">
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium text-foreground transition-colors">
                <Download className="w-4 h-4" strokeWidth={1.5} />
                <span>Export Twin (.twin)</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium text-foreground transition-colors">
                <Upload className="w-4 h-4" strokeWidth={1.5} />
                <span>Import Backup</span>
              </button>
            </div>
          </SettingsCard>

          {/* Modes */}
          <SettingsCard title="Modes">
            <div className="space-y-1">
              <SettingsToggle label="Learning Mode" defaultChecked={true} />
              <SettingsToggle label="Simulation Mode" defaultChecked={false} />
              <SettingsToggle label="Freeze Memory" defaultChecked={false} />
            </div>
          </SettingsCard>

          {/* Reset */}
          <SettingsCard title="Danger Zone">
            <div className="space-y-2">
              <button className="w-full py-2.5 px-4 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                Soft Reset
              </button>
              <button className="w-full py-2.5 px-4 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                Memory Reset
              </button>
              <button className="w-full py-2.5 px-4 text-left text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                Full Reset
              </button>
            </div>
          </SettingsCard>

          {/* Back Button */}
          <div className="pt-4">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}
