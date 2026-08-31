import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { getExperienceKind } from "../data/experienceTaxonomy";

export default function Experience({ experiences, copy, language }) {
  const professionalExperiences = experiences.filter(
    (experience) => getExperienceKind(experience.company) === "professional",
  );
  const academicExperience = experiences.find(
    (experience) => getExperienceKind(experience.company) === "academic",
  );
  const unclassifiedExperiences = experiences.filter(
    (experience) => getExperienceKind(experience.company) === null,
  );
  const academicLabel = language === "fr" ? "Projet académique · Epitech" : "Academic project · Epitech";
  const academicContext =
    language === "fr"
      ? "Expérience de projet menée pendant le cursus Epitech — présentée séparément des expériences professionnelles."
      : "Project experience completed during the Epitech curriculum — shown separately from professional employment.";

  if (unclassifiedExperiences.length > 0) {
    console.warn("Unclassified portfolio experience:", unclassifiedExperiences.map((experience) => experience.company));
  }

  return (
    <section id="experience" className="section-block">
      <div className="site-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="relative border-t border-white/10">
          <span
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/[0.06] md:block"
            aria-hidden="true"
          />
          {professionalExperiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="group relative grid gap-5 border-b border-white/10 py-8 md:grid-cols-[190px_1fr] md:gap-10 md:pl-6"
            >
              <div className="relative">
                <span
                  className="absolute -left-[29px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-[#0b0f17] bg-cyan-300/70 md:block"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{experience.period}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">{experience.company}</h3>
                <p className="mt-1.5 text-sm font-semibold text-cyan-300/90">{experience.role}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{experience.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {academicExperience ? (
          <aside className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.018] p-6 sm:p-7" aria-label={academicLabel}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                  <GraduationCap size={16} className="text-cyan-300/80" aria-hidden="true" />
                  {academicLabel}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                  {academicExperience.role}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{academicContext}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{academicExperience.summary}</p>
              </div>
              <p className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-slate-600">
                {academicExperience.period}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {academicExperience.items.map((item) => (
                <span key={item} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
