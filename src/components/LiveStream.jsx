import { useState } from 'react';

export default function LiveStream() {
  const [lap, setLap] = useState(28);
  const [totalLaps] = useState(58);
  const top5 = [
    { pos: 1, driver: 'Verstappen', gap: '-' },
    { pos: 2, driver: 'Norris', gap: '+3.1s' },
    { pos: 3, driver: 'Leclerc', gap: '+5.4s' },
    { pos: 4, driver: 'Hamilton', gap: '+8.8s' },
    { pos: 5, driver: 'Sainz', gap: '+11.2s' },
  ];

  return (
    <section id="live" className="bg-black py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-red-700/40 bg-zinc-900 shadow-xl">
            {/* Streaming placeholder */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-white/60">Embed your live player here</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-white/80">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">Live</span>
            </div>
            <div className="text-sm">Lap {lap} / {totalLaps}</div>
          </div>
        </div>

        {/* Side Panel */}
        <aside className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-zinc-950 p-4 text-white">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Race Stats</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded bg-black/40 p-3">
                <div className="text-white/60">Avg Speed</div>
                <div className="text-white font-semibold">247 km/h</div>
              </div>
              <div className="rounded bg-black/40 p-3">
                <div className="text-white/60">Best Lap</div>
                <div className="text-white font-semibold">1:22.513</div>
              </div>
              <div className="rounded bg-black/40 p-3">
                <div className="text-white/60">Pit Stops</div>
                <div className="text-white font-semibold">14</div>
              </div>
              <div className="rounded bg-black/40 p-3">
                <div className="text-white/60">Track Temp</div>
                <div className="text-white font-semibold">38°C</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-zinc-950 p-4 text-white">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Top 5 Drivers</h3>
            <ul className="mt-3 divide-y divide-white/5">
              {top5.map((d) => (
                <li key={d.pos} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-red-700/30 text-xs font-bold text-red-400">{d.pos}</span>
                    <span className="text-white">{d.driver}</span>
                  </div>
                  <span className="text-xs text-white/60">{d.gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
