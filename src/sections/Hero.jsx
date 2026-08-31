import { ArrowRight, FileText, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero({ profile, recruiterSignals, language, copy }) {
  const resumeHref = `${import.meta.env.BASE_URL}resume.html?lang=${language}`;

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="site-shell relative pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div className="max-w-5xl">
          <p className="eyebrow mb-5">{copy.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-slate-50 sm:text-6xl lg:text-7xl"
          >
            {copy.hero.headingBefore} <span className="text-gradient">{copy.hero.headingAccent}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="font-semibold text-slate-200">{profile.name}</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" aria-hidden="true" />
            <span>{profile.credential}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              {copy.hero.selectedWork} <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={resumeHref} className="button-secondary">
              <FileText size={17} aria-hidden="true" /> {copy.hero.resume}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label={copy.hero.githubAria}
            >
              <Github size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterSignals.map((signal) => (
            <div key={signal.label} className="bg-[#0d131d]/95 px-5 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300/60">{signal.label}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
