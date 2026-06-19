import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QuantumSoul — Solutions IA & Automatisation",
    short_name: "QuantumSoul",
    description:
      "Fusionnez votre entreprise avec l'intelligence artificielle. Solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#00E5FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
