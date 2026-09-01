import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { cyberSocProject } from "../data/cyberSocProject";

export default function Projects({ projects, language, copy }) {
  const selectedProjects = [...projects, cyberSocProject[language]];
  const title =
    language === "fr"
      ? "Trois projets qui montrent ma manière de concevoir, sécuriser et expérimenter."
      : "Three projects showing how I design, secure and experiment.";
  const description =
    language === "fr"
      ? "Le projet DevSecOps reste la référence principale. Le laboratoire supply-chain montre la vérification d'artefacts, et CyberSOC ajoute une preuve publique bornée à l'intersection IA et cybersécurité."
      : "The DevSecOps project remains the primary reference. The supply-chain lab demonstrates artifact verification, while CyberSOC adds a bounded public proof point at the intersection of AI and cybersecurity.";

  return (
    <section id="projects" className="section-block">
      <div className="site-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={title} description={description} />
        <div className="grid gap-5 lg:grid-cols-2">
          {selectedProjects.map((project, index) => (
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
