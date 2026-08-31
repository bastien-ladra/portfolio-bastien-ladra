import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { focusAreas, profile } from "../data/content";

export default function Hero() {
  const cvHref = `${import.meta.env.BASE_URL}CV_Bastien_Ladra.pdf`;

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="site-shell relative pb-24 pt-12 sm:pb-32 sm:pt-20">
        <div className="max-w-5xl">
          <p className="eyebrow mb-6">Cybersecurity · DevSecOps · Cloud Security</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-50 sm:text-6xl lg:text-7xl">
            Secure systems from <span className="text-gradient">code to cloud.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View projects <ArrowRight size={17} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={17} /> GitHub
            </a>
            <a href={cvHref} className="button-secondary" download>
              <Download size={17} /> CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-sm text-slate-500">
            <span>{profile.name}</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>{profile.role}</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-slate-400 transition hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <div key={area} className="bg-[#0d131d]/95 px-5 py-5">
              <span className="font-mono text-xs text-cyan-300/60">0{index + 1}</span>
              <p className="mt-2 text-sm font-medium text-slate-200">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
