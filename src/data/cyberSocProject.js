const shared = {
  title: "CyberSOC-AI-Lab",
  technologies: ["Python", "Streamlit", "Ollama", "Docker", "Trivy", "CycloneDX", "GitHub Actions"],
  href: "https://github.com/bastien-ladra/CyberSOC-AI-Lab",
  caseStudyHref: `${import.meta.env.BASE_URL}case-study-cybersoc.html`,
};

export const cyberSocProject = {
  fr: {
    ...shared,
    type: "Projet public · IA & Cybersécurité",
    summary:
      "Un laboratoire SOC assisté par IA qui explore comment aider un analyste sans déléguer la décision finale au modèle.",
    challenge:
      "Les systèmes IA appliqués à la sécurité peuvent halluciner, surinterpréter les preuves ou être manipulés par des contenus hostiles présents dans les logs.",
    approach:
      "Détection déterministe avant l'IA, séparation explicite preuves/instructions, assistance Ollama locale optionnelle, évaluation des réponses, validation humaine et audit des décisions.",
    outcome:
      "Trois scénarios contrôlés, un workflow human-in-the-loop inspectable, un seuil CI de couverture ≥ 90 %, dépendances hash-lockées, conteneur non-root, scan Trivy et SBOM CycloneDX.",
  },
  en: {
    ...shared,
    type: "Public project · AI & Cybersecurity",
    summary:
      "An AI-assisted SOC lab exploring how a model can help an analyst without taking over the final security decision.",
    challenge:
      "AI systems used for security can hallucinate, over-interpret evidence or be manipulated by hostile content embedded in logs.",
    approach:
      "Deterministic detection before AI, explicit evidence/instruction separation, optional local Ollama assistance, response evaluation, human validation and decision auditability.",
    outcome:
      "Three controlled scenarios, an inspectable human-in-the-loop workflow, a ≥90% CI coverage gate, hash-locked dependencies, non-root container runtime, Trivy scanning and a CycloneDX SBOM.",
  },
};
