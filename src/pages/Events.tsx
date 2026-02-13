import React from 'react';
import { EventCard } from '../components/EventCard';
import { GlassCard } from '../components/GlassCard';
import { Filter } from 'lucide-react';

const events = [
  {
    title: 'HackFest ’26',
    society: 'Code Cell',
    date: '17 Feb, Sat',
    time: '09:30 AM',
    venue: 'Innovation Lab',
    status: 'Filling Fast' as const,
    capacityLabel: '184 / 220 seats',
    capacityBarClass: 'w-[82%]'
  },
  {
    title: 'Aurora Cultural Night',
    society: 'Aurora Cultural Collective',
    date: '01 Mar, Sat',
    time: '06:00 PM',
    venue: 'Open Air Theatre',
    status: 'Open' as const,
    capacityLabel: '312 / 600 seats',
    capacityBarClass: 'w-[52%]'
  },
  {
    title: 'Founders’ Fireside',
    society: 'Entrepreneurship Cell',
    date: '22 Feb, Thu',
    time: '04:30 PM',
    venue: 'Block C Auditorium',
    status: 'Full' as const,
    capacityLabel: '120 / 120 seats',
    capacityBarClass: 'w-[100%]'
  },
  {
    title: 'Robotics Showdown X',
    society: 'Robotics & AI Society',
    date: '08 Mar, Sat',
    time: '11:00 AM',
    venue: 'Main Indoor Arena',
    status: 'Open' as const,
    capacityLabel: '64 / 150 slots',
    capacityBarClass: 'w-[42%]'
  }
];

const Events: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
            Events
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Capacity-aware scheduling with live visibility into what’s filling up.
          </p>
        </div>
        <button className="btn-primary ripple-container text-xs md:text-sm">
          <Filter className="h-4 w-4" />
          <span>Filter & Calendar</span>
        </button>
      </div>

      <GlassCard className="p-4">
        <p className="text-xs text-slate-600 dark:text-slate-300">
          AI can auto-suggest slots to avoid clashes with exams, labs, and other flagship events.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        {events.map(event => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;

