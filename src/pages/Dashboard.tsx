import React from 'react';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';
import { Users2, CalendarDays, TicketCheck, BrainCircuit } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const activityData = [
  { month: 'Jan', events: 8, attendees: 420 },
  { month: 'Feb', events: 11, attendees: 610 },
  { month: 'Mar', events: 13, attendees: 720 },
  { month: 'Apr', events: 9, attendees: 560 },
  { month: 'May', events: 16, attendees: 910 }
];

const categoryData = [
  { name: 'Tech', value: 16 },
  { name: 'Cultural', value: 10 },
  { name: 'Sports', value: 8 },
  { name: 'Social', value: 6 }
];

const donutColors = ['#00f5ff', '#22c55e', '#a855f7', '#f97316'];

const recentActivity = [
  {
    id: 1,
    title: 'HackFest ’26 registrations closed at 480 attendees.',
    time: '12 min ago',
    tag: 'Tech'
  },
  {
    id: 2,
    title: 'Annual Cultural Night approved budget of ₹1.8L.',
    time: '1 hr ago',
    tag: 'Cultural'
  },
  {
    id: 3,
    title: 'Robotics Society onboarded 32 new members.',
    time: '3 hrs ago',
    tag: 'Membership'
  },
  {
    id: 4,
    title: 'AI assistant drafted mailers for Sports Week.',
    time: 'Yesterday',
    tag: 'AI'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Fusion Week',
    date: '21 Feb',
    time: '10:00 AM',
    society: 'Code Cell'
  },
  {
    id: 2,
    title: 'Inter-College Debate League',
    date: '27 Feb',
    time: '2:30 PM',
    society: 'Literary Society'
  },
  {
    id: 3,
    title: 'Aurora Cultural Night',
    date: '08 Mar',
    time: '6:00 PM',
    society: 'Cultural Board'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Members"
          value={1864}
          icon={<Users2 className="h-4 w-4" />}
          accent="cyan"
        />
        <StatCard
          label="Active Societies"
          value={40}
          icon={<TicketCheck className="h-4 w-4" />}
          accent="purple"
        />
        <StatCard
          label="Events This Month"
          value={24}
          icon={<CalendarDays className="h-4 w-4" />}
          accent="cyan"
        />
        <StatCard
          label="AI Suggestions Shipped"
          value={72}
          icon={<BrainCircuit className="h-4 w-4" />}
          accent="purple"
        />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <GlassCard className="xl:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base md:text-lg font-semibold">Engagement Overview</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Events & attendance trend over the current semester.
              </p>
            </div>
          </div>
          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15,23,42,0.9)',
                    borderRadius: 16,
                    border: '1px solid rgba(148,163,184,0.35)'
                  }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  name="Events"
                  stroke="#00f5ff"
                  strokeWidth={2.2}
                  dot={{ r: 4, strokeWidth: 2, stroke: '#0f172a', fill: '#00f5ff' }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="attendees"
                  name="Attendees"
                  stroke="#a855f7"
                  strokeWidth={2.2}
                  dot={{ r: 4, strokeWidth: 2, stroke: '#0f172a', fill: '#a855f7' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
                Society Mix
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Distribution across categories.
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={4}
                  blendStroke
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={donutColors[index % donutColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {categoryData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-3xl bg-slate-900/70 px-2.5 py-1.5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: donutColors[index % donutColors.length] }}
                  />
                  <span>{item.name}</span>
                </div>
                <span className="text-slate-700 dark:text-slate-300">{item.value}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
              Recent Activity
            </h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map(item => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 rounded-3xl bg-slate-900/70 px-3 py-2"
              >
                <div className="flex-1">
                  <p className="text-sm text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{item.time}</p>
                </div>
                <span className="px-2.5 py-1 rounded-3xl text-[11px] bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300/60 dark:border-slate-600/60">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
              Upcoming Events
            </h2>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <div
                key={event.id}
                className="flex items-center justify-between gap-3 rounded-3xl bg-slate-900/70 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    {event.title}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    {event.society} • {event.time}
                  </p>
                </div>
                <div className="flex flex-col items-end text-xs text-slate-700 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded-3xl bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300/70 dark:border-slate-600/70">
                    {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Dashboard;

