import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "lg:col-span-2" : ""}`}>
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
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
              aria-label={`Open ${project.title} on GitHub`}
            >
              <ArrowUpRight size={20} />
            </a>
          ) : null}
        </div>

        <p className="max-w-3xl text-base leading-7 text-slate-400">{project.description}</p>

        <div className={`mt-7 grid gap-3 ${featured ? "sm:grid-cols-2" : ""}`}>
          {project.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.technologies.map((technology) => (
            <span key={technology} className="tech-pill">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
