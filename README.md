# Quantum Soul

Site de présentation pour Quantum Soul.

## Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── layout/           # Composants de layout (Header, Footer, etc.)
│   └── sections/         # Sections de pages (Hero, Features, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utilitaires et fonctions helper
├── types/                # Types TypeScript
├── constants/            # Constantes de l'application
└── styles/               # Styles additionnels

public/
├── images/               # Images et assets
└── fonts/                # Polices personnalisées
```

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
npm start
```

## Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **ESLint** - Linting

## Bonnes pratiques

- **Composants**: Créer des composants réutilisables dans `src/components/ui/`
- **Types**: Définir les types dans `src/types/`
- **Constantes**: Centraliser les constantes dans `src/constants/`
- **Hooks**: Créer des hooks personnalisés dans `src/hooks/`
- **Utilitaires**: Fonctions helper dans `src/lib/`

## Variables d'environnement

Copier `.env.local.example` vers `.env.local` et remplir les valeurs nécessaires.
