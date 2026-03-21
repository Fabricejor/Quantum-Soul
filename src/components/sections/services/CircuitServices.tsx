"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  MessageSquare, 
  Database, 
  CreditCard, 
  FileText, 
  Bot, 
  Cloud, 
  Webhook,
  Blocks,
  Workflow,
  Sparkles
} from 'lucide-react';

// --- DONNÉES DES NOEUDS (ICÔNES FLOTTANTES) ---
const nodes = [
  { id: 1, x: '15%', y: '25%', icon: MessageSquare, label: "Slack / Teams", delay: 0 },
  { id: 2, x: '85%', y: '25%', icon: CreditCard, label: "Stripe", delay: 0.5 },
  { id: 3, x: '15%', y: '75%', icon: FileText, label: "Notion / Docs", delay: 1 },
  { id: 4, x: '85%', y: '75%', icon: Database, label: "CRM / ERP", delay: 1.5 },
  { id: 5, x: '50%', y: '10%', icon: Cloud, label: "Cloud", delay: 2 },
  { id: 6, x: '50%', y: '90%', icon: Bot, label: "Agents IA", delay: 2.5 },
];

// --- DONNÉES DES COMPOSANTS (CARTES EN BAS) ---
const features = [
  {
    icon: Webhook,
    title: "Connecteurs API",
    description: "Synchronisation parfaite entre vos logiciels existants grâce à des API robustes et sécurisées."
  },
  {
    icon: Blocks,
    title: "Intégrations sur mesure",
    description: "Développement de ponts personnalisés pour les outils spécifiques à votre métier."
  },
  {
    icon: Workflow,
    title: "Automatisation multi-plateformes",
    description: "Des workflows qui traversent toutes vos plateformes sans aucune intervention humaine."
  },
  {
    icon: Sparkles,
    title: "Intégration IA (OpenAI, Gemini)",
    description: "Intégration native des modèles d'IA les plus avancés directement dans vos processus."
  }
];

export default function CircuitServices() {
  return (
    <section className="relative w-full py-24 overflow-hidden z-10">
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-geonova text-white mb-6"
          >
            Vos outils, connectés comme jamais.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Ne laissez plus vos données en silo. Quantum Soul crée un écosystème digital fluide où vos applications communiquent intelligemment entre elles, propulsées par l&apos;Intelligence Artificielle.
          </motion.p>
        </div>

        {/* ANIMATION "CARTE 3D / CIRCUIT" */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-24">
          
          {/* Lignes SVG animées (Connexions) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node) => (
              <g key={`line-${node.id}`}>
                {/* Ligne de fond (statique, semi-transparente) */}
                <line 
                  x1="50%" y1="50%" 
                  x2={node.x} y2={node.y} 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeWidth="2" 
                />
                {/* Ligne animée (flux de données) */}
                <motion.line 
                  x1="50%" y1="50%" 
                  x2={node.x} y2={node.y} 
                  stroke="#00E5FF" 
                  strokeWidth="2"
                  strokeDasharray="10 20"
                  animate={{
                    strokeDashoffset: [0, -60]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: node.delay // Décalage pour que les flux ne soient pas tous synchronisés
                  }}
                  className="opacity-60"
                />
              </g>
            ))}
          </svg>

          {/* Noeud Central (Quantum Soul / IA) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0,229,255,0.2)", 
                  "0 0 60px rgba(0,229,255,0.6)", 
                  "0 0 20px rgba(0,229,255,0.2)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-black border border-cyan-400/50 rounded-full backdrop-blur-xl"
            >
              <BrainCircuit className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />
              {/* Cercle pulsant externe */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border border-cyan-400 rounded-full"
              />
            </motion.div>
          </div>

          {/* Noeuds Périphériques (Outils) */}
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={`node-${node.id}`}
                className="absolute z-10 flex flex-col items-center gap-2"
                style={{ left: node.x, top: node.y, x: '-50%', y: '-50%' }}
                animate={{ y: ["-10%", "10%", "-10%"] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: node.delay 
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group cursor-pointer">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white/60 group-hover:text-cyan-400 transition-colors" />
                </div>
                {/* Label (caché sur très petits écrans pour éviter la surcharge) */}
                <span className="hidden sm:block text-xs md:text-sm text-white/50 font-medium tracking-wider uppercase">
                  {node.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* GRILLE DES COMPOSANTS (4 Cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-geonova">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}