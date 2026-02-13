import React from 'react';
import { SocietyCard } from '../components/SocietyCard';
import { GlassCard } from '../components/GlassCard';
import { Plus } from 'lucide-react';

const societies = [
  {
    name: 'Code Cell',
    description:
      'Organises hackathons, coding contests, and peer-led learning sprints focused on modern stacks.',
    members: 312,
    category: 'Technology'
  },
  {
    name: 'Aurora Cultural Collective',
    description:
      'Drama, dance, music, and fine arts under one banner that lights up every campus fest.',
    members: 428,
    category: 'Cultural'
  },
  {
    name: 'Sports Council',
    description:
      'Coordinates tournaments, training camps, and inter-college leagues across 12+ sports.',
    members: 226,
    category: 'Sports'
  },
  {
    name: 'Entrepreneurship Cell',
    description:
      'Startup workshops, founder fireside chats, and incubation support for student ventures.',
    members: 154,
    category: 'Entrepreneurship'
  },
  {
    name: 'Social Impact Forum',
    description:
      'Drives outreach programmes, donation drives, and long-term community partnerships.',
    members: 198,
    category: 'Social'
  },
  {
    name: 'Robotics & AI Society',
    description:
      'Hands-on projects with bots, CV, and ML; prepares teams for national-level competitions.',
    members: 137,
    category: 'Technology'
  }
];

const Societies: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
            Societies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Orchestrate every society from a single glass cockpit.
          </p>
        </div>
        <button className="btn-primary ripple-container text-xs md:text-sm">
          <Plus className="h-4 w-4" />
          <span>Create Society</span>
        </button>
      </div>

      <GlassCard className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl">
            Drag-select a cluster, filter by category, or let the AI assistant propose merges
            where membership overlaps heavily.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded-3xl bg-slate-900/80 border border-slate-700/70">
              {societies.length} active
            </span>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {societies.map(society => (
          <SocietyCard key={society.name} {...society} />
        ))}
      </div>
    </div>
  );
};

export default Societies;

