import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Wand2, BrainCircuit, MessageSquareDashed } from 'lucide-react';
import { motion } from 'framer-motion';

const Ai: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
            AI Recommendations
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            A glass panel where your campus data quietly thinks for you.
          </p>
        </div>
      </div>

      <GlassCard className="p-5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.span
            className="absolute right-10 top-6 h-24 w-24 rounded-full bg-neonCyan/15 blur-3xl"
            animate={{ opacity: [0.3, 0.7, 0.4], scale: [1, 1.1, 0.95] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute left-8 bottom-4 h-28 w-28 rounded-full bg-neonPurple/20 blur-3xl"
            animate={{ opacity: [0.3, 0.8, 0.4], scale: [1.1, 0.95, 1.05] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-200/80 dark:bg-slate-900/70 border border-neonCyan/40 px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200">
              <Sparkles className="h-4 w-4 text-neonCyan" />
              <span>AI is analysing this week’s societies & events...</span>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              <p>
                Based on current registrations, engagement, and conflict checks, here’s how CampusOS
                thinks you can get a{' '}
                <span className="text-neonCyan font-medium">+18% boost</span> in participation this
                month.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>
                  <span className="text-neonCyan">•</span> Shift{' '}
                  <span className="font-medium">HackFest ’26</span> keynote 30 minutes later to
                  avoid clash with lab exit times.
                </li>
                <li>
                  <span className="text-neonCyan">•</span> Co-host an{' '}
                  <span className="font-medium">Aurora x Code Cell</span> showcase for cross-society
                  discovery.
                </li>
                <li>
                  <span className="text-neonCyan">•</span> Nudge{' '}
                  <span className="font-medium">first years in hostels B & C</span> for Sports Week
                  signups.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-3xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700/70">
                <BrainCircuit className="h-4 w-4 text-neonCyan" />
                <span>Uses anonymised attendance, timetable, and hostel data.</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-72 space-y-4">
            <div className="rounded-3xl bg-slate-100/90 dark:bg-slate-950/80 border border-slate-300/70 dark:border-slate-700/70 p-3 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-slate-600 dark:text-slate-400">Sparkle feed</span>
                <Wand2 className="h-4 w-4 text-neonPurple" />
              </div>
              <div className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neonCyan animate-pulse" />
                  <p>“Sports Week can borrow audio setup from Aurora, no overlapping slots.”</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neonPurple animate-pulse" />
                  <p>“Three societies planning design workshops in the same week – propose merge.”</p>
                </div>
              </div>
            </div>

            <button className="btn-primary ripple-container w-full text-xs sm:text-sm mt-2">
              <MessageSquareDashed className="h-4 w-4" />
              <span>Ask AI to craft a plan</span>
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Ai;

