import React from 'react';
import { GlassCard } from './GlassCard';
import { CalendarDays, MapPin, Clock3 } from 'lucide-react';
import clsx from 'clsx';

interface EventCardProps {
  title: string;
  society: string;
  date: string;
  time: string;
  venue: string;
  status: 'Open' | 'Filling Fast' | 'Full';
  capacityLabel: string;
  capacityBarClass: string; // Tailwind width class e.g. w-[65%]
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  society,
  date,
  time,
  venue,
  status,
  capacityLabel,
  capacityBarClass
}) => {
  const statusColors: Record<EventCardProps['status'], string> = {
    Open: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
    'Filling Fast': 'bg-amber-500/15 text-amber-300 border-amber-400/40',
    Full: 'bg-rose-500/15 text-rose-300 border-rose-400/40'
  };

  return (
    <GlassCard className="p-5 relative overflow-hidden border-transparent hover:border-neonCyan/60">
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-neonCyan/0 via-neonPurple/0 to-neonCyan/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">{society}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span
          className={clsx(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-3xl text-[11px] border animate-pulse-soft',
            statusColors[status]
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
          {status}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 dark:text-slate-300 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-neonCyan" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-neonCyan" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-neonCyan" />
          <span>{venue}</span>
        </div>
      </div>

      <div className="space-y-2 relative z-10">
        <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
          <span>Capacity</span>
          <span>{capacityLabel}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-900/80 overflow-hidden border border-slate-700/70">
          <div
            className={clsx(
              'h-full rounded-full bg-gradient-to-r from-neonCyan via-cyan-400 to-neonPurple shadow-glow transition-all duration-500',
              capacityBarClass
            )}
          />
        </div>
      </div>
    </GlassCard>
  );
};

