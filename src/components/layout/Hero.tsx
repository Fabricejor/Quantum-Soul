'use client';

import React from 'react'
import Link from 'next/link'
import { BeamsBackground } from '@/components/ui/background/beams-background'
import { ImpossibleCubeScene } from '@/components/ui/3d-models/impossible-cube'

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background flex items-center">
      <BeamsBackground>
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
          
          {/* Text Content - Left */}
          <div className="flex-1 flex flex-col justify-center items-start z-20 space-y-8 max-w-2xl">
            
            {/* Tagline */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    <span className="block font-geonova text-white mb-2">
                        Quantum Soul
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90 font-sans mt-4">
                        Fusionnez votre entreprise avec l’intelligence artificielle.
                    </span>
                </h1>
            </div>

            {/* Sous-texte */}
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-light">
                Nous créons des solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                {/* Bouton Principal - Liquid Glass Blue */}
                <Link href="/solutions">
                    <button 
                        className="relative group px-8 py-3.5 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 100%)',
                            backdropFilter: 'blur(10px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: `
                                0 8px 32px 0 rgba(31, 38, 135, 0.37),
                                inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                                inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
                            `
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                            Découvrir nos solutions
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </button>
                </Link>

                {/* Bouton Secondaire - Liquid Glass Light */}
                <Link href="/demo">
                    <button 
                        className="relative group px-8 py-3.5 rounded-full text-white font-medium tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                            backdropFilter: 'blur(10px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: `
                                0 8px 32px 0 rgba(0, 0, 0, 0.37),
                                inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                                inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
                            `
                        }}
                    >
                        <span className="flex items-center gap-2 drop-shadow-md">
                            Voir une démo
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </button>
                </Link>
            </div>

          </div>

          {/* 3D Model - Right */}
          <div className="flex-1 w-full h-[500px] md:h-[700px] flex items-center justify-center z-20 relative">
            {/* Effet de glow derrière le cube */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <ImpossibleCubeScene />
          </div>
          
        </div>
      </BeamsBackground>
    </div>
  )
}
