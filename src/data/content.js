export const profile = {
  name: "Bastien Ladra",
  role: "DevSecOps Consultant & Cybersecurity Engineer",
  credential: "Epitech — Expert in Information Technologies (2022)",
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
  { label: "Credentials", href: "#credentials" },
  { label: "Research", href: "#research" },
];

export const focusAreas = [
  "Cloud Security",
  "DevSecOps",
  "Software Supply Chain",
  "Infrastructure as Code",
];

export const engineeringEvidence = [
  {
    value: "7.2/10",
    label: "OpenSSF Scorecard",
    detail: "POEI supply-chain lab improved from 3.9/10 to 7.2/10 through repository and pipeline hardening.",
  },
  {
    value: "SBOM",
    label: "Provenance & signing",
    detail: "CycloneDX SBOM, build provenance and Cosign signatures with verification before deployment.",
  },
  {
    value: "ZAP",
    label: "Runtime validation",
    detail: "OWASP ZAP baseline scanning and an explicit DAST policy integrated into the Secure API pipeline.",
  },
  {
    value: "GCP",
    label: "Cloud hardening",
    detail: "Terraform-managed cloud controls and a digest-pinned Cloud Run deployment in the public reference project.",
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
    title: "Secure Software Supply Chain Lab",
    type: "POEI DevSecOps · 2026",
    description:
      "An end-to-end DevSecOps lab built around a deliberately simple Flask application so the engineering focus stays on pipeline security, provenance, signing and deployment trust.",
    technologies: [
      "GitHub Actions",
      "GHCR",
      "Docker",
      "Gitleaks",
      "CodeQL",
      "CycloneDX",
      "Cosign",
      "OpenSSF",
      "Ortelius",
    ],
    highlights: [
      "Blocking quality gate before container build",
      "CycloneDX SBOM, provenance and Cosign OCI signatures",
      "Verification before deployment plus health check and Ortelius synchronization",
      "OpenSSF Scorecard improved from 3.9/10 to 7.2/10",
    ],
  },
  {
    title: "Cloud Security Automation",
    type: "Professional cloud security",
    description:
      "Security operations and infrastructure automation work around GCP, network controls, PKI and infrastructure-as-code practices.",
    technologies: ["GCP", "Terraform", "Cloud Armor", "Ansible", "PKI", "IAM"],
    highlights: [
      "Security Command Center operations and mitigation workflows",
      "Firewall, Cloud Armor and bastion security controls",
      "Infrastructure automation with Terraform and Ansible",
      "PKI, certificates, keys and audit remediation",
    ],
  },
  {
    title: "Security Monitoring Platform",
    type: "Professional security engineering",
    description:
      "A vulnerability supervision initiative combining open-source security tooling, centralized findings and automated deployment workflows.",
    technologies: ["AWS", "Python", "Shell", "React", "Docker", "Linux"],
    highlights: [
      "Centralized vulnerability visibility",
      "Integration of Vuls, Trivy and other open-source security tooling",
      "Agent, API and interface development",
      "Containerized deployment with performance and security testing",
    ],
  },
];

export const expertise = [
  {
    title: "DevSecOps",
    description:
      "Security controls embedded into delivery pipelines, from source review to runtime validation.",
    items: ["GitHub Actions", "GitLab CI/CD", "SAST", "SCA", "DAST", "Quality gates"],
  },
  {
    title: "Software Supply Chain",
    description:
      "Traceable and verifiable artifacts with explicit controls around dependencies, provenance and release integrity.",
    items: ["CycloneDX SBOM", "Cosign", "GHCR", "OpenSSF Scorecard", "Dependency locking"],
  },
  {
    title: "Cloud Security",
    description:
      "Secure infrastructure design and operations with an emphasis on GCP, identity and protective controls.",
    items: ["GCP", "AWS", "IAM", "Cloud Run", "Cloud Armor", "PKI/TLS"],
  },
  {
    title: "Infrastructure & Software",
    description:
      "Repeatable infrastructure, containers and pragmatic software engineering for security tooling and automation.",
    items: ["Terraform", "Ansible", "Docker", "Linux", "Python", "FastAPI"],
  },
];

export const experiences = [
  {
    role: "DevSecOps",
    company: "NEHS Digital — Projet DRIM-M",
    period: "2023 — 2024 · 8 months",
    summary:
      "Defined and executed repository migration work while improving CI/CD workflows and GitLab reliability in a production engineering context.",
    items: ["GitLab CI/CD", "Bitbucket migration", "Incident resolution", "Docker", "Ansible", "Red Hat"],
  },
  {
    role: "Responsable Opérationnel de la Sécurité des SI",
    company: "GSOI",
    period: "2022 — 2023 · 1 year",
    summary:
      "Operated cloud security controls, infrastructure automation and mitigation workflows on GCP.",
    items: ["Security Command Center", "GCP", "Terraform", "Cloud Armor", "PKI", "Pentera"],
  },
  {
    role: "Watcher SecOps",
    company: "ASTEK Digital Cloud Factory",
    period: "2022 · 6 months",
    summary:
      "Built components for a security supervision solution combining vulnerability tooling, APIs and containerized deployment.",
    items: ["AWS", "Python", "Vuls", "Trivy", "React", "Docker"],
  },
  {
    role: "Project Lead / Web & Mobile Developer",
    company: "EPITECH EIP",
    period: "2019 — 2022 · 3 years",
    summary:
      "Coordinated an eight-person project team while contributing to web, mobile and DevOps responsibilities.",
    items: ["React", "React Native", "GitLab", "Docker", "Project coordination"],
  },
];

export const currentProgram = {
  title: "POEI DevSecOps Consultant",
  organization: "LUPISE · France Travail",
  period: "17 Aug — 16 Oct 2026",
  duration: "300 hours",
  description:
    "Current intensive program focused on secure CI/CD, GitHub Actions, container security, software supply-chain integrity and technical delivery evidence.",
};

export const credentials = [
  {
    year: "2025",
    title: "Introduction to EBIOS Risk Manager",
    issuer: "Club EBIOS",
  },
  {
    year: "2023",
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
  },
  {
    year: "2021",
    title: "SecNumacademie — 4 modules completed",
    issuer: "ANSSI",
  },
  {
    year: "2022",
    title: "Expert in Information Technologies",
    issuer: "Epitech",
  },
];

export const languages = ["French · C2", "English · C1"];

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
