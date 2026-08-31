import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Two projects that show how I think and build."
          description="Rather than list every experiment, I highlight the work most relevant to DevSecOps, cloud security and trustworthy software delivery."
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
