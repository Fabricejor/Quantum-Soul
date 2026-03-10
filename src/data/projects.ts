export interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  category: string;
  span?: string;
  aspectRatio?: string;
  description?: string;
  link?: string;
  gallery?: { src: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: "basket-plus",
    title: "Basket Plus",
    subtitle: "Plateforme e-commerce moderne pour une boutique de baskets premium",
    coverImage: "/images/projets/basket plus +/Cover Basket plus hero.png",
    category: "Projets",
    span: "md:col-span-1",
    aspectRatio: "aspect-video",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    link: "https://basketplus.africa",
    gallery: [
      { src: "/images/projets/basket plus +/basket plus boutique.png", description: "Vue de la boutique" },
      { src: "/images/projets/basket plus +/basket plus histoire.png", description: "Page histoire" },
      { src: "/images/projets/basket plus +/basket plus testimonial.png", description: "Section témoignages" },
    ],
  },
  {
    id: "Groupe-SIGS",
    title: "Refonte pour Groupe SIGS4",
    subtitle: "Une nouvelle identité visuelle et une expérience utilisateur optimisée.",
    coverImage: "/images/projets/Groupe SIGS/Groupe Sigs Cover.png",
    category: "Projets",
    span: "md:col-span-1",
    aspectRatio: "aspect-video",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    link: "https://groupesigs.vercel.app",
    gallery: [
      { src: "/images/projets/Groupe SIGS/Groupe Sigs 1.png", description: "Page d'accueil" },
      { src: "/images/projets/Groupe SIGS/Groupe Sigs 2.png", description: "Page de contact" },
      { src: "/images/projets/Groupe SIGS/Groupe Sigs 3.png", description: "Page de blog" },
      { src: "/images/projets/Groupe SIGS/Groupe Sigs 4.png", description: "Page de blog" },
    ],
  },
  {
    id: "la-fabrique-artisanal",
    title: "La Fabrique Artisanal",
    subtitle: "Site e-commerce pour produits artisanaux avec intégration TikTok",
    coverImage: "/images/projets/La fabrique Artisanal/Cover La fabrique artisnal.jpeg",
    category: "Projets",
    span: "md:col-span-1",
    aspectRatio: "aspect-video",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    gallery: [
      { src: "/images/projets/La fabrique Artisanal/la fabrique artisanal 2.jpeg", description: "Détails produits" },
      { src: "/images/projets/La fabrique Artisanal/La fabrique artisanal collections.jpeg", description: "Collections" },
      { src: "/images/projets/La fabrique Artisanal/La fabrique artisanal tik tok.jpeg", description: "Intégration TikTok" },
    ],
  },
  {
    id: "dhis2-harvest",
    title: "DHIS2 Harvest",
    subtitle: "Solution de gestion de données pour hackathon santé publique",
    coverImage: "/images/projets/DHIS2 HARVEST- hackaton/Cover  login.jpeg",
    category: "Projets",
    span: "md:col-span-1",
    aspectRatio: "aspect-video",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    gallery: [
      { src: "/images/projets/DHIS2 HARVEST- hackaton/hackhaton dashboard 1.jpeg", description: "Tableau de bord principal" },
      { src: "/images/projets/DHIS2 HARVEST- hackaton/hackhaton dashbord 3.jpeg", description: "Analyses détaillées" },
      { src: "/images/projets/DHIS2 HARVEST- hackaton/home.jpeg", description: "Page d'accueil" },
    ],
  },
  {
    id: "mobile-app-sante",
    title: "Mobile App Santé",
    subtitle: "Application mobile de gestion de rendez-vous médicaux",
    coverImage: "/images/projets/mobile app sante/Cover Prise de rendez vous.jpeg",
    category: "Projets",
    span: "md:col-span-2 max-w-sm mx-auto",
    aspectRatio: "aspect-[9/16] md:aspect-[3/4]",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    gallery: [
      { src: "/images/projets/mobile app sante/acceuil.jpeg", description: "Accueil" },
      { src: "/images/projets/mobile app sante/Assistant Sante.jpeg", description: "Assistant Santé" },
      { src: "/images/projets/mobile app sante/Connexion Page.jpeg", description: "Connexion" },
      { src: "/images/projets/mobile app sante/Gestion des rendez vous.jpeg", description: "Gestion RDV" },
      { src: "/images/projets/mobile app sante/gestion docs.jpeg", description: "Documents" },
      { src: "/images/projets/mobile app sante/mes rendez vous 2.jpeg", description: "Mes RDV" },
    ],
  },
];
