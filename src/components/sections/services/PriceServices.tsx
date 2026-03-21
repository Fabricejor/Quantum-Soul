"use client";

import React from 'react';
import { motion } from 'framer-motion';
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