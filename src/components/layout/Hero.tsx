'use client';

import React from 'react'
import Link from 'next/link'
import { BeamsBackground } from '@/components/ui/background/beams-background'
import { ImpossibleCubeScene } from '@/components/ui/3d-models/impossible-cube'

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background flex items-center">
      <BeamsBackground>
        {/* Container: 100vh overall, content centered. 
            Mobile: flex-col-reverse to have Model on top (visually) or just change DOM order if simpler. 
            User asked "de haut en bas on aura l'objet 3d model ... apres le model 3d on aura le text content".
            So DOM order: [Model, Text] ? 
            If DOM is [Model, Text]:
               Mobile (flex-col): Model Top, Text Bottom.
               Desktop (flex-row): Model Left, Text Right. 
            But typically Text is Left on Desktop.
            So we want: 
               Mobile: Model (Top), Text (Bottom)
               Desktop: Text (Left), Model (Right)
            
            With DOM: [Text, Model]
               Mobile (flex-col-reverse): Model (Top), Text (Bottom).
               Desktop (flex-row): Text (Left), Model (Right).
            
            This works.
        */}
        <div className="container mx-auto px-4 h-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 pt-20 pb-24 md:py-0">
          
          {/* Text Content - Left on Desktop, Bottom on Mobile */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start z-20 space-y-6 md:space-y-8 max-w-2xl text-center md:text-left">
            
            {/* Tagline */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    <span className="block font-geonova text-white mb-2">
                        Quantum Soul
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90 font-sans mt-4 text-justify">
                        Fusionnez votre entreprise avec l’intelligence artificielle.
                    </span>
                </h1>
            </div>

            {/* Sous-texte */}
            <p className="text-base md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-light text-justify">
                Nous créons des solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-row gap-4 pt-4 md:pt-6 w-full justify-center md:justify-start">
                {/* Bouton Principal - Liquid Glass Blue */}
                <Link href="/solutions">
                    <button 
                        className="relative group px-4 md:px-8 py-3 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs md:text-base"
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
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-md whitespace-nowrap">
                            Nos solutions
                            <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </button>
                </Link>

                {/* Bouton Secondaire - Liquid Glass Light */}
                <Link href="/demo">
                    <button 
                        className="relative group px-4 md:px-8 py-3 rounded-full text-white font-medium tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs md:text-base"
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
                        <span className="flex items-center gap-2 drop-shadow-md whitespace-nowrap">
                            Démo
                            <svg className="w-3 h-3 md:w-4 md:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </button>
                </Link>
            </div>

          </div>

          {/* 3D Model - Right on Desktop, Top on Mobile */}
          <div className="flex-1 w-full h-[40vh] md:h-[700px] flex items-center justify-center z-20 relative pointer-events-none md:pointer-events-auto">
            {/* Effet de glow derrière le cube */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
            <ImpossibleCubeScene />
          </div>
          
        </div>
      </BeamsBackground>
    </div>
  )
}
