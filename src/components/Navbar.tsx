import React from 'react';
import { Bell, Search, ChevronDown, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-4 mb-6">
      <div className="hidden md:block">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 text-slate-900 dark:text-slate-50">
          Welcome back, Coordinator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Track societies, events, and AI insights in one glassy workspace.
        </p>
      </div>

      <div className="flex-1 flex md:justify-end items-center gap-3">
        <div className="flex-1 md:flex-none">
          <div className="hidden sm:flex items-center gap-2 glass-card px-3 py-2">
            <Search className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search societies, events, members..."
              className="bg-transparent border-none outline-none text-sm placeholder:text-slate-500 flex-1"
            />
            <span className="hidden md:inline-flex text-[11px] text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-3xl border border-slate-300/60 dark:border-slate-700/60">
              Ctrl + K
            </span>
          </div>
        </div>

        <button
          className="relative h-10 w-10 rounded-3xl flex items-center justify-center bg-slate-900/70 border border-slate-700/70 hover:border-neonCyan/60 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4 text-slate-100" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(248,113,113,0.9)] animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-400" />
        </button>

        <ThemeToggle />

        <motion.button
          whileTap={{ scale: 0.97 }}
          className="glass-card flex items-center gap-2 pl-2 pr-3 py-1.5"
        >
          <div className="h-8 w-8 rounded-3xl bg-gradient-to-tr from-neonCyan/40 to-neonPurple/60 flex items-center justify-center">
            <User className="h-4 w-4 text-slate-950" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs text-slate-300">Coordinator</p>
            <p className="text-sm font-medium">Ayush Sharma</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
        </motion.button>
      </div>
    </header>
  );
};

