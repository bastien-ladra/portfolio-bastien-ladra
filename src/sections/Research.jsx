import { ArrowRight, ArrowUpRight, CheckCircle2, FlaskConical, Microscope } from "lucide-react";

export default function Research({ research, copy, language }) {
  const caseStudyHref = `${import.meta.env.BASE_URL}case-study-cybersoc${language === "fr" ? "-fr" : ""}.html`;

  return (
    <section id="research" className="section-block relative overflow-hidden border-y border-white/5 bg-white/[0.015]">
      <div className="research-glow" aria-hidden="true" />
      <div className="site-shell">
        <div className="relative grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="lg:pt-2">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-50 sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">{copy.description}</p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.045] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-200">
              <Microscope size={14} aria-hidden="true" />
              {research.status}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              {copy.bridge.map((step, index) => (
                <div key={step} className="contents">
                  <span className="rounded-lg border border-white/[0.07] bg-[#0b111b]/70 px-3 py-2 text-xs font-medium text-slate-300">
                    {step}
                  </span>
                  {index < copy.bridge.length - 1 ? <ArrowRight size={13} aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <article className="rounded-3xl border border-cyan-300/15 bg-[#0d151f]/90 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.2)] sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/70">{copy.questionLabel}</p>
              <p className="mt-4 text-xl font-semibold leading-8 tracking-[-0.02em] text-slate-100 sm:text-2xl sm:leading-9">
                {research.question}
              </p>

              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{copy.hypothesisLabel}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{research.hypothesis}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {research.topics.map((topic) => (
                  <span key={topic} className="research-pill">
                    {topic}
                  </span>
                ))}
              </div>
            </article>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{copy.workstreamsLabel}</p>
              <div className="grid gap-3 md:grid-cols-3">
                {research.workstreams.map((workstream) => (
                  <article key={workstream.label} className="rounded-2xl border border-white/[0.08] bg-[#0d141f]/75 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-cyan-300/65">{workstream.label}</span>
                      <CheckCircle2 size={15} className="text-slate-700" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-100">{workstream.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{workstream.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <article className="flex flex-col gap-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
                  <FlaskConical size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyan-300/65">{copy.evidenceLabel}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-100">{copy.evidenceTitle}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{copy.evidenceDescription}</p>
                </div>
              </div>
              <a href={caseStudyHref} className="button-secondary shrink-0 whitespace-nowrap">
                {copy.evidenceCta} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
