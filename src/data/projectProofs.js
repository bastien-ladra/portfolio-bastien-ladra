export const projectProofs = {
  fr: {
    "Secure API DevSecOps": {
      label: "Preuves vérifiables",
      metrics: [
        { value: "7", label: "workflows de sécurité" },
        { value: "SBOM", label: "CycloneDX + attestations" },
        { value: "GCP", label: "Cloud Run via Terraform" },
      ],
      flow: ["Code", "CI", "Artefact", "Cloud"],
      note: "Le dépôt public permet de relier chaque affirmation au workflow, au Dockerfile ou au code Terraform correspondant.",
    },
    "Secure Software Supply Chain Lab": {
      label: "Résultats observés",
      metrics: [
        { value: "3,9 → 7,2", label: "OpenSSF Scorecard" },
        { value: "SBOM", label: "CycloneDX" },
        { value: "Signé", label: "Cosign + provenance" },
      ],
      flow: ["Source", "Contrôles", "Signature", "Vérification"],
      note: "Projet de formation privé : les résultats publiés ici restent limités aux éléments déjà vérifiés et présentés dans le CV public.",
    },
    "CyberSOC-AI-Lab": {
      label: "Preuves publiques",
      metrics: [
        { value: "3", label: "scénarios contrôlés" },
        { value: "≥ 90 %", label: "seuil couverture CI" },
        { value: "SBOM", label: "CycloneDX + Trivy" },
      ],
      flow: ["Logs", "Règles", "IA assistive", "Humain"],
      note: "Le dépôt public expose le modèle de sécurité, le threat model, les tests, les quality gates et les limites du laboratoire. Les données de démonstration sont synthétiques.",
    },
  },
  en: {
    "Secure API DevSecOps": {
      label: "Verifiable evidence",
      metrics: [
        { value: "7", label: "security workflows" },
        { value: "SBOM", label: "CycloneDX + attestations" },
        { value: "GCP", label: "Cloud Run via Terraform" },
      ],
      flow: ["Code", "CI", "Artifact", "Cloud"],
      note: "The public repository lets reviewers trace each claim back to the corresponding workflow, Dockerfile or Terraform source.",
    },
    "Secure Software Supply Chain Lab": {
      label: "Observed outcomes",
      metrics: [
        { value: "3.9 → 7.2", label: "OpenSSF Scorecard" },
        { value: "SBOM", label: "CycloneDX" },
        { value: "Signed", label: "Cosign + provenance" },
      ],
      flow: ["Source", "Gates", "Signing", "Verification"],
      note: "Private training repository: published outcomes stay limited to evidence already verified and surfaced in the public resume.",
    },
    "CyberSOC-AI-Lab": {
      label: "Public evidence",
      metrics: [
        { value: "3", label: "controlled scenarios" },
        { value: "≥ 90%", label: "CI coverage gate" },
        { value: "SBOM", label: "CycloneDX + Trivy" },
      ],
      flow: ["Logs", "Rules", "AI assist", "Human"],
      note: "The public repository exposes its security model, threat model, tests, quality gates and lab limitations. Demonstration data is synthetic.",
    },
  },
};
