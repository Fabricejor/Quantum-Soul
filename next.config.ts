import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression gzip automatique
  compress: true,

  // Désactiver le header x-powered-by pour la sécurité
  poweredByHeader: false,

  // Optimisation des images
  images: {
    // Formats modernes pour des tailles réduites
    formats: ["image/avif", "image/webp"],
    // Tailles d'écran cibles pour le srcset
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Tailles d'images spécifiques (icônes, vignettes)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Durée de cache des images optimisées (en secondes) — 30 jours
    minimumCacheTTL: 2592000,
  },

  // Headers de cache pour les assets statiques
  async headers() {
    return [
      {
        // Fonts — cache 1 an (immutable)
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images — cache 30 jours
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Vidéos — cache 30 jours
        source: "/video/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Modèles 3D — cache 30 jours
        source: "/3d/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // SVGs — cache 7 jours
        source: "/(.*)\\.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
