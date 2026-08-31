import { ArrowRight, FlaskConical } from "lucide-react";

export default function Research({ research, copy }) {
  return (
    <section id="research" className="section-block border-y border-white/5 bg-white/[0.015]">
      <div className="site-shell">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              {copy.title}
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <FlaskConical size={17} className="text-cyan-300" aria-hidden="true" />
              {copy.bridge.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-3">
                  {step}
                  {index < copy.bridge.length - 1 ? <ArrowRight size={14} aria-hidden="true" /> : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium leading-7 text-slate-200">{research.question}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {research.topics.map((topic) => (
                <span key={topic} className="research-pill">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
