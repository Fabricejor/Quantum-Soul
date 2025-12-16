"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "EcoStream AI",
        category: "Automatisation",
        description: "Optimisation des flux logistiques pour une entreprise de transport.",
        image: "/images/QS ID 2.png",
        tags: ["AI", "Automation", "Logistics"],
    },
    {
        title: "MediBot Pro",
        category: "Chatbot Santé",
        description: "Assistant virtuel pour la prise de rendez-vous médicaux.",
        image: "/images/QS ID 2.png",
        tags: ["Healthcare", "NLP", "Bot"],
    },
    {
        title: "FinTech Vision",
        category: "Analyse Prédictive",
        description: "Tableau de bord financier avec prédictions de marché en temps réel.",
        image: "/images/QS ID 2.png",
        tags: ["Finance", "Analytics", "ML"],
    },
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-mono uppercase tracking-wider">
                            Portfolio
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-orbitron mb-6"
                    >
                        Nos <span className="text-neon-green text-glow">Réalisations</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Découvrez comment nous avons transformé ces entreprises.
                    </motion.p>
                </div>

                {/* Projects Grid with Angled Panels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateY: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group perspective-1000"
                        >
                            <Card className="p-0 overflow-hidden border-white/10 bg-black/50 hover:border-neon-green/50 transition-all duration-500 h-full transform-gpu">
                                {/* Image Container with Parallax */}
                                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neon-green/5 to-black">
                                    {/* Holographic Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-transparent to-neon-green-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ mixBlendMode: "screen" }}
                                    />

                                    {/* Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                                        <div className="text-center">
                                            <div className="w-16 h-16 border-2 border-neon-green/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                <ExternalLink className="w-8 h-8 text-neon-green/50" />
                                            </div>
                                            [{project.title}]
                                        </div>
                                    </div>

                                    {/* Scan Line Effect */}
                                    <motion.div
                                        className="absolute left-0 right-0 h-[2px] bg-neon-green/50"
                                        animate={{
                                            top: ["0%", "100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    {/* Category Tag */}
                                    <span className="inline-block px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-xs font-mono uppercase tracking-wider mb-3">
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-500 font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Button variant="outline" className="w-full text-sm py-2 group-hover:border-neon-green group-hover:text-neon-green">
                                        Voir l&apos;étude de cas
                                        <ExternalLink className="w-4 h-4 ml-2 inline" />
                                    </Button>

                                    {/* Corner Accent */}
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button variant="holographic" className="px-8 py-4">
                        Voir plus de projets
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
