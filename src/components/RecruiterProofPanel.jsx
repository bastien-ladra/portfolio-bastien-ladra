import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function RecruiterProofPanel({ recruiterSignals, language }) {
  const copy =
    language === "fr"
      ? {
          eyebrow: "Profil en bref",
          title: "Des preuves avant les buzzwords.",
          status: "vérifié",
          delivery: "Chaîne de confiance",
          stages: ["Code", "CI/CD", "Artefact", "Cloud"],
          footer: "Expérience production + projets publics inspectables",
        }
      : {
          eyebrow: "At a glance",
          title: "Evidence before buzzwords.",
          status: "verified",
          delivery: "Delivery trust path",
          stages: ["Code", "CI/CD", "Artifact", "Cloud"],
          footer: "Production experience + inspectable public engineering",
        };

  return (
    <aside className="hero-proof-panel" aria-label={copy.title}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300/70">{copy.eyebrow}</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-50">{copy.title}</h2>
        </div>
        <span className="proof-status" aria-hidden="true">
          <span className="proof-status-dot" /> {copy.status}
        </span>
      </div>

      <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {recruiterSignals.map((signal) => (
          <div key={signal.label} className="bg-[#0b111b] px-4 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">{signal.label}</p>
            <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-200">{signal.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/[0.07] pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">{copy.delivery}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:items-center">
          {copy.stages.map((stage, index) => (
            <div key={stage} className="contents">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.035] px-2.5 py-2">
                <CheckCircle2 size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <span className="truncate font-mono text-[10px] text-slate-300">{stage}</span>
              </div>
              {index < copy.stages.length - 1 ? (
                <ArrowRight size={12} className="hidden shrink-0 text-slate-700 sm:block" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-slate-500">
        <CheckCircle2 size={13} className="shrink-0 text-cyan-300/70" aria-hidden="true" />
        {copy.footer}
      </p>
    </aside>
  );
}
