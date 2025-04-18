# Portfolio Moderne de H.Haithem

![Logo H.Haithem](public/icon-light.svg)

Un portfolio personnel moderne, interactif et responsive développé avec Next.js, TypeScript, Tailwind CSS et Framer Motion. Ce portfolio présente mes compétences, expériences, projets et réalisations dans une interface élégante et engageante.

## 🌟 Caractéristiques

- **Design Moderne** : Interface utilisateur élégante avec animations fluides
- **Entièrement Responsive** : S'adapte parfaitement à tous les appareils
- **Mode Sombre/Clair** : Thème adaptable aux préférences de l'utilisateur
- **Animations Avancées** : Utilisation de Framer Motion pour des transitions fluides
- **Formulaire de Contact Fonctionnel** : Intégration avec Resend pour l'envoi d'emails
- **SEO Optimisé** : Structure optimisée pour les moteurs de recherche
- **Accessibilité** : Respect des normes WCAG pour une expérience inclusive
- **Performance Optimisée** : Chargement rapide et expérience utilisateur fluide
- **Curseur Personnalisé** : Interaction améliorée sur desktop
- **Page 404 Animée** : Expérience utilisateur améliorée même en cas d'erreur

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour un code plus robuste
- **Tailwind CSS** - Styling utilitaire et responsive
- **Framer Motion** - Bibliothèque d'animation
- **Shadcn/UI** - Composants UI réutilisables
- **Lucide React** - Icônes modernes et personnalisables
- **React Icons** - Bibliothèque d'icônes pour les technologies

### Backend
- **Next.js API Routes** - Endpoints API serverless
- **Resend** - Service d'envoi d'emails

### Outils
- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Git** - Contrôle de version

## 📂 Structure du Projet

```
modern-portfolio/
├── app/                    # App Router de Next.js
│   ├── api/                # API Routes
│   ├── blog/               # Pages du blog
│   ├── projects/           # Pages des projets
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── not-found.tsx       # Page 404
├── components/             # Composants React
│   ├── layout/             # Composants de mise en page (header, footer)
│   ├── sections/           # Sections principales du portfolio
│   ├── ui/                 # Composants UI réutilisables
│   └── ...                 # Autres composants
├── lib/                    # Utilitaires et fonctions
├── public/                 # Fichiers statiques
│   ├── fonts/              # Polices personnalisées
│   └── ...                 # Images et autres assets
├── types/                  # Définitions de types TypeScript
├── next.config.mjs         # Configuration Next.js
├── tailwind.config.ts      # Configuration Tailwind CSS
└── tsconfig.json           # Configuration TypeScript
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18.0.0 ou version ultérieure
- npm ou yarn

### Installation

1. **Clonez le dépôt**
 ```bash
   git clone 
   https://github.com/haithemhammami/MyPortfolio.git
   cd MyPortfolio
   ```
2. **Installez les dépendances**
 ```bash
    npm install
    # ou
    yarn install
   ```
3. **Configurez les variables d’environnement**
 Créez un fichier .env.local à la racine du projet et 
  ajoutez votre clé Resend :
 ```
  RESEND_API_KEY=votre_clé_api_resend
 ```
4. **Lancez le serveur de développement**
 ```bash
    npm run dev
    # ou
    yarn dev
   ```
5. **Accédez à l'application**
Ouvrez votre navigateur à l’adresse : http://localhost:3000

## 🛠️ Personnalisation

### 🎨 Contenu

**Informations personnelles :**  
Modifiez les fichiers de composants dans `components/sections/` (par ex. `Hero.tsx`, `About.tsx`…)

**Projets :**  
Ajoutez vos projets dans `components/sections/projects.tsx`

**Blog :**  
Personnalisez les articles dans `components/sections/blog.tsx`

---

### 🖌️ Style

**Couleurs principales :**  
Modifiables dans `tailwind.config.ts`

**Styles globaux :**  
Définis dans `app/globals.css`

**Thème clair/sombre :**  
Géré via `components/theme-provider.tsx`

---

### 🔁 Logo

- Remplacez les fichiers SVG dans `public/`
- Personnalisez le composant `Logo` dans `components/logo.tsx`

---

## 🚀 Déploiement

Ce portfolio peut être déployé facilement sur des plateformes comme :

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

Il suffit de connecter votre dépôt Git et de configurer la variable `RESEND_API_KEY` dans les variables d’environnement.

---

## 🙏 Crédits

- **Polices** : Mona Sans  
- **Icônes** : Lucide React & React Icons  
- **Composants UI** : [shadcn/ui](https://ui.shadcn.dev/)  
- **Animations** : [Framer Motion](https://www.framer.com/motion/)

---

## 👨‍💻 Développé avec ❤️ par **H.Haithem**
