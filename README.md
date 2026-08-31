# Bastien Ladra — Engineering Portfolio

Public engineering portfolio focused on DevSecOps, cybersecurity, cloud security, software supply-chain integrity and a research direction toward secure MLOps / AI security.

## Portfolio principles

- **Evidence first** — security claims are paired with implemented controls or measurable outcomes.
- **Current positioning** — DevSecOps Consultant & Cybersecurity Engineer.
- **Privacy aware** — no placeholder or outdated CV is published; public content avoids unnecessary personal data exposure.
- **Research bridge** — the portfolio connects secure software delivery with provenance and trust questions for ML/AI systems.

## Featured engineering work

- Secure API DevSecOps — public reference implementation with SAST, dependency security, container controls, SBOM/attestations, IaC checks, GCP and OWASP ZAP DAST.
- Secure Software Supply Chain Lab — 2026 POEI work covering CI quality gates, CycloneDX SBOM, provenance, Cosign signing, GHCR, OpenSSF Scorecard and Ortelius.
- Professional cloud security automation and vulnerability monitoring experience.

## Stack

- React 18
- Vite 4
- Tailwind CSS 3
- Lucide React
- GitHub Pages

## Structure

- `src/components/` reusable UI
- `src/data/` portfolio content and evidence
- `src/sections/` page sections
- `src/pages/Index.jsx` page composition

## Development

```bash
npm ci
npm run dev
npm run build
```

Pull requests run the production build in GitHub Actions. Pushes to `master` deploy to GitHub Pages.

The deployment workflow follows least-privilege permissions: read-only repository access for the build job, with Pages and OIDC permissions scoped only to the deployment job.
