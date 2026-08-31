export const profile = {
  name: "Bastien Ladra",
  role: "DevSecOps & Cybersecurity Engineer",
  credential: "Epitech — Expert in Information Technologies (2022)",
  tagline:
    "Epitech graduate with hands-on experience at NEHS Digital, GSOI and ASTEK. I secure CI/CD pipelines, cloud infrastructure and software supply chains with controls teams can inspect and trust.",
  location: "France",
  email: "ladra.bastien@gmail.com",
  github: "https://github.com/bastien-ladra",
  linkedin: "https://www.linkedin.com/in/bastienladra",
};

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const recruiterSignals = [
  { label: "Experience", value: "NEHS Digital · GSOI · ASTEK" },
  { label: "Focus", value: "DevSecOps · Cloud Security" },
  { label: "Current", value: "POEI DevSecOps · 300h · 2026" },
  { label: "Education", value: "Epitech · Expert IT" },
];

export const engineeringEvidence = [
  {
    value: "7.2/10",
    label: "OpenSSF Scorecard",
    detail: "POEI supply-chain lab improved from 3.9/10 to 7.2/10 through repository and pipeline hardening.",
  },
  {
    value: "7",
    label: "Security workflows",
    detail: "Dedicated CI, CodeQL, dependency review, container security, DAST, IaC and publication workflows in the public Secure API project.",
  },
  {
    value: "SBOM",
    label: "Provenance & signing",
    detail: "CycloneDX SBOMs, signed provenance and release attestations tied to immutable container digests.",
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
    type: "Flagship public project",
    summary:
      "A public reference implementation showing how security controls can follow an application from source code to cloud deployment.",
    challenge:
      "Security checks are often disconnected scanners with weak guarantees between source, build, infrastructure and runtime.",
    approach:
      "Built a FastAPI delivery path with blocking controls for code, dependencies, containers, Terraform, publication and DAST.",
    outcome:
      "Seven specialized workflows, hash-locked dependencies, CycloneDX SBOMs, signed attestations, a distroless non-root image and a hardened GCP Cloud Run target.",
    technologies: ["FastAPI", "GitHub Actions", "Docker", "Terraform", "GCP", "CodeQL", "OWASP ZAP"],
    href: "https://github.com/bastien-ladra/secure-api-devsecops",
    caseStudyHref: `${import.meta.env.BASE_URL}case-study-secure-api.html`,
  },
  {
    title: "Secure Software Supply Chain Lab",
    type: "POEI DevSecOps · 2026",
    summary:
      "A delivery-security lab focused on proving artifact integrity, release traceability and verification before deployment.",
    challenge:
      "Demonstrate an end-to-end software supply chain where release trust can be inspected instead of assumed.",
    approach:
      "Combined GitHub Actions, Gitleaks, CodeQL, CycloneDX, Cosign, GHCR, OpenSSF Scorecard and Ortelius around a simple Flask service.",
    outcome:
      "Improved OpenSSF Scorecard from 3.9/10 to 7.2/10 while adding SBOMs, provenance, signatures and verification before deployment.",
    technologies: ["GitHub Actions", "GHCR", "CycloneDX", "Cosign", "OpenSSF", "Ortelius"],
  },
];

export const expertise = [
  {
    title: "DevSecOps",
    description:
      "Security controls embedded into delivery pipelines without turning CI/CD into an unreadable scanner collection.",
    items: ["GitHub Actions", "GitLab CI/CD", "SAST", "SCA", "DAST", "Quality gates"],
  },
  {
    title: "Cloud Security",
    description:
      "Secure cloud infrastructure and operational controls with practical experience across GCP and AWS environments.",
    items: ["GCP", "AWS", "IAM", "Cloud Run", "Cloud Armor", "PKI/TLS"],
  },
  {
    title: "Software Supply Chain",
    description:
      "Traceable artifacts and explicit controls around dependencies, provenance, signing and release integrity.",
    items: ["CycloneDX SBOM", "Cosign", "GHCR", "OpenSSF Scorecard", "Dependency locking"],
  },
  {
    title: "Infrastructure & Automation",
    description:
      "Repeatable infrastructure, container hardening and pragmatic automation for security and platform engineering.",
    items: ["Terraform", "Ansible", "Docker", "Linux", "Python", "FastAPI"],
  },
];

export const experiences = [
  {
    role: "DevSecOps",
    company: "NEHS Digital — Projet DRIM-M",
    period: "2023 — 2024 · 8 months",
    summary:
      "Worked on repository migration and secure delivery workflows while improving GitLab CI/CD reliability in a production engineering context.",
    items: ["GitLab CI/CD", "Bitbucket migration", "Incident resolution", "Docker", "Ansible", "Red Hat"],
  },
  {
    role: "Responsable Opérationnel de la Sécurité des SI",
    company: "GSOI",
    period: "2022 — 2023 · 1 year",
    summary:
      "Operated cloud security controls and mitigation workflows on GCP, with infrastructure automation, network protection and PKI responsibilities.",
    items: ["Security Command Center", "GCP", "Terraform", "Cloud Armor", "PKI", "Pentera"],
  },
  {
    role: "Watcher SecOps",
    company: "ASTEK Digital Cloud Factory",
    period: "2022 · 6 months",
    summary:
      "Contributed to a security supervision platform combining vulnerability tooling, APIs, automation and containerized deployment.",
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
