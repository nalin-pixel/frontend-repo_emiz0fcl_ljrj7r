import { Play } from 'lucide-react';

const schedule = [
  { round: 1, name: 'Australian Grand Prix', date: 'Mar 24, 2025', time: '06:00 UTC' },
  { round: 2, name: 'Bahrain Grand Prix', date: 'Apr 07, 2025', time: '15:00 UTC' },
  { round: 3, name: 'Monaco Grand Prix', date: 'May 18, 2025', time: '13:00 UTC' },
  { round: 4, name: 'British Grand Prix', date: 'Jul 06, 2025', time: '14:00 UTC' },
];

const highlights = [
  { id: 1, title: 'Monza Overtakes', thumb: '', duration: '4:12' },
  { id: 2, title: 'Night Race Drama', thumb: '', duration: '5:45' },
  { id: 3, title: 'Wet Weather Masterclass', thumb: '', duration: '3:58' },
  { id: 4, title: 'Last Lap Battles', thumb: '', duration: '6:04' },
];

export default function ScheduleHighlights() {
  return (
    <div className="bg-gradient-to-b from-black to-zinc-950" id="schedule">
      {/* Schedule */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Upcoming Schedule</h2>
          <p className="text-sm text-white/60">Times may change. Local timezone conversions apply.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {schedule.map((race) => (
            <div
              key={race.round}
              className="group relative overflow-hidden rounded-xl border border-red-700/40 bg-zinc-950 p-4 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-red-900/20"
            >
              {/* circuit image placeholder */}
              <div className="mb-4 h-28 w-full rounded bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-red-400">Round {race.round}</p>
                  <h3 className="text-white">{race.name}</h3>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-white/70">
                <span>{race.date}</span>
                <span>{race.time}</span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-red-600/0 transition group-hover:ring-4 group-hover:ring-red-600/40" />
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Highlights</h2>
          <p className="text-sm text-white/60">Race recaps and best moments.</p>
        </div>

        <div className="relative">
          <div className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-4">
            {highlights.map((h) => (
              <article
                key={h.id}
                className="snap-start shrink-0 w-72 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
                  {/* play icon */}
                  <div className="absolute inset-0 grid place-items-center">
                    <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-black/60 text-white shadow-lg transition hover:scale-105">
                      <Play size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white/80">{h.duration}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-white">{h.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
