import React from "react";
import { Scene } from "@/components/ui/background/hero-section";

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background 3D scene */}
      <div className="pointer-events-none absolute inset-0">
        <Scene />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 border border-white/10 backdrop-blur-md">
            Réalisations Quantum Soul
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight font-geonova">
            Découvrez toutes nos réalisations
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-white/70">
            Explorez les projets que nous avons conçus avec nos clients&nbsp;:
            expériences numériques, automatisations et solutions IA pensées pour la performance.
          </p>
        </div>
      </div>
    </section>
  );
}
