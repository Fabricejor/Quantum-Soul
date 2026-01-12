import React from "react";
import { Scene } from "@/components/ui/background/hero-section";

export default function RealisationHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background text-white">
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
          
          {/* Call to Action Button - Liquid Glass Style */}
          <div className="flex justify-center pt-4">
            <button 
              className="relative group px-8 py-3.5 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs md:text-base"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)',
                backdropFilter: 'blur(10px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: `
                  0 8px 32px 0 rgba(31, 38, 135, 0.2),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.05),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)
                `
              }}
            >
              <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                Voir plus
                <svg 
                  className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
