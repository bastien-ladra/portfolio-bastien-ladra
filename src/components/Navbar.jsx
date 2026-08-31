import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0f17]/85 backdrop-blur-xl">
      <nav className="site-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 font-mono text-sm font-semibold text-cyan-300 transition group-hover:border-cyan-300/50">
            BL
          </span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-[#0b0f17] md:hidden">
          <div className="site-shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-sm text-slate-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
