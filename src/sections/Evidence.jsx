import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { engineeringEvidence, projects } from "../data/content";

export default function Evidence() {
  const flagship = projects[0];

  return (
    <section id="evidence" className="section-block border-y border-white/5 bg-white/[0.015]">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Engineering evidence"
          title="Security claims backed by implemented controls."
          description="The flagship project is built to make security decisions inspectable: the repository contains the workflows, policies and infrastructure code behind the claims."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringEvidence.map((item) => (
            <article key={item.label} className="panel p-6">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-50">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-cyan-300">{item.label}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Inspect the implementation</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Follow the controls from source code and dependencies through container provenance, infrastructure checks and runtime validation.
            </p>
          </div>
          <a
            href={flagship.href}
            target="_blank"
            rel="noreferrer"
            className="button-secondary shrink-0"
          >
            View repository <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
