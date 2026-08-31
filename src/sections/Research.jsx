import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { researchTopics } from "../data/content";

export default function Research() {
  return (
    <section id="research" className="section-block border-y border-white/5 bg-white/[0.015]">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Current direction"
          title="Extending secure software thinking toward AI systems."
          description="I am progressively connecting my work on secure delivery and software supply chains with ML and AI security, especially provenance, pipeline security and trustworthy deployment."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Research bridge</p>
            <div className="mt-7 space-y-4">
              {["Secure CI/CD", "Software supply chain", "Secure MLOps", "AI security research"].map((step, index, list) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-slate-400">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-200">{step}</span>
                  {index < list.length - 1 ? <ArrowRight size={15} className="ml-auto text-slate-600" /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Topics</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {researchTopics.map((topic) => (
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
