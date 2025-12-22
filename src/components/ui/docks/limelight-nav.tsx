"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { House, Briefcase, Trophy, Info } from 'lucide-react';
import { motion } from 'framer-motion';

// Mapping des icônes pour les liens spécifiques
const icons = [
  House,      // Accueil
  Briefcase,  // Services
  Trophy,     // Realisation
  Info        // A propos
];

export const LimelightNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  // On ne suit que les 4 liens, le logo est séparé
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Realisation", href: "/realisation" },
    { name: "A propos", href: "/about" },
  ];

  useEffect(() => {
    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      // Calcul de la position relative au parent
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[95%] max-w-sm">
      <nav className="relative flex items-center justify-between px-2 h-16 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Partie Gauche (Accueil, Services) */}
        {navLinks.slice(0, 2).map((link, index) => {
          const Icon = icons[index];
          return (
            <Link
              key={link.name}
              href={link.href}
              ref={el => {navItemRefs.current[index] = el}}
              onClick={() => setActiveIndex(index)}
              className="relative z-20 flex flex-col items-center justify-center w-12 h-12"
            >
              <Icon 
                className={`w-5 h-5 transition-colors duration-300 ${
                  activeIndex === index ? 'text-cyan-400' : 'text-white/50'
                }`} 
              />
              {activeIndex === index && (
                 <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyan-400" />
              )}
            </Link>
          );
        })}

        {/* Logo Central (Hors flux de navigation standard) */}
        <div className="relative z-30 -mt-8 mx-2">
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-50" />
                <Image
                    src="/images/logo & icons/Logo Q Blanc Icone.png"
                    alt="Logo Central"
                    width={40}
                    height={40}
                    className="object-contain relative z-10 scale-110"
                />
            </div>
        </div>

        {/* Partie Droite (Realisation, A propos) */}
        {navLinks.slice(2, 4).map((link, i) => {
          const index = i + 2; // Offset pour l'index global
          const Icon = icons[index];
          return (
            <Link
              key={link.name}
              href={link.href}
              ref={el => {navItemRefs.current[index] = el}}
              onClick={() => setActiveIndex(index)}
              className="relative z-20 flex flex-col items-center justify-center w-12 h-12"
            >
              <Icon 
                className={`w-5 h-5 transition-colors duration-300 ${
                  activeIndex === index ? 'text-cyan-400' : 'text-white/50'
                }`} 
              />
              {activeIndex === index && (
                 <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyan-400" />
              )}
            </Link>
          );
        })}

        {/* Effet Limelight (Spotlight) */}
        <div 
          ref={limelightRef}
          className={`absolute bottom-0 z-10 w-12 h-full pointer-events-none transition-all duration-500 ease-out`}
          style={{ left: '0px' }}
        >
           {/* Glow Effect under the active icon */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-500/20 blur-xl rounded-full" />
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-400 blur-sm rounded-full" />
        </div>

      </nav>
    </div>
  );
};
