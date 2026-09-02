# Bastien Ladra — Portfolio DevSecOps & Cybersécurité

**Spécialiste DevSecOps & Cybersécurité · France**
Expérience chez **NEHS Digital, GSOI et ASTEK**, titulaire du **Titre RNCP d’Expert en Technologies de l’Information - niveau bac+5** délivré par Epitech, avec un focus sur la CI/CD sécurisée, la sécurité cloud et la software supply chain.

[**Voir le portfolio →**](https://bastien-ladra.github.io/portfolio-bastien-ladra/) · [CV PDF — FR](https://bastien-ladra.github.io/portfolio-bastien-ladra/Bastien_Ladra_CV_Public_FR_2026.pdf) · [Resume PDF — EN](https://bastien-ladra.github.io/portfolio-bastien-ladra/Bastien_Ladra_Resume_Public_EN_2026.pdf) · [LinkedIn](https://www.linkedin.com/in/bastienladra)

[CV public en ligne FR/EN](https://bastien-ladra.github.io/portfolio-bastien-ladra/resume.html)

## Ce que le portfolio démontre

- **Expérience de production** en DevSecOps, SecOps et sécurité cloud.
- **Secure API DevSecOps** — projet public avec 7 workflows de sécurité, dépendances verrouillées par hash, CodeQL, Trivy, OWASP ZAP, Terraform, SBOM CycloneDX et attestations.
- **Secure Software Supply Chain Lab** — travail POEI 2026 avec SBOM, provenance, Cosign, GHCR et OpenSSF Scorecard amélioré de **3,9/10 à 7,2/10**.
- **CyberSOC-AI-Lab** — laboratoire public IA/cybersécurité avec décision humaine, threat model, tests, quality gates et limites documentées.
- **Axe doctoral explicite** — question, hypothèse et programme de travail autour de la provenance des modèles et datasets, du Secure MLOps et de l'adoption opérationnelle.
- **FR / EN** — le portfolio, le CV public, les PDF recruteur et l'étude de cas principale sont disponibles dans les deux langues.
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

### CyberSOC-AI-Lab et axe de recherche

Le portfolio relie désormais le laboratoire [CyberSOC-AI-Lab](https://github.com/bastien-ladra/CyberSOC-AI-Lab) à un axe de recherche transparent : étendre les garanties de la supply chain logicielle aux modèles, datasets et pipelines ML sans masquer le coût d'adoption pour les équipes.

- [Étude de cas — FR](https://bastien-ladra.github.io/portfolio-bastien-ladra/case-study-cybersoc-fr.html)
- [Engineering case study — EN](https://bastien-ladra.github.io/portfolio-bastien-ladra/case-study-cybersoc.html)
- Statut affiché sans ambiguïté : axe exploratoire et objectif doctoral, pas publication revendiquée.

## Pour les recruteurs

La page d'accueil est volontairement courte et orientée lecture rapide : **profil → projets sélectionnés → expérience → expertise → formation → contact**. Le **CV PDF correspondant à la langue active** reste téléchargeable en un clic depuis le hero et la navigation. Les détails techniques restent derrière les études de cas et les dépôts publics afin de ne pas transformer la homepage en documentation technique.

## Engineering notes

Le portfolio est lui-même traité comme un petit produit logiciel :

- React 18 + Vite 4 + Tailwind CSS 3 ;
- GitHub Pages ;
- qualité, SEO et build vérifiés par CI ;
- vérification post-build du CSS Tailwind généré ;
- permissions GitHub Actions limitées et actions épinglées par SHA ;
- contrôle des régressions de confidentialité du CV public ;
- validation CI de la présence et de la signature des PDF recruteur FR/EN ;
- sitemap, robots.txt, JSON-LD, carte sociale Open Graph et contenu bilingue validés automatiquement.

### Développement local

```bash
npm ci
npm run dev
npm run check
```

`npm run check` exécute les contrôles de contenu/privacité, le contrôle SEO, le build Vite puis la vérification de l'artefact CSS généré.

---

**English summary:** DevSecOps & Cybersecurity Specialist portfolio focused on secure CI/CD, cloud security and software supply-chain integrity. Bastien holds the French RNCP title Expert in Information Technologies at bac+5 level; this is not presented as an engineering degree. The portfolio, downloadable English resume and flagship engineering case study are available from the live site.
