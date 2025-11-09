import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Rankings', href: '#rankings' },
    { label: 'Live Stream', href: '#live' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/70 shadow-lg' : 'bg-gradient-to-r from-red-700 to-black'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-red-600 to-red-900 shadow shadow-red-700" />
            <span className="font-black tracking-wide text-white">F1 STREAM</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-md bg-black/60 p-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* thin red accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
    </header>
  );
}
