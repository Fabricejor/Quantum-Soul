"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import PricingDemo from '@/components/ui/pricing-section';

// --- COMPOSANT BOUTON ---
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
          "bg-white text-black hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] h-12 px-8",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// --- COMPOSANT CARTE DE PRIX ---
interface PricingCardProps {
  title: string;
  features: string[];
  buttonText: string;
  useSparkles?: boolean;
  delay?: number;
}

const PricingCard = ({ title, features, buttonText, useSparkles = false, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px -10px rgba(0,229,255,0.15)",
      }}
      className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D0D0D]/80 backdrop-blur-xl p-8 text-white transition-all duration-500 group overflow-hidden"
    >
      {/* Halo bleu/violet au survol (Glow effect) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 group-hover:from-cyan-500/20 group-hover:via-purple-500/10 group-hover:to-transparent transition-opacity duration-500 pointer-events-none" />
      
      {/* Ligne lumineuse en haut au survol */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col space-y-6 relative z-10">
        {/* En-tête de la carte */}
        <div>
          <h3 className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:to-cyan-200 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        {/* Liste des fonctionnalités */}
        <ul className="space-y-4 pt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-300">
                {useSparkles ? (
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                ) : (
                  <Diamond className="h-3 w-3 text-cyan-400" />
                )}
              </div>
              <span className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton */}
      <div className="mt-10 relative z-10">
        <Button className="w-full group/btn">
          {buttonText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function PriceServices() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* En-tête de la section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4"
          >
            Pack Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-geonova text-white"
          >
            Des offres claires et futuristes.
          </motion.h2>
        </div>

        {/* Grille des offres via le composant UI */}
        <PricingDemo />

      </div>
    </section>
  );
}