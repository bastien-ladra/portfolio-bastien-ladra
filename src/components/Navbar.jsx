import { useEffect, useState } from "react";
import { Download, Mail, Menu, X } from "lucide-react";

export default function Navbar({ profile, navItems, language, onLanguageChange, copy }) {
  const [open, setOpen] = useState(false);
  const resumePdf =
    language === "fr" ? "Bastien_Ladra_CV_Public_FR_2026.pdf" : "Bastien_Ladra_Resume_Public_EN_2026.pdf";
  const resumePdfHref = `${import.meta.env.BASE_URL}${resumePdf}`;
  const resumeLabel = language === "fr" ? "CV PDF" : "Resume PDF";
  const emailLabel = language === "fr" ? "Écrire par e-mail" : "Email me";

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0f17]/85 backdrop-blur-xl">
      <nav className="site-shell flex h-16 items-center justify-between" aria-label={copy.navAria}>
        <a href="#top" className="group flex items-center gap-3" aria-label={copy.homeAria}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 font-mono text-sm font-semibold text-cyan-300 transition group-hover:border-cyan-300/50">
            BL
          </span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">{profile.name}</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={resumePdfHref}
            download={resumePdf}
            className="hidden items-center gap-1.5 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.045] px-3 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] sm:inline-flex"
          >
            <Download size={14} aria-hidden="true" /> {resumeLabel}
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-200 md:inline-flex"
            aria-label={emailLabel}
            title={emailLabel}
          >
            <Mail size={16} aria-hidden="true" />
          </a>

          <div
            className="flex items-center rounded-lg border border-white/10 bg-white/[0.025] p-0.5"
            role="group"
            aria-label={copy.languageSelector}
          >
            {["fr", "en"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onLanguageChange(code)}
                aria-pressed={language === code}
                className={`rounded-md px-2 py-1 font-mono text-[11px] font-semibold uppercase transition ${
                  language === code
                    ? "bg-cyan-300/10 text-cyan-200"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-slate-100 lg:hidden"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-white/5 bg-[#0b0f17] lg:hidden">
          <div className="site-shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-sm text-slate-300 transition hover:bg-white/[0.03] hover:text-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 sm:hidden">
              <a
                href={resumePdfHref}
                download={resumePdf}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.045] px-3 py-3 text-sm font-semibold text-cyan-200"
                onClick={() => setOpen(false)}
              >
                <Download size={15} aria-hidden="true" /> {resumeLabel}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200"
                onClick={() => setOpen(false)}
              >
                <Mail size={15} aria-hidden="true" /> {emailLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
