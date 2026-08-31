# Bastien Ladra — Portfolio DevSecOps & Cybersécurité

**Ingénieur DevSecOps & Cybersécurité · France**  
Expérience chez **NEHS Digital, GSOI et ASTEK**, diplômé Epitech, avec un focus sur la CI/CD sécurisée, la sécurité cloud et la software supply chain.

[**Voir le portfolio →**](https://bastien-ladra.github.io/portfolio-bastien-ladra/) · [CV public](https://bastien-ladra.github.io/portfolio-bastien-ladra/resume.html) · [LinkedIn](https://www.linkedin.com/in/bastienladra)

## Ce que le portfolio démontre

- **Expérience de production** en DevSecOps, SecOps et sécurité cloud.
- **Secure API DevSecOps** — projet public avec 7 workflows de sécurité, dépendances verrouillées par hash, CodeQL, Trivy, OWASP ZAP, Terraform, SBOM CycloneDX et attestations.
- **Secure Software Supply Chain Lab** — travail POEI 2026 avec SBOM, provenance, Cosign, GHCR et OpenSSF Scorecard amélioré de **3,9/10 à 7,2/10**.
- **FR / EN** — le portfolio, le CV public et l'étude de cas principale sont disponibles dans les deux langues.
- **Preuves avant les claims** — les éléments publics sont reliés au code ou à des résultats vérifiés, et les limites sont indiquées explicitement.

## À inspecter

### Secure API DevSecOps

Projet public de référence : [github.com/bastien-ladra/secure-api-devsecops](https://github.com/bastien-ladra/secure-api-devsecops)

- [Étude de cas — FR](https://bastien-ladra.github.io/portfolio-bastien-ladra/case-study-secure-api-fr.html)
- [Engineering case study — EN](https://bastien-ladra.github.io/portfolio-bastien-ladra/case-study-secure-api.html)
- Chaîne de contrôle : code → dépendances → conteneur → publication → infrastructure → runtime.
- Limites et compromis documentés plutôt que masqués.

### Secure Software Supply Chain Lab

Projet de formation POEI privé. Les résultats affichés publiquement restent limités aux preuves déjà vérifiées : OpenSSF Scorecard, SBOM, provenance, signature et vérification avant déploiement.

## Pour les recruteurs

La page d'accueil est volontairement courte et orientée lecture rapide : **profil → projets sélectionnés → expérience → expertise → formation → contact**. Les détails techniques restent derrière les études de cas et les dépôts publics afin de ne pas transformer la homepage en documentation technique.

## Engineering notes

Le portfolio est lui-même traité comme un petit produit logiciel :

- React 18 + Vite 4 + Tailwind CSS 3 ;
- GitHub Pages ;
- qualité, SEO et build vérifiés par CI ;
- vérification post-build du CSS Tailwind généré ;
- permissions GitHub Actions limitées et actions épinglées par SHA ;
- contrôle des régressions de confidentialité du CV public ;
- sitemap, robots.txt, JSON-LD et contenu bilingue validés automatiquement.

### Développement local

```bash
npm ci
npm run dev
npm run check
```

`npm run check` exécute les contrôles de contenu/privacité, le contrôle SEO, le build Vite puis la vérification de l'artefact CSS généré.

---

**English summary:** DevSecOps & Cybersecurity Engineer portfolio focused on secure CI/CD, cloud security and software supply-chain integrity. The full portfolio, public resume and flagship engineering case study are available in English from the language switch on the live site.
