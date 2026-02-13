import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import clsx from 'clsx';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  accent?: 'cyan' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, prefix, suffix, icon, accent = 'cyan' }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <GlassCard className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">{label}</p>
        {icon && (
          <div
            className={clsx(
              'h-9 w-9 rounded-3xl flex items-center justify-center',
              accent === 'cyan'
                ? 'bg-neonCyan/10 text-neonCyan border border-neonCyan/30'
                : 'bg-neonPurple/10 text-neonPurple border border-neonPurple/30'
            )}
          >
            {icon}
          </div>
        )}
      </div>
      <motion.div layout className="flex items-baseline gap-1">
        {prefix && <span className="text-lg text-slate-400">{prefix}</span>}
        <span className="text-3xl font-semibold tracking-tight">
          {displayValue.toLocaleString('en-IN')}
        </span>
        {suffix && <span className="text-sm text-slate-400">{suffix}</span>}
      </motion.div>
    </GlassCard>
  );
};

