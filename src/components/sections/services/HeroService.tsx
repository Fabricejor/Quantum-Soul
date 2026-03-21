"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Settings, Cpu, Smartphone, Bot } from 'lucide-react';
import IsoLevelWarp from '@/components/ui/background/isometric-wave-grid-background';

export default function HeroService() {
  const badges = [
    { id: 1, icon: Settings, label: 'Automatisation' },
    { id: 2, icon: Cpu, label: 'Circuit Brain' },
    { id: 3, icon: Smartphone, label: 'Mobile' },
    { id: 4, icon: Bot, label: 'Bot' },
  ];

  return (
    <section className="relative w-full h-[90vh] lg:h-[100vh] max-h-[900px] lg:max-h-none flex items-center justify-center overflow-hidden pt-12 lg:pt-20 pb-24 lg:pb-4">
      {/* Background Anime */}
      <div className="absolute inset-0 z-0">
        <IsoLevelWarp className="w-full h-full" color="0, 229, 255" speed={0.8} density={45} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8 items-center w-full">
          
          {/* Colonne de Gauche (Texte & Badges) - 1/3 de la largeur sur Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-3 lg:gap-6 order-2 lg:order-1 lg:col-span-1"
          >
            {/* Titre - Desktop Uniquement */}
            <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-bold text-white font-geonova text-justify">
              Nos Services
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl text-justify lg:text-left">
              Quantum Soul met à votre disposition de nombreux services innovants et sur-mesure pour concevoir, développer et finaliser votre projet technologique.
            </p>

            {/* Badges (sur la même ligne) */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-5 mt-1 lg:mt-4">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={badge.id}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl bg-[#0D0D0D]/80 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-cyan-400/50 transition-all duration-300 group"
                    title={badge.label}
                  >
                    {/* Petits points décoratifs style "circuit" */}
                    <div className="absolute -left-1 top-1/2 w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors" />
                    <div className="absolute -right-1 top-1/2 w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors" />
                    
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white/80 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Colonne de Droite (Images & Titre Mobile) - 2/3 de la largeur sur Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-3 lg:gap-0 order-1 lg:order-2 lg:col-span-2 w-full"
          >
            {/* Titre - Mobile Uniquement */}
            <h1 className="block lg:hidden text-3xl sm:text-4xl font-bold text-white font-geonova text-center mb-1">
              Nos Services
            </h1>

            {/* Image Mobile */}
            <div className="block lg:hidden relative w-full max-w-[180px] sm:max-w-[220px] aspect-[3/4] mx-auto">
              <Image 
                src="/images/services/Hero Services mobile.png" 
                alt="Nos Services Mobile" 
                fill 
                className="object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                priority
              />
            </div>

            {/* Image Desktop */}
            <div className="hidden lg:block relative w-full h-[50vh] lg:h-[70vh] min-h-[400px] mx-auto">
              <Image 
                src="/images/services/Hero Service PC.png" 
                alt="Nos Services PC" 
                fill 
                className="object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.15)] scale-110"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}