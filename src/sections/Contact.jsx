import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Contact({ profile, copy, language }) {
  const emailLabel = language === "fr" ? "Écrire par e-mail" : "Email me";
  const linkedinLabel = language === "fr" ? "Échanger sur LinkedIn" : "Connect on LinkedIn";

  return (
    <footer id="contact" className="section-block pb-10">
      <div className="site-shell">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-cyan-300/[0.025] p-8 sm:p-12">
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                {copy.description}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                <Mail size={15} aria-hidden="true" /> {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={`mailto:${profile.email}`} className="button-primary whitespace-nowrap">
                {emailLabel} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-secondary whitespace-nowrap"
              >
                <Linkedin size={17} aria-hidden="true" /> {linkedinLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/5 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. {copy.builtWith}</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="footer-link" aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
