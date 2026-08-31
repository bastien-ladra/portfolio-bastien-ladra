import { ArrowRight, ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { projectProofs } from "../data/projectProofs";

export default function ProjectCard({ project, featured = false, language, copy }) {
  const labels = [
    [copy.challenge, "challenge"],
    [copy.approach, "approach"],
    [copy.outcome, "outcome"],
  ];
  const caseStudyHref = project.caseStudyHref
    ? language === "fr"
      ? project.caseStudyHref.replace(".html", "-fr.html")
      : project.caseStudyHref
    : null;
  const proof = projectProofs[language]?.[project.title];
  const privateLabel =
    language === "fr"
      ? "Dépôt de formation privé — preuves synthétisées"
      : "Private training repository — evidence summarized";

  return (
    <article className={`project-card ${featured ? "lg:col-span-2" : ""}`}>
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">
              {project.type}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">{project.title}</h3>
          </div>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label={`${copy.sourceAria} ${project.title}`}
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-slate-600" aria-hidden="true">
              <LockKeyhole size={18} />
            </span>
          )}
        </div>

        <p className="max-w-3xl text-base leading-7 text-slate-400">{project.summary}</p>

        {proof ? (
          <div className="mt-7 overflow-hidden rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.025]">
            <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300/65">{proof.label}</p>
                <div className="mt-4 flex flex-wrap gap-5 sm:gap-7">
                  {proof.metrics.map((metric) => (
                    <div key={`${metric.value}-${metric.label}`}>
                      <p className="text-xl font-semibold tracking-[-0.03em] text-slate-50">{metric.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-2 lg:max-w-xl lg:justify-end">
                {proof.flow.map((stage, index) => (
                  <div key={stage} className="contents">
                    <div className="flex min-w-0 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-[#0b111b]/80 px-2.5 py-2">
                      <CheckCircle2 size={12} className="shrink-0 text-cyan-300" aria-hidden="true" />
                      <span className="truncate font-mono text-[10px] text-slate-400">{stage}</span>
                    </div>
                    {index < proof.flow.length - 1 ? (
                      <ArrowRight size={12} className="hidden shrink-0 text-slate-700 sm:block" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <p className="border-t border-white/[0.06] px-5 py-3 text-xs leading-5 text-slate-500 sm:px-6">{proof.note}</p>
          </div>
        ) : null}

        <div className={`mt-6 grid gap-3 ${featured ? "lg:grid-cols-3" : ""}`}>
          {labels.map(([label, key]) => (
            <div key={key} className="rounded-xl border border-white/5 bg-white/[0.018] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300/70">{label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project[key]}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="tech-pill">
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {caseStudyHref ? (
              <a
                href={caseStudyHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                {copy.caseStudy} <ArrowRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-slate-200"
              >
                {copy.source} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                <LockKeyhole size={13} aria-hidden="true" /> {privateLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
