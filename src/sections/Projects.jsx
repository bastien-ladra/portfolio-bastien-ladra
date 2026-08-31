import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Engineering evidence, not a logo wall."
          description="A selection of work that demonstrates security engineering across delivery pipelines, cloud infrastructure and vulnerability operations."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
