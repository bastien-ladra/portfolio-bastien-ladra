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
      role: "Spécialiste DevSecOps & Cybersécurité",
      credential: "Titre RNCP d'Expert en Technologies de l'Information · niveau bac+5 (Epitech, 2022)",
      tagline:
        "Titulaire du titre RNCP d'Expert en Technologies de l'Information, avec des expériences chez NEHS Digital, GSOI et ASTEK. Je sécurise les pipelines CI/CD, les infrastructures cloud et les chaînes d'approvisionnement logicielles avec des contrôles vérifiables — puis j'explore leur extension aux modèles, datasets et pipelines ML.",
      location: "France",
    },
    navItems: [
      { label: "Projets", href: "#projects" },
      { label: "Expérience", href: "#experience" },
      { label: "Expertise", href: "#expertise" },
      { label: "Formation", href: "#credentials" },
      { label: "Recherche", href: "#research" },
      { label: "Contact", href: "#contact" },
    ],
    recruiterSignals: [
      { label: "Expérience", value: "NEHS Digital · GSOI · ASTEK" },
      { label: "Spécialités", value: "DevSecOps · Cloud Security" },
      { label: "Actuellement", value: "POEI DevSecOps · 300 h · 2026" },
      { label: "Qualification", value: "Titre RNCP · niveau bac+5" },
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
      { year: "2022", title: "Titre RNCP d'Expert en Technologies de l'Information", issuer: "Epitech · niveau bac+5" },
    ],
    languages: ["Français · C2", "Anglais · C1"],
    research: {
      status: "Axe exploratoire · objectif doctoral",
      question:
        "Comment étendre les garanties de la supply chain logicielle aux modèles, datasets et pipelines ML tout en restant praticable pour les équipes d'ingénierie ?",
      hypothesis:
        "Des garanties utiles pour l'IA nécessitent une chaîne de preuves continue : provenance des données et modèles, attestations vérifiables, politiques explicites et validation humaine aux points de décision.",
      workstreams: [
        {
          label: "01",
          title: "Modéliser les menaces",
          description:
            "Cartographier les surfaces d'attaque du code aux datasets, registres de modèles, artefacts et environnements d'exécution.",
        },
        {
          label: "02",
          title: "Construire la provenance",
          description:
            "Relier SBOM, signatures et attestations aux versions de données, de modèles et de pipelines plutôt qu'au seul conteneur final.",
        },
        {
          label: "03",
          title: "Évaluer l'adoption",
          description:
            "Mesurer couverture, faux positifs, coût d'intégration et friction opérationnelle pour éviter des contrôles corrects mais inutilisables.",
        },
      ],
      topics: ["Supply chain logicielle sécurisée", "Sécurité IA / ML", "Secure MLOps", "Provenance logicielle et modèles"],
    },
    copy: {
      metaTitle: "Bastien Ladra — Spécialiste DevSecOps & Cybersécurité",
      metaDescription:
        "Portfolio de Bastien Ladra, spécialiste DevSecOps et cybersécurité, titulaire d'un titre RNCP de niveau bac+5 : CI/CD sécurisée, cloud security, software supply chain et sécurité IA.",
      skipToContent: "Aller au contenu",
      navAria: "Navigation principale",
      homeAria: "Accueil de Bastien Ladra",
      languageSelector: "Choisir la langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      hero: {
        eyebrow: "Spécialiste DevSecOps & Cybersécurité · France",
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
          "Une vue concise du titre RNCP, des formations et des certifications qui soutiennent les réalisations techniques présentées ci-dessus.",
        currentProgram: "Programme en cours",
        education: "Titre RNCP & certifications",
        languages: "Langues",
      },
      research: {
        eyebrow: "Axe de recherche",
        title: "Étendre la chaîne de confiance aux systèmes IA.",
        description:
          "Un programme de travail transparent, à l'intersection du DevSecOps, de la sécurité IA et de l'ingénierie des preuves.",
        questionLabel: "Question de recherche",
        hypothesisLabel: "Hypothèse de travail",
        workstreamsLabel: "Trois chantiers à investiguer",
        evidenceLabel: "Première preuve publique",
        evidenceTitle: "CyberSOC-AI-Lab : une IA assistive, bornée et auditable",
        evidenceDescription:
          "Le laboratoire teste déjà la séparation preuves/instructions, l'évaluation des réponses et la validation humaine sur des données synthétiques.",
        evidenceCta: "Lire l'étude de cas",
        bridge: ["CI/CD sécurisée", "Secure MLOps", "Sécurité IA"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Vous recrutez en DevSecOps ou travaillez sur la sécurité des systèmes IA ?",
        description:
          "Je suis disponible pour échanger sur des opportunités d'ingénierie, des sujets de recherche ou des collaborations où la livraison sécurisée et les systèmes IA de confiance sont au cœur du besoin.",
        cta: "Me contacter",
        builtWith: "Portfolio construit avec React.",
      },
    },
  },
  en: {
    profile: {
      ...sharedProfile,
      role: "DevSecOps & Cybersecurity Specialist",
      credential: "French RNCP title: Expert in Information Technologies · bac+5 level (Epitech, 2022)",
      tagline:
        "Holder of the French RNCP title Expert in Information Technologies, with hands-on experience at NEHS Digital, GSOI and ASTEK. I secure CI/CD pipelines, cloud infrastructure and software supply chains with inspectable controls — then explore how those guarantees extend to models, datasets and ML pipelines.",
      location: "France",
    },
    navItems: [
      { label: "Work", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Expertise", href: "#expertise" },
      { label: "Credentials", href: "#credentials" },
      { label: "Research", href: "#research" },
      { label: "Contact", href: "#contact" },
    ],
    recruiterSignals: [
      { label: "Experience", value: "NEHS Digital · GSOI · ASTEK" },
      { label: "Focus", value: "DevSecOps · Cloud Security" },
      { label: "Current", value: "POEI DevSecOps · 300h · 2026" },
      { label: "Qualification", value: "French RNCP title · bac+5 level" },
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
      { year: "2022", title: "French RNCP title: Expert in Information Technologies", issuer: "Epitech · bac+5 level" },
    ],
    languages: ["French · C2", "English · C1"],
    research: {
      status: "Exploratory track · doctoral objective",
      question:
        "How can software supply-chain guarantees be extended to models, datasets and ML pipelines while remaining practical for engineering teams?",
      hypothesis:
        "Useful AI assurance requires a continuous evidence chain: data and model provenance, verifiable attestations, explicit policies and human validation at decision points.",
      workstreams: [
        {
          label: "01",
          title: "Model the threats",
          description:
            "Map attack surfaces from source code to datasets, model registries, artifacts and runtime environments.",
        },
        {
          label: "02",
          title: "Build provenance",
          description:
            "Connect SBOMs, signatures and attestations to data, model and pipeline versions—not only to the final container.",
        },
        {
          label: "03",
          title: "Evaluate adoption",
          description:
            "Measure coverage, false positives, integration cost and operational friction so controls remain usable in practice.",
        },
      ],
      topics: ["Secure software supply chains", "AI / ML security", "Secure MLOps", "Software and model provenance"],
    },
    copy: {
      metaTitle: "Bastien Ladra — DevSecOps & Cybersecurity Specialist",
      metaDescription:
        "Bastien Ladra's DevSecOps and cybersecurity portfolio. Holder of a French RNCP professional title at bac+5 level, focused on secure CI/CD, cloud, software supply chains and AI security.",
      skipToContent: "Skip to content",
      navAria: "Primary navigation",
      homeAria: "Bastien Ladra home",
      languageSelector: "Choose language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      hero: {
        eyebrow: "DevSecOps & Cybersecurity Specialist · France",
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
          "A concise view of the French RNCP professional title, training and certifications that support the work shown above.",
        currentProgram: "Current program",
        education: "RNCP title & certifications",
        languages: "Languages",
      },
      research: {
        eyebrow: "Research direction",
        title: "Extending the chain of trust to AI systems.",
        description:
          "A transparent work programme at the intersection of DevSecOps, AI security and evidence engineering.",
        questionLabel: "Research question",
        hypothesisLabel: "Working hypothesis",
        workstreamsLabel: "Three investigation tracks",
        evidenceLabel: "First public proof point",
        evidenceTitle: "CyberSOC-AI-Lab: bounded, assistive and auditable AI",
        evidenceDescription:
          "The lab already tests evidence/instruction separation, response evaluation and human validation on synthetic data.",
        evidenceCta: "Read the case study",
        bridge: ["Secure CI/CD", "Secure MLOps", "AI security"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Hiring in DevSecOps or researching secure AI systems?",
        description:
          "I am open to engineering opportunities, research discussions and collaborations where secure delivery and trustworthy AI systems matter.",
        cta: "Contact me",
        builtWith: "Portfolio built with React.",
      },
    },
  },
};
