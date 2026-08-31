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
  },
};
