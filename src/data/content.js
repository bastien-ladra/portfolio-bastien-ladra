export const profile = {
  name: "Bastien Ladra",
  role: "Cybersecurity & DevSecOps Engineer",
  credential: "Epitech PGE graduate",
  tagline:
    "I design and validate secure cloud and software delivery systems, with controls spanning code, dependencies, containers, infrastructure and runtime.",
  location: "France",
  email: "ladra.bastien@gmail.com",
  github: "https://github.com/bastien-ladra",
  linkedin: "https://www.linkedin.com/in/bastienladra",
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Evidence", href: "#evidence" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  "Cloud Security",
  "DevSecOps",
  "Software Supply Chain",
  "Infrastructure as Code",
];

export const engineeringEvidence = [
  {
    value: "7",
    label: "CI/CD workflows",
    detail: "CI, CodeQL, container security, DAST, dependency review, IaC and publishing.",
  },
  {
    value: "SBOM",
    label: "Artifact provenance",
    detail: "Container SBOM generation and build attestations for software supply-chain evidence.",
  },
  {
    value: "ZAP",
    label: "Runtime validation",
    detail: "OWASP ZAP baseline scanning and an explicit baseline policy integrated into CI.",
  },
  {
    value: "GCP",
    label: "Hardened deployment",
    detail: "Terraform-managed Cloud Run deployment with digest-pinned container images.",
  },
];

export const projects = [
  {
    title: "Secure API DevSecOps",
    type: "Flagship public engineering project",
    description:
      "A security-focused FastAPI reference implementation that treats security as a delivery-system property rather than a final scanning step.",
    technologies: [
      "FastAPI",
      "Docker",
      "GitHub Actions",
      "CodeQL",
      "OWASP ZAP",
      "Terraform",
      "GCP",
      "SBOM",
      "Attestations",
    ],
    highlights: [
      "SAST and dependency security gates",
      "Container security, SBOM generation and attestations",
      "DAST with OWASP ZAP and an explicit baseline policy",
      "Terraform checks and hardened Cloud Run deployment",
    ],
    href: "https://github.com/Bastien-Lup/secure-api-devsecops",
  },
  {
    title: "Security Monitoring Platform",
    type: "Professional security engineering",
    description:
      "A vulnerability supervision initiative combining open-source security tooling, centralized findings and automated deployment workflows.",
    technologies: ["AWS", "Python", "Shell", "React", "Docker", "Linux"],
    highlights: [
      "Centralized vulnerability visibility",
      "Integration of open-source security scanners",
      "Agent, API and interface development",
      "Containerized and automated deployment",
    ],
  },
  {
    title: "Cloud Security Automation",
    type: "Professional cloud security",
    description:
      "Security operations and infrastructure automation work around GCP, network controls, PKI and infrastructure-as-code practices.",
    technologies: ["GCP", "Terraform", "Cloud Armor", "Ansible", "PKI", "IAM"],
    highlights: [
      "Cloud security monitoring and hardening",
      "Firewall and edge protection controls",
      "Infrastructure automation with Terraform",
      "PKI and bastion-related security operations",
    ],
  },
];

export const expertise = [
  {
    title: "DevSecOps",
    description:
      "Security controls embedded into delivery pipelines, from source review to runtime validation.",
    items: ["CI/CD security", "SAST", "DAST", "Dependency security", "Supply-chain security"],
  },
  {
    title: "Cloud Security",
    description:
      "Secure infrastructure design and operations with an emphasis on GCP and identity-aware controls.",
    items: ["GCP", "IAM", "Cloud Run", "Cloud Armor", "Security architecture"],
  },
  {
    title: "Infrastructure",
    description:
      "Repeatable, reviewable infrastructure and deployment workflows built around automation.",
    items: ["Terraform", "Docker", "Linux", "Ansible", "Git"],
  },
  {
    title: "Software Engineering",
    description:
      "Pragmatic development for security tooling, APIs, automation and supporting interfaces.",
    items: ["Python", "FastAPI", "JavaScript", "React", "Testing"],
  },
];

export const experiences = [
  {
    role: "DevSecOps",
    company: "NEHS Digital — Projet Drimbox",
    period: "2023 — 2024",
    summary:
      "Worked on repository migration, CI/CD workflows and GitLab reliability in a production engineering context.",
    items: ["GitLab CI/CD", "Bitbucket migration", "Automation", "Docker", "Ansible"],
  },
  {
    role: "Responsable Opérationnel de la Sécurité des SI",
    company: "GSOI",
    period: "2022 — 2023",
    summary:
      "Contributed to cloud security operations, infrastructure automation and protective controls on GCP.",
    items: ["GCP", "Terraform", "Cloud Armor", "PKI", "Security operations"],
  },
  {
    role: "Watcher SecOps",
    company: "ASTEK Digital Cloud Factory",
    period: "2022",
    summary:
      "Built components for a security supervision solution combining vulnerability tooling, APIs and containerized deployment.",
    items: ["AWS", "Python", "React", "Docker", "Linux"],
  },
  {
    role: "Chef de projet / Développeur Web & Mobile",
    company: "EPITECH EIP",
    period: "2019 — 2022",
    summary:
      "Coordinated development work while contributing to web, mobile and DevOps responsibilities.",
    items: ["React", "React Native", "GitLab", "Docker", "Project coordination"],
  },
];

export const researchQuestion =
  "How can software supply-chain guarantees be extended to models, datasets and ML pipelines while remaining practical for engineering teams?";

export const researchTopics = [
  "Secure software supply chains",
  "AI / ML security",
  "Secure MLOps",
  "Software and model provenance",
  "Cloud-native security",
  "Trustworthy deployment pipelines",
];
