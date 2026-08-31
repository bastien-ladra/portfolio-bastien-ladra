import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Professional experience"
          title="Production experience across DevSecOps, cloud security and SecOps."
          description="My background spans secure delivery, GCP security operations, vulnerability supervision and engineering automation — not only lab projects."
        />

        <div className="border-t border-white/10">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[190px_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{experience.period}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{experience.role}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-300/90">{experience.company}</p>
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
      </div>
    </section>
  );
}
