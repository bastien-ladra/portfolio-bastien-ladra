import { ArrowRight, Github, Linkedin, MapPin, ShieldCheck } from "lucide-react";
import { focusAreas, profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="site-shell relative pb-24 pt-12 sm:pb-32 sm:pt-20">
        <div className="max-w-5xl">
          <p className="eyebrow mb-6">Cybersecurity · DevSecOps · Cloud Security</p>
          <h1
            id="hero-title"
            className="max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-50 sm:text-6xl lg:text-7xl"
          >
            Secure systems from <span className="text-gradient">code to cloud.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="font-medium text-slate-300">{profile.name}</span>
            <span>{profile.role}</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" aria-hidden="true" />
            <span>{profile.credential}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View engineering work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <a href="#credentials" className="button-secondary">
              <ShieldCheck size={17} aria-hidden="true" /> Credentials
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
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
