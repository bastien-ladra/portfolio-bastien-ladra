import { Link } from "react-router-dom";
import ProfilePhoto from "../assets/profile-photo.jpg";
import {
  Shield,
  Cloud,
  Code,
  Server,
  Lock,
  Terminal,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowLeft,
  Phone,
  MapPin,
} from "lucide-react";

export default function CVCyber() {
  const skills = {
    DevSecOps: ["CI/CD", "Terraform", "Ansible"],
    Sécurité: ["PKI", "IAM", "CNIL", "Pentera", "SIEM", "SOC"],
    Cloud: ["GCP", "AWS", "Cloud Armor", "Google Firewall"],
    Languages: ["Python", "C/C++", "Shell", "JavaScript"],
    Tools: ["Vuls", "Trivy", "Meta", "Git", "VSCode"],
  };

  const experiences = [
    {
      title: "DevSecOps",
      company: "NEHS Digital",
      period: "2023-2024 (1 an)",
      achievements: [
        "Migration complète des repositories Bitbucket vers GitLab",
        "Mise en place des workflows et pipelines CI/CD",
        "Optimisation des performances de GitLab",
      ],
      tech: ["GitLab", "Bitbucket", "Ansible", "CI/CD", "Docker", "Redhat"],
    },
    {
      title: "Responsable Opérationnel Sécurité SI",
      company: "GSOI",
      period: "2022-2023 (1 an)",
      achievements: [
        "Gestion du Security Command Center et surveillance des systèmes",
        "Mise en place de règles de pare-feu et Google Cloud Armor",
        "Automatisation avec Terraform (IaaS) et gestion PKI",
        "Configuration d'un bastion GCP et planification des audits",
        "Mise en place de politiques CNIL",
      ],
      tech: ["GCP", "Terraform", "PKI", "Cloud Armor", "Ansible"],
    },
    {
      title: "Watcher SecOps",
      company: "ASTEK Digital Cloud Factory",
      period: "2022 (6 mois)",
      achievements: [
        "Création d'une solution de supervision et centralisation des failles",
        "Intégration d'outils open-source (Vuls, Trivy, Meta)",
        "Développement de composants (agents, API, UI)",
        "Déploiement automatisé et conteneurisé",
      ],
      tech: ["AWS", "Python", "Shell", "React", "Docker", "Linux"],
    },
    {
      title: "Chef de Projet / Développeur Web & Mobile",
      company: "CELLULAM (Projet Epitech)",
      period: "2019-2022 (3 ans)",
      achievements: [
        "Coordination de l'équipe de développement",
        "Développement du site web et de l'application mobile",
        "Responsable des opérations DevOps et conteneurisation",
      ],
      tech: ["ReactJS", "React Native", "HTML/CSS", "GitLab", "Docker"],
    },
  ];

  const certifications = [
    { name: "CEH", org: "EC-Council", status: "IN PROGRESS", year: "2024" },
    { name: "Security+", org: "CompTIA", status: "IN PROGRESS", year: "2024" },
    {
      name: "Google Cybersecurity",
      org: "Google",
      status: "CERTIFIED",
      year: "2023",
    },
    {
      name: "ANSSI SecNumAcademie",
      org: "ANSSI",
      status: "CERTIFIED",
      year: "2021",
    },
    { name: "Expert IT", org: "Epitech", status: "CERTIFIED", year: "2022" },
  ];

  const projects = [
    {
      name: "CYBER TOOLKIT",
      description:
        "Application Python pour l'initiation à la cybersécurité : sniffer réseau, cryptographie (base64, César, Vigenère), scanner de menaces",
      tech: ["Python", "PyQT", "pytest"],
      status: "OPERATIONAL",
    },
    {
      name: "KEYLOGGER",
      description:
        "Programme de keylogger multi-plateforme enregistrant les frappes clavier avec envoi par e-mail",
      tech: ["Python", "PowerShell", "Bash"],
      status: "OPERATIONAL",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      {/* Action Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Link
          to="/"
          className="bg-[#233554] border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-bold
          hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Retour
        </Link>
        <button
          onClick={() => window.print()}
          className="bg-[#233554] border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-bold
          hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 flex items-center gap-2"
        >
          <Download size={18} />
          Imprimer
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src={ProfilePhoto}
              alt="Bastien Ladra"
              className="w-40 h-40 rounded-full mx-auto border-4 border-[#64ffda] shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-2">Bastien Ladra</h1>
          <h2 className="text-2xl mb-6 text-[#8892b0]">
            Ingénieur Cybersécurité | DevSecOps
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-[#8892b0] max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#64ffda]" />
              <span>ladra.bastien@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#64ffda]" />
              <span>06 77 60 26 07</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#64ffda]" />
              <span>Bordeaux, France</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} className="text-[#64ffda]" />
              <span>github.com/BastienLadra</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Linkedin size={16} className="text-[#64ffda]" />
              <span>linkedin.com/in/bastienladra</span>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Profil</h3>
          <div className="bg-[#112240] p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              Ingénieur Cybersécurité avec 2 ans d'expérience spécialisé en
              DevSecOps, sécurisation d'infrastructures cloud (GCP/AWS) et
              automatisation CI/CD.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Expert en surveillance et analyse des logs de sécurité, mise en
              place d'infrastructures sécurisées, conteneurisation et
              virtualisation. Compétences en gestion PKI, conformité CNIL, et
              planification d'audits de sécurité.
            </p>
            <p className="text-lg leading-relaxed">
              Actuellement en formation CEH et Security+. Recherche alternance
              pour contribuer à des projets de cybersécurité innovants.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Compétences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
              >
                <h4 className="text-xl font-bold mb-4 text-[#64ffda]">
                  {category.toUpperCase()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-[#1a1f3a] border border-[#00d9ff] text-[#00d9ff] px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">
            Expériences Professionnelles
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg border-l-4 border-[#64ffda]"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#64ffda] mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-[#ccd6f6]">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm bg-[#64ffda] text-[#0a192f] px-3 py-1 rounded font-bold mb-2">
                      {exp.period}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-[#64ffda] mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[#1a1f3a] border border-[#00d9ff] text-[#00d9ff] px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Projets Personnels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-[#64ffda]">
                    {project.name}
                  </h4>
                  <span className="text-xs bg-[#64ffda] text-[#0a192f] px-3 py-1 rounded font-bold">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[#1a1f3a] border border-[#00d9ff] text-[#00d9ff] px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#64ffda] mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">{cert.org}</p>
                  </div>
                  <Award className="text-[#64ffda]" size={32} />
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm px-3 py-1 rounded font-bold ${
                      cert.status === "CERTIFIED"
                        ? "bg-[#64ffda] text-[#0a192f]"
                        : "border border-[#00d9ff] text-[#00d9ff]"
                    }`}
                  >
                    {cert.status}
                  </span>
                  <span className="text-sm text-gray-400">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
