# 🚀 Portfolio Bastien Ladra

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bastien-ladra/portfolio-bastien-ladra)

Un portfolio moderne et professionnel développé avec React, Vite et Tailwind CSS, présentant mes compétences en cybersécurité et développement DevSecOps.

## ✨ Fonctionnalités

- 🎨 **Design moderne** avec animations subtiles
- 📱 **Responsive** - fonctionne sur tous les appareils
- 🌙 **Thème sombre** optimisé pour la cybersécurité
- 📄 **CV intégré** avec version alternative "cyber"
- ⚡ **Performance optimisée** avec Vite
- 🔒 **Sécurité** et bonnes pratiques de développement

## 🛠️ Technologies utilisées

### Frontend

- **React 19** - Bibliothèque JavaScript moderne
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Routage côté client

### Déploiement

- **Vercel** - Plateforme de déploiement
- **GitHub Actions** - CI/CD automatisé

## 📁 Structure du projet

```
portfolio-bastien-ladra/
├── public/                    # Assets statiques
│   ├── favicon.svg           # Icône du site
│   ├── CV_Bastien_Ladra.pdf  # CV téléchargeable
│   └── assets/               # Images et ressources
├── src/                      # Code source
│   ├── components/           # Composants réutilisables
│   ├── pages/               # Pages de l'application
│   │   ├── Index.jsx        # Page d'accueil
│   │   └── CVCyber.jsx      # Version alternative du CV
│   ├── App.jsx              # Routage principal
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles globaux
├── .github/                 # Configuration GitHub
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
└── README.md               # Documentation
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/bastien-ladra/portfolio-bastien-ladra.git
   cd portfolio-bastien-ladra
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

### Build pour la production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Configuration pour le déploiement

#### 🚀 GitHub Pages (Automatisé) :

- ✅ **Déploiement automatique** via GitHub Actions moderne
- ✅ **Build optimisé** avec le bon base path
- ✅ **Déclenché** à chaque push sur master
- 🔗 **URL** : `https://bastien-ladra.github.io/portfolio-bastien-ladra/`

**Configuration requise :**

1. Allez dans **Settings > Pages** de votre repository
2. Sélectionnez **"GitHub Actions"** comme source
3. Le déploiement se fait automatiquement

#### Pour Vercel/Netlify :

- Gardez la configuration par défaut (base commenté)
- Importez directement depuis GitHub
- Déploiement automatique

## 🎨 Personnalisation

### Modifier le contenu

- **Informations personnelles** : `src/pages/Index.jsx`
- **Expériences** : Section "Expériences professionnelles"
- **Compétences** : Section "Compétences"
- **Projets** : Section "Projets personnels"

### Changer les couleurs

Le thème utilise des variables CSS dans `src/index.css`. Modifiez les couleurs dans la section `:root`.

### Ajouter des images

- Remplacez `public/assets/profile-photo.jpg` par votre photo
- Ajoutez d'autres images dans `public/assets/`

## 📄 Pages disponibles

### 🏠 Page d'accueil (`/`)

- Présentation professionnelle
- Compétences techniques
- Expériences détaillées
- Projets personnels
- Certifications obtenues
- Formulaire de contact

### 🔒 CV Cyber (`/cv-cyber`)

- Version alternative du CV
- Design inspiré de l'univers cyber
- Même contenu, présentation différente

## 🌐 Déploiement

### Vercel (Recommandé)

1. Connectez-vous à [Vercel](https://vercel.com)
2. Importez votre repository GitHub
3. Déploiement automatique à chaque push

### Netlify

1. Connectez-vous à [Netlify](https://netlify.com)
2. Glissez-déposez le dossier `dist/` après build
3. Ou connectez votre repository Git

### Autres plateformes

Compatible avec toutes les plateformes supportant les applications React :

- GitHub Pages
- Railway
- Render
- Heroku

## 🔧 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build pour la production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Bundle size** : Optimisé avec Vite
- **SEO** : Meta tags et structure sémantique
- **Accessibilité** : Conformité WCAG

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Bastien Ladra**

- 🔗 [LinkedIn](https://www.linkedin.com/in/bastienladra)
- 💻 [GitHub](https://github.com/BastienLadra)
- 📧 ladra.bastien@gmail.com

## 🙏 Remerciements

- [React](https://reactjs.org/) - Bibliothèque JavaScript
- [Vite](https://vitejs.dev/) - Outil de build
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vercel](https://vercel.com/) - Plateforme de déploiement
- [Lucide React](https://lucide.dev/) - Icônes

---

⭐ **Si ce portfolio vous plaît, n'hésitez pas à laisser une étoile !**
