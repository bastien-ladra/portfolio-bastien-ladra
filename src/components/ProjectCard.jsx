import { ArrowRight, ArrowUpRight } from "lucide-react";

const labels = [
  ["Challenge", "challenge"],
  ["Approach", "approach"],
  ["Outcome", "outcome"],
];

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "lg:col-span-2" : ""}`}>
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">
              {project.type}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-50">{project.title}</h3>
          </div>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label={`Open ${project.title} source repository`}
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <p className="max-w-3xl text-base leading-7 text-slate-400">{project.summary}</p>

        <div className={`mt-7 grid gap-3 ${featured ? "lg:grid-cols-3" : ""}`}>
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
            {project.caseStudyHref ? (
              <a
                href={project.caseStudyHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Read engineering case study <ArrowRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-slate-200"
              >
                View source <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
