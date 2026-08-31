const sharedProfile = {
  name: "Bastien Ladra",
  email: "ladra.bastien@gmail.com",
  github: "https://github.com/bastien-ladra",
  linkedin: "https://www.linkedin.com/in/bastienladra",
};

const projectMeta = [
  {
    title: "Secure API DevSecOps",
    technologies: ["FastAPI", "GitHub Actions", "Docker", "Terraform", "GCP", "CodeQL", "OWASP ZAP"],
    href: "https://github.com/bastien-ladra/secure-api-devsecops",
    caseStudyHref: `${import.meta.env.BASE_URL}case-study-secure-api.html`,
  },
  {
    title: "Secure Software Supply Chain Lab",
    technologies: ["GitHub Actions", "GHCR", "CycloneDX", "Cosign", "OpenSSF", "Ortelius"],
  },
];

export const portfolioContent = {
  fr: {
    profile: {
      ...sharedProfile,
      role: "Ingénieur DevSecOps & Cybersécurité",
      credential: "Epitech — Expert en technologies de l'information (2022)",
      tagline:
        "Diplômé d'Epitech avec des expériences chez NEHS Digital, GSOI et ASTEK. Je sécurise les pipelines CI/CD, les infrastructures cloud et les chaînes d'approvisionnement logicielles avec des contrôles concrets et vérifiables.",
      location: "France",
    },
    navItems: [
      { label: "Projets", href: "#projects" },
      { label: "Expérience", href: "#experience" },
      { label: "Expertise", href: "#expertise" },
      { label: "Formation", href: "#credentials" },
      { label: "Contact", href: "#contact" },
    ],
    recruiterSignals: [
      { label: "Expérience", value: "NEHS Digital · GSOI · ASTEK" },
      { label: "Spécialités", value: "DevSecOps · Cloud Security" },
      { label: "Actuellement", value: "POEI DevSecOps · 300 h · 2026" },
      { label: "Diplôme", value: "Epitech · Expert IT" },
    ],
    projects: [
      {
        ...projectMeta[0],
        type: "Projet public phare",
        summary:
          "Une implémentation de référence publique qui montre comment faire suivre les contrôles de sécurité du code source jusqu'au déploiement cloud.",
        challenge:
          "Les contrôles de sécurité sont souvent des scanners isolés, avec peu de garanties entre le code, le build, l'infrastructure et le runtime.",
        approach:
          "Construction d'une chaîne de livraison FastAPI avec des contrôles bloquants sur le code, les dépendances, les conteneurs, Terraform, la publication et le DAST.",
        outcome:
          "Sept workflows spécialisés, dépendances verrouillées par hash, SBOM CycloneDX, attestations signées, image distroless non-root et cible GCP Cloud Run durcie.",
      },
      {
        ...projectMeta[1],
        type: "POEI DevSecOps · 2026",
        summary:
          "Un laboratoire de sécurité de la chaîne logicielle centré sur l'intégrité des artefacts, la traçabilité des releases et la vérification avant déploiement.",
        challenge:
          "Démontrer une chaîne d'approvisionnement logicielle de bout en bout dans laquelle la confiance d'une release peut être vérifiée plutôt que supposée.",
        approach:
          "Combinaison de GitHub Actions, Gitleaks, CodeQL, CycloneDX, Cosign, GHCR, OpenSSF Scorecard et Ortelius autour d'un service Flask volontairement simple.",
        outcome:
          "OpenSSF Scorecard amélioré de 3.9/10 à 7.2/10, avec SBOM, provenance, signatures et vérification des artefacts avant déploiement.",
      },
    ],
    expertise: [
      {
        title: "DevSecOps",
        description:
          "Intégrer des contrôles de sécurité aux pipelines de livraison sans transformer la CI/CD en accumulation illisible de scanners.",
        items: ["GitHub Actions", "GitLab CI/CD", "SAST", "SCA", "DAST", "Quality gates"],
      },
      {
        title: "Cloud Security",
        description:
          "Sécurisation d'infrastructures cloud et de contrôles opérationnels, avec une expérience pratique sur des environnements GCP et AWS.",
        items: ["GCP", "AWS", "IAM", "Cloud Run", "Cloud Armor", "PKI/TLS"],
      },
      {
        title: "Software Supply Chain",
        description:
          "Artefacts traçables et contrôles explicites sur les dépendances, la provenance, la signature et l'intégrité des releases.",
        items: ["CycloneDX SBOM", "Cosign", "GHCR", "OpenSSF Scorecard", "Dependency locking"],
      },
      {
        title: "Infrastructure & Automatisation",
        description:
          "Infrastructure reproductible, durcissement des conteneurs et automatisation pragmatique pour la sécurité et l'ingénierie plateforme.",
        items: ["Terraform", "Ansible", "Docker", "Linux", "Python", "FastAPI"],
      },
    ],
    experiences: [
      {
        role: "DevSecOps",
        company: "NEHS Digital — Projet DRIM-M",
        period: "2023 — 2024 · 8 mois",
        summary:
          "Travail sur la migration de dépôts et les workflows de livraison sécurisée, avec amélioration de la fiabilité GitLab CI/CD dans un contexte de production.",
        items: ["GitLab CI/CD", "Migration Bitbucket", "Résolution d'incidents", "Docker", "Ansible", "Red Hat"],
      },
      {
        role: "Responsable Opérationnel de la Sécurité des SI",
        company: "GSOI",
        period: "2022 — 2023 · 1 an",
        summary:
          "Exploitation de contrôles de sécurité cloud et de workflows de remédiation sur GCP, avec automatisation d'infrastructure, protection réseau et responsabilités PKI.",
        items: ["Security Command Center", "GCP", "Terraform", "Cloud Armor", "PKI", "Pentera"],
      },
      {
        role: "Watcher SecOps",
        company: "ASTEK Digital Cloud Factory",
        period: "2022 · 6 mois",
        summary:
          "Contribution à une plateforme de supervision sécurité combinant outils de vulnérabilité, APIs, automatisation et déploiement conteneurisé.",
        items: ["AWS", "Python", "Vuls", "Trivy", "React", "Docker"],
      },
      {
        role: "Chef de projet / Développeur Web & Mobile",
        company: "EPITECH EIP",
        period: "2019 — 2022 · 3 ans",
        summary:
          "Coordination d'une équipe projet de huit personnes tout en contribuant au développement web, mobile et aux responsabilités DevOps.",
        items: ["React", "React Native", "GitLab", "Docker", "Coordination projet"],
      },
    ],
    currentProgram: {
      title: "POEI Consultant DevSecOps",
      organization: "LUPISE · France Travail",
      period: "17 août — 16 oct. 2026",
      duration: "300 heures",
      description:
        "Programme intensif en cours centré sur la CI/CD sécurisée, GitHub Actions, la sécurité des conteneurs, l'intégrité de la chaîne logicielle et la production de preuves techniques.",
    },
    credentials: [
      { year: "2025", title: "Introduction à EBIOS Risk Manager", issuer: "Club EBIOS" },
      { year: "2023", title: "Google Cybersecurity Certificate", issuer: "Google / Coursera" },
      { year: "2021", title: "SecNumacademie — 4 modules validés", issuer: "ANSSI" },
      { year: "2022", title: "Expert en technologies de l'information", issuer: "Epitech" },
    ],
    languages: ["Français · C2", "Anglais · C1"],
    research: {
      question:
        "Comment étendre les garanties de la supply chain logicielle aux modèles, datasets et pipelines ML tout en restant praticable pour les équipes d'ingénierie ?",
      topics: ["Supply chain logicielle sécurisée", "Sécurité IA / ML", "Secure MLOps", "Provenance logicielle et modèles"],
    },
    copy: {
      metaTitle: "Bastien Ladra — Ingénieur DevSecOps & Cybersécurité",
      metaDescription:
        "Portfolio de Bastien Ladra, ingénieur DevSecOps et cybersécurité : CI/CD sécurisée, cloud security, software supply chain et automatisation.",
      skipToContent: "Aller au contenu",
      navAria: "Navigation principale",
      homeAria: "Accueil de Bastien Ladra",
      languageSelector: "Choisir la langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      hero: {
        eyebrow: "Ingénieur DevSecOps & Cybersécurité · France",
        headingBefore: "Je sécurise la livraison logicielle et",
        headingAccent: "les infrastructures cloud.",
        selectedWork: "Voir mes projets",
        resume: "CV",
        githubAria: "Ouvrir le profil GitHub",
      },
      projects: {
        eyebrow: "Projets sélectionnés",
        title: "Deux projets qui montrent ma manière de concevoir et sécuriser.",
        description:
          "Plutôt qu'une longue liste d'expérimentations, je mets en avant les travaux les plus pertinents pour le DevSecOps, la sécurité cloud et la livraison logicielle de confiance.",
        challenge: "Enjeu",
        approach: "Approche",
        outcome: "Résultat",
        caseStudy: "Lire l'étude de cas technique",
        source: "Voir le code source",
        sourceAria: "Ouvrir le dépôt source de",
      },
      experience: {
        eyebrow: "Expérience professionnelle",
        title: "Une expérience de production en DevSecOps, cloud security et SecOps.",
        description:
          "Mon parcours couvre la livraison sécurisée, les opérations de sécurité GCP, la supervision des vulnérabilités et l'automatisation — au-delà des projets de laboratoire.",
      },
      expertise: {
        eyebrow: "Expertise",
        title: "Ce que je peux apporter à une équipe d'ingénierie.",
        description:
          "Un mix pragmatique de livraison sécurisée, sécurité cloud, contrôles de software supply chain et automatisation d'infrastructure.",
      },
      credentials: {
        eyebrow: "Formation & certifications",
        title: "Programme actuel et fondations vérifiées.",
        description:
          "Une vue concise des formations, certifications et du diplôme qui soutiennent les réalisations techniques présentées ci-dessus.",
        currentProgram: "Programme en cours",
        education: "Diplôme & certifications",
        languages: "Langues",
      },
      research: {
        eyebrow: "Ce que j'explore ensuite",
        title: "De la livraison logicielle sécurisée aux systèmes IA de confiance.",
        bridge: ["CI/CD sécurisée", "Secure MLOps", "Sécurité IA"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Vous recherchez un ingénieur DevSecOps ou cloud security ?",
        description:
          "Je suis disponible pour échanger sur des opportunités où la livraison sécurisée, les infrastructures cloud et une cybersécurité pragmatique sont au cœur du besoin.",
        cta: "Me contacter",
        builtWith: "Portfolio construit avec React.",
      },
    },
  },
  en: {
    profile: {
      ...sharedProfile,
      role: "DevSecOps & Cybersecurity Engineer",
      credential: "Epitech — Expert in Information Technologies (2022)",
      tagline:
        "Epitech graduate with hands-on experience at NEHS Digital, GSOI and ASTEK. I secure CI/CD pipelines, cloud infrastructure and software supply chains with controls teams can inspect and trust.",
      location: "France",
    },
    navItems: [
      { label: "Work", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Expertise", href: "#expertise" },
      { label: "Credentials", href: "#credentials" },
      { label: "Contact", href: "#contact" },
    ],
    recruiterSignals: [
      { label: "Experience", value: "NEHS Digital · GSOI · ASTEK" },
      { label: "Focus", value: "DevSecOps · Cloud Security" },
      { label: "Current", value: "POEI DevSecOps · 300h · 2026" },
      { label: "Education", value: "Epitech · Expert IT" },
    ],
    projects: [
      {
        ...projectMeta[0],
        type: "Flagship public project",
        summary:
          "A public reference implementation showing how security controls can follow an application from source code to cloud deployment.",
        challenge:
          "Security checks are often disconnected scanners with weak guarantees between source, build, infrastructure and runtime.",
        approach:
          "Built a FastAPI delivery path with blocking controls for code, dependencies, containers, Terraform, publication and DAST.",
        outcome:
          "Seven specialized workflows, hash-locked dependencies, CycloneDX SBOMs, signed attestations, a distroless non-root image and a hardened GCP Cloud Run target.",
      },
      {
        ...projectMeta[1],
        type: "POEI DevSecOps · 2026",
        summary:
          "A delivery-security lab focused on proving artifact integrity, release traceability and verification before deployment.",
        challenge:
          "Demonstrate an end-to-end software supply chain where release trust can be inspected instead of assumed.",
        approach:
          "Combined GitHub Actions, Gitleaks, CodeQL, CycloneDX, Cosign, GHCR, OpenSSF Scorecard and Ortelius around a simple Flask service.",
        outcome:
          "Improved OpenSSF Scorecard from 3.9/10 to 7.2/10 while adding SBOMs, provenance, signatures and verification before deployment.",
      },
    ],
    expertise: [
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
    ],
    experiences: [
      {
        role: "DevSecOps",
        company: "NEHS Digital — Projet DRIM-M",
        period: "2023 — 2024 · 8 months",
        summary:
          "Worked on repository migration and secure delivery workflows while improving GitLab CI/CD reliability in a production engineering context.",
        items: ["GitLab CI/CD", "Bitbucket migration", "Incident resolution", "Docker", "Ansible", "Red Hat"],
      },
      {
        role: "Information Systems Security Operations Manager",
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
    ],
    currentProgram: {
      title: "POEI DevSecOps Consultant",
      organization: "LUPISE · France Travail",
      period: "17 Aug — 16 Oct 2026",
      duration: "300 hours",
      description:
        "Current intensive program focused on secure CI/CD, GitHub Actions, container security, software supply-chain integrity and technical delivery evidence.",
    },
    credentials: [
      { year: "2025", title: "Introduction to EBIOS Risk Manager", issuer: "Club EBIOS" },
      { year: "2023", title: "Google Cybersecurity Certificate", issuer: "Google / Coursera" },
      { year: "2021", title: "SecNumacademie — 4 modules completed", issuer: "ANSSI" },
      { year: "2022", title: "Expert in Information Technologies", issuer: "Epitech" },
    ],
    languages: ["French · C2", "English · C1"],
    research: {
      question:
        "How can software supply-chain guarantees be extended to models, datasets and ML pipelines while remaining practical for engineering teams?",
      topics: ["Secure software supply chains", "AI / ML security", "Secure MLOps", "Software and model provenance"],
    },
    copy: {
      metaTitle: "Bastien Ladra — DevSecOps & Cybersecurity Engineer",
      metaDescription:
        "Bastien Ladra's DevSecOps and cybersecurity portfolio: secure CI/CD, cloud security, software supply chains and infrastructure automation.",
      skipToContent: "Skip to content",
      navAria: "Primary navigation",
      homeAria: "Bastien Ladra home",
      languageSelector: "Choose language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      hero: {
        eyebrow: "DevSecOps & Cybersecurity Engineer · France",
        headingBefore: "I secure software delivery and",
        headingAccent: "cloud infrastructure.",
        selectedWork: "View selected work",
        resume: "Resume",
        githubAria: "Open GitHub profile",
      },
      projects: {
        eyebrow: "Selected work",
        title: "Two projects that show how I think and build.",
        description:
          "Rather than list every experiment, I highlight the work most relevant to DevSecOps, cloud security and trustworthy software delivery.",
        challenge: "Challenge",
        approach: "Approach",
        outcome: "Outcome",
        caseStudy: "Read engineering case study",
        source: "View source",
        sourceAria: "Open source repository for",
      },
      experience: {
        eyebrow: "Professional experience",
        title: "Production experience across DevSecOps, cloud security and SecOps.",
        description:
          "My background spans secure delivery, GCP security operations, vulnerability supervision and engineering automation — not only lab projects.",
      },
      expertise: {
        eyebrow: "Expertise",
        title: "What I can bring to an engineering team.",
        description:
          "A practical mix of secure delivery, cloud security, software supply-chain controls and infrastructure automation.",
      },
      credentials: {
        eyebrow: "Credentials",
        title: "Current training and verified foundations.",
        description:
          "A concise view of the formal training and certifications that support the engineering work shown above.",
        currentProgram: "Current program",
        education: "Education & certifications",
        languages: "Languages",
      },
      research: {
        eyebrow: "What I am exploring next",
        title: "From secure software delivery to trustworthy AI systems.",
        bridge: ["Secure CI/CD", "Secure MLOps", "AI security"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Looking for a DevSecOps or cloud security engineer?",
        description:
          "I am always interested in conversations where secure delivery, cloud infrastructure and pragmatic security engineering matter.",
        cta: "Contact me",
        builtWith: "Portfolio built with React.",
      },
    },
  },
};
