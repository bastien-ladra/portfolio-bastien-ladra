import SectionHeading from "../components/SectionHeading";

export default function Experience({ experiences, copy }) {
  return (
    <section id="experience" className="section-block">
      <div className="site-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="relative border-t border-white/10">
          <span
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/[0.06] md:block"
            aria-hidden="true"
          />
          {experiences.map((experience, index) => (
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
      </div>
    </section>
  );
}
