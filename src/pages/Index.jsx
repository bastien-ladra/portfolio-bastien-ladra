import { useEffect, useState } from "react";
import ProfilePhoto from "../assets/profile-photo.jpg";
import HeroBackground from "../assets/hero-background-cybersecurity.jpg";
import { Link } from "react-router-dom";
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
  ExternalLink,
  FileText,
  Zap,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    DevSecOps: ["CI/CD", "Terraform", "Ansible", "Docker", "GitLab"],
    Sécurité: ["Security Command Center", "PKI", "Bastion", "Pentera", "CNIL"],
    Cloud: ["GCP", "AWS", "IAM", "Google Armor"],
    Langages: ["Python", "C/C++", "Shell", "JavaScript"],
    Outils: ["Git", "GitLab", "Docker", "VSCode"],
  };

  const experiences = [
    {
      title: "DevSecOps",
      company: "NEHS Digital (Projet Drimbox)",
      period: "2023 - 2024 (1 an)",
      description: [
        "Migration des repositories Bitbucket vers GitLab avec gestion des incidents",
        "Mise en place des workflows et pipelines CI/CD",
        "Optimisation des performances de GitLab",
      ],
      technologies: [
        "GitLab",
        "Bitbucket",
        "Ansible",
        "CI/CD",
        "Docker",
        "Redhat",
      ],
    },
    {
      title: "Responsable Opérationnel de la Sécurité des SI",
      company: "GSOI",
      period: "2022 - 2023 (1 an)",
      description: [
        "Gestion du Security Command Center et surveillance des systèmes",
        "Mise en place de règles de pare-feu et Google Cloud Armor",
        "Automatisation avec Terraform (IaaS) et gestion PKI",
        "Configuration d'un bastion GCP et planification des audits",
        "Mise en place de politiques CNIL",
      ],
      technologies: ["Terraform", "Google Armor", "GCP", "Ansible", "PKI"],
    },
    {
      title: "Watcher SecOps",
      company: "ASTEK Digital Cloud Factory",
      period: "2022 (6 mois)",
      description: [
        "Création d'une solution de supervision et centralisation des failles",
        "Intégration d'outils open-source (Vuls, Trivy, Meta)",
        "Développement de composants (agents, API, UI)",
        "Déploiement automatisé et conteneurisé",
      ],
      technologies: ["AWS", "Python", "Shell", "React", "Docker", "Linux"],
    },
    {
      title: "Chef de Projet / Développeur Web & Mobile",
      company: "EPITECH EIP",
      period: "2019 - 2022 (3 ans)",
      description: [
        "Coordination de l'équipe de développement",
        "Développement du site web et de l'application mobile",
        "Responsable des opérations DevOps et conteneurisation",
      ],
      technologies: ["ReactJS", "React Native", "HTML/CSS", "GitLab", "Docker"],
    },
  ];

  const projects = [
    {
      title: "Keylogger",
      period: "2022 (6 mois)",
      description:
        "Programme de keylogger multi-plateforme enregistrant les frappes clavier avec envoi par e-mail à intervalles réguliers.",
      technologies: ["Python", "PowerShell", "Bash"],
    },
    {
      title: "Cyber Toolkit",
      period: "2022 (6 mois)",
      description:
        "Application Python pour l'initiation à la cybersécurité : sniffer réseau, cryptographie (base64, César, Vigenère), scanner de menaces.",
      technologies: ["Python", "PyQT", "pytest", "Cryptographie"],
    },
  ];

  const certifications = [
    {
      title: "CEH (Certified Ethical Hacker)",
      organization: "EC-Council",
      status: "En cours",
      year: "2024",
      icon: Shield,
    },
    {
      title: "Security+ Certification (SY0-601)",
      organization: "CompTIA",
      status: "En cours",
      year: "2024",
      icon: Lock,
    },
    {
      title: "Certificat Google Cybersécurité",
      organization: "Google Coursera",
      status: "Obtenu",
      year: "2023",
      icon: Award,
    },
    {
      title: "ANSSI - SecNumAcademie",
      organization: "ANSSI",
      status: "Obtenu",
      year: "2021",
      icon: Shield,
    },
    {
      title: "Expert en Technologies de l'Information",
      organization: "Epitech (Programme PGE)",
      status: "Obtenu",
      year: "2017-2022",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f]">
      {/* Hero Section */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/90"></div>
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
         <div className="mb-8">
          <img
            src={ProfilePhoto}
            alt="Bastien Ladra"
            className="w-40 h-40 rounded-full mx-auto border-4 border-[#64ffda] shadow-2xl object-cover"
            />
          </div>
          <p className="text-[#64ffda] font-mono text-lg mb-4">
            Bonjour, je suis
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Bastien Ladra
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] mb-6">
            Ingénieur Cybersécurité DevSecOps
          </h2>
          <p className="text-xl text-[#8892b0] max-w-2xl mx-auto mb-8">
            Spécialisé en sécurité cloud, infrastructure sécurisée et
            automatisation DevSecOps. 2 ans d'expérience en surveillance et
            analyse des logs de sécurité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="cyber-button">
              Me contacter
            </a>
            <a
              href="/CV_Bastien_Ladra.pdf"
              download
              className="cyber-button flex items-center gap-2"
            >
              <Download size={16} />
              Télécharger CV
            </a>
            <Link
              to="/cv-cyber"
              className="cyber-button flex items-center gap-2 bg-gradient-to-r from-[#00ff41] to-[#00d9ff] text-[#0a0e27] hover:from-[#00d9ff] hover:to-[#00ff41] font-bold shadow-[0_0_20px_rgba(0,255,65,0.5)]"
            >
              <Zap size={16} />
              CV CYBER MODE
            </Link>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/BastienLadra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bastienladra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ladra.bastien@gmail.com"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">À propos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-[#8892b0]">
              <p className="text-lg leading-relaxed">
                Ingénieur en cybersécurité diplômé d'
                <span className="text-[#64ffda] font-semibold">Epitech</span>,
                je suis spécialisé dans le{" "}
                <span className="text-[#64ffda] font-semibold">DevSecOps</span>{" "}
                et la sécurisation des infrastructures cloud. Avec{" "}
                <span className="text-[#64ffda] font-semibold">
                  2 ans d'expérience
                </span>{" "}
                en cybersécurité, j'ai développé une expertise en surveillance
                et analyse des logs de sécurité.
              </p>
              <p className="text-lg leading-relaxed">
                Mon parcours m'a permis de travailler sur des projets variés
                allant de la migration de repositories à la mise en place de
                solutions de supervision de sécurité, en passant par
                l'automatisation d'infrastructures avec{" "}
                <span className="text-[#64ffda] font-semibold">Terraform</span>{" "}
                et
                <span className="text-[#64ffda] font-semibold"> Ansible</span>.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded">
                  <Shield className="inline mr-2" size={16} />
                  Cybersécurité
                </span>
                <span className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded">
                  <Cloud className="inline mr-2" size={16} />
                  Cloud Security
                </span>
                <span className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded">
                  <Terminal className="inline mr-2" size={16} />
                  DevSecOps
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-card p-6 text-center">
                <Briefcase className="text-[#64ffda] mb-2 mx-auto" size={32} />
                <div className="text-2xl font-bold text-[#ccd6f6]">2 ans</div>
                <div className="text-[#8892b0]">d'expérience</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="text-[#64ffda] mb-2 mx-auto" size={32} />
                <div className="text-2xl font-bold text-[#ccd6f6]">5</div>
                <div className="text-[#8892b0]">certifications</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Server className="text-[#64ffda] mb-2 mx-auto" size={32} />
                <div className="text-2xl font-bold text-[#ccd6f6]">20+</div>
                <div className="text-[#8892b0]">technologies</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Code className="text-[#64ffda] mb-2 mx-auto" size={32} />
                <div className="text-2xl font-bold text-[#ccd6f6]">4</div>
                <div className="text-[#8892b0]">projets majeurs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Compétences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="cyber-card p-6">
                <h3 className="text-[#ccd6f6] flex items-center gap-2 text-xl font-bold mb-4">
                  <ChevronRight className="text-[#64ffda]" size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Expériences professionnelles</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[#ccd6f6] text-xl mb-1">{exp.title}</h3>
                    <p className="text-[#64ffda] font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="border border-[#64ffda] text-[#64ffda] px-3 py-1 rounded w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#8892b0] flex items-start gap-2"
                    >
                      <ChevronRight
                        className="text-[#64ffda] mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#233554] text-[#8892b0] px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Projets personnels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#ccd6f6] text-xl font-bold">
                    {project.title}
                  </h3>
                  <span className="border border-[#64ffda] text-[#64ffda] px-3 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="formations" className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Formations & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#64ffda]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#ccd6f6] text-lg mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-[#8892b0]">{cert.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span
                      className={`text-sm px-3 py-1 rounded ${
                        cert.status === "Obtenu"
                          ? "bg-[#64ffda]/20 text-[#64ffda]"
                          : "border border-[#8892b0] text-[#8892b0]"
                      }`}
                    >
                      {cert.status}
                    </span>
                    <span className="text-[#8892b0] text-sm">{cert.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Contact</h2>
          <div className="max-w-md mx-auto">
            <p className="text-[#8892b0] mb-6">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            <a
              href="mailto:ladra.bastien@gmail.com"
              className="cyber-button inline-flex items-center gap-2"
            >
              <Mail size={16} />
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] border-t border-[#233554] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8892b0] text-sm">
              © 2024 Bastien Ladra. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/BastienLadra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bastienladra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ladra.bastien@gmail.com"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
