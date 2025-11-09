import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full min-h-[540px] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay to ensure text contrast - pointer-events-none as required */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Experience the Thrill of Formula 1
          </h1>
          <p className="mt-4 text-white/80">
            Live stream updates, rankings, schedules and race highlights — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#live"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-700/30 transition hover:bg-red-500"
            >
              Watch Live
            </a>
            <a
              href="#rankings"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-black/70 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-black/60"
            >
              View Rankings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
