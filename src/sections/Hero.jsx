import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import RecruiterProofPanel from "../components/RecruiterProofPanel";

export default function Hero({ profile, recruiterSignals, language, copy }) {
  const resumePdf =
    language === "fr" ? "Bastien_Ladra_CV_Public_FR_2026.pdf" : "Bastien_Ladra_Resume_Public_EN_2026.pdf";
  const resumePdfHref = `${import.meta.env.BASE_URL}${resumePdf}`;
  const resumeLabel = language === "fr" ? "Télécharger le CV" : "Download resume";

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="site-shell relative pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow mb-5">{copy.hero.eyebrow}</p>
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-50 sm:text-6xl lg:text-[4.15rem] lg:leading-[1.02]"
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
              <a href={resumePdfHref} download={resumePdf} className="button-primary">
                <Download size={17} aria-hidden="true" /> {resumeLabel}
              </a>
              <a href="#projects" className="button-secondary">
                {copy.hero.selectedWork} <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="button-secondary">
                <Linkedin size={17} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label={copy.hero.githubAria}
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <RecruiterProofPanel recruiterSignals={recruiterSignals} language={language} />
        </div>
      </div>
    </section>
  );
}
