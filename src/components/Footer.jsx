import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
  ];

  const smallLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Support', href: '#contact' },
  ];

  return (
    <footer id="contact" className="relative bg-black">
      <div className="h-0.5 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-red-600 to-red-900 shadow shadow-red-700" />
            <span className="font-black tracking-wide text-white">F1 STREAM</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="text-white/70 transition hover:text-white">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} F1 Stream. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            {smallLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-white/60 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
