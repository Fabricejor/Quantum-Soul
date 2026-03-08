"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Effet de lueur d'arrière-plan */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 block">
          {/* Image Container - Utilisation de float-right pour l'effet d'enveloppement demandé */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] lg:float-right lg:ml-12 mb-8 lg:mb-4 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-blue-900/20 group"
          >
            <Image
              src="/images/Mockup web ai .png"
              alt="Quantum Soul Interface AI"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay futuriste */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-blue-500/10 mix-blend-overlay" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </motion.div>

          {/* Bloc Texte */}
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-geonova mb-8 tracking-wide"
            >
              Notre Histoire
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 text-justify">
                <span className="text-blue-400 font-semibold">Quantum Soul</span> est née d’une vision simple : donner aux entreprises une âme digitale capable d’évoluer, d’apprendre et d’automatiser.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 text-justify">
                Au départ, une petite équipe passionnée par l’IA et le développement web s’est regroupée autour d’un objectif : créer des solutions intelligentes accessibles à tous. Nous voulions briser la barrière entre la complexité technologique et l&apos;expérience utilisateur fluide.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify">
                Ce qui était une idée est devenu un mouvement de transformation digitale. Aujourd&apos;hui, nous accompagnons les visionnaires qui souhaitent repousser les limites de ce qui est possible sur le web, en fusionnant esthétique futuriste et puissance algorithmique.
              </p>
            </motion.div>
          </div>
          
          {/* Clearfix pour s'assurer que le conteneur englobe tout */}
          <div className="clear-both" />
        </div>

        {/* Glowing Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-20 opacity-50" />
      </div>
    </section>
  );
}
