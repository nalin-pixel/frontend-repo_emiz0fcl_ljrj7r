import { useMemo } from 'react';

const sampleData = [
  { position: 1, driver: 'Max Verstappen', team: 'Red Bull Racing', points: 395 },
  { position: 2, driver: 'Lando Norris', team: 'McLaren', points: 312 },
  { position: 3, driver: 'Charles Leclerc', team: 'Ferrari', points: 301 },
  { position: 4, driver: 'Lewis Hamilton', team: 'Mercedes', points: 268 },
  { position: 5, driver: 'Carlos Sainz', team: 'Ferrari', points: 245 },
  { position: 6, driver: 'Oscar Piastri', team: 'McLaren', points: 230 },
];

export default function Rankings() {
  const rows = useMemo(() => sampleData, []);

  return (
    <section id="rankings" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Driver Rankings</h2>
            <p className="mt-1 text-sm text-white/60">Live leaderboard — updated throughout the season.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-red-700/40 bg-black/60 shadow-2xl">
          <table className="min-w-full divide-y divide-red-700/30">
            <thead>
              <tr className="bg-gradient-to-r from-red-700/40 to-black">
                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/80">Position</th>
                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/80">Driver</th>
                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/80">Team</th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-white/80">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r, idx) => (
                <tr
                  key={r.position}
                  className={`${idx % 2 === 0 ? 'bg-gradient-to-r from-zinc-950 to-black' : 'bg-black'} hover:bg-red-950/40 transition-colors`}
                >
                  <td className="px-4 py-4 text-sm font-semibold text-white/90">#{r.position}</td>
                  <td className="px-4 py-4 text-sm text-white">{r.driver}</td>
                  <td className="px-4 py-4 text-sm text-white/80">{r.team}</td>
                  <td className="px-4 py-4 text-right text-sm font-bold text-red-400">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
