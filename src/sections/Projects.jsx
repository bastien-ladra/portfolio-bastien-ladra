import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

export default function Projects({ projects, language, copy }) {
  return (
    <section id="projects" className="section-block">
      <div className="site-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={index === 0}
              language={language}
              copy={copy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
