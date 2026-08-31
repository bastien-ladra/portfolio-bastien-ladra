# Bastien Ladra — Engineering Portfolio

Public engineering portfolio focused on DevSecOps, cybersecurity, cloud security, software supply-chain integrity and a research direction toward secure MLOps / AI security.

## Portfolio principles

- **Evidence first** — security claims are paired with implemented controls or measurable outcomes.
- **Current positioning** — DevSecOps Consultant & Cybersecurity Engineer.
- **Privacy aware** — the public resume excludes unnecessary personal data.
- **Research bridge** — the portfolio connects secure software delivery with provenance and trust questions for ML/AI systems.
- **Practice what is presented** — the portfolio CI applies least-privilege permissions, immutable action references and blocking quality checks.

## Featured engineering work

- **Secure API DevSecOps** — public reference implementation with SAST, dependency security, container controls, SBOM/attestations, IaC checks, GCP and OWASP ZAP DAST.
  - Includes a dedicated engineering case study with threat/control mapping, delivery architecture, Cloud Run model, limitations and a Secure MLOps research bridge.
- **Secure Software Supply Chain Lab** — 2026 POEI work covering CI quality gates, CycloneDX SBOM, provenance, Cosign signing, GHCR, OpenSSF Scorecard and Ortelius.
- Professional cloud security automation and vulnerability monitoring experience.

## Public artifacts

- `public/resume.html` — privacy-safe, printable public resume.
- `public/case-study-secure-api.html` — evidence-backed Secure API engineering case study with technical visualizations.

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
- `scripts/` deterministic repository quality checks
- `public/` recruiter-facing static artifacts

## Development

```bash
npm ci
npm run dev
npm run quality
npm run build
npm run check
```

`npm run check` is the local equivalent of the pull-request gate: static portfolio-quality assertions followed by the production Vite build.

## CI/CD controls

Pull requests and pushes to `master` run the quality gate and production build. Only successful pushes deploy to GitHub Pages.

The workflow uses:

- read-only repository permissions for the build job;
- Pages + OIDC permissions scoped only to deployment;
- `persist-credentials: false` during checkout;
- GitHub Actions pinned to immutable commit SHAs;
- Node.js 22 on Ubuntu 24.04;
- blocking checks for required public artifacts, basic accessibility/metadata invariants, internal anchors, privacy-sensitive resume regressions and placeholder content;
- Dependabot for npm and GitHub Actions maintenance.
