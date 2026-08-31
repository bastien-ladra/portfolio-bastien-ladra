import { GraduationCap, Languages, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { credentials, currentProgram, languages } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="section-block">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Current training and verified foundations."
          description="A concise view of the formal training and certifications that support the engineering work shown above."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="panel p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
                <ShieldCheck size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Current program</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-50">{currentProgram.title}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  {currentProgram.organization} · {currentProgram.period} · {currentProgram.duration}
                </p>
                <p className="mt-5 text-sm leading-6 text-slate-300">{currentProgram.description}</p>
              </div>
            </div>
          </article>

          <article className="panel p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <GraduationCap size={19} className="text-cyan-300" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Education & certifications</p>
            </div>
            <div className="mt-6 space-y-5">
              {credentials.map((credential) => (
                <div key={`${credential.year}-${credential.title}`} className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
                  <span className="font-mono text-xs text-slate-500">{credential.year}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{credential.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{credential.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <div className="flex items-center gap-3">
                <Languages size={18} className="text-cyan-300" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-200">Languages</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span key={language} className="tech-pill">{language}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
