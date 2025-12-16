"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bot, Brain, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
    {
        title: "Automatisation des tâches",
        description: "Libérez votre équipe des tâches répétitives grâce à nos robots logiciels intelligents.",
        icon: Zap,
    },
    {
        title: "Intégration IA & API",
        description: "Connectez vos systèmes existants à la puissance des modèles de langage (LLM).",
        icon: Brain,
    },
    {
        title: "Agents conversationnels",
        description: "Des chatbots nouvelle génération qui comprennent et agissent pour vos clients.",
        icon: Bot,
    },
    {
        title: "Analyse prédictive",
        description: "Anticipez les tendances du marché grâce à l&apos;analyse de données avancée.",
        icon: BarChart3,
    },
];

export const Solutions = () => {
    return (
        <section id="solutions" className="py-32 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Radial Gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-neon-green/5 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-mono uppercase tracking-wider">
                            Nos Services
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-orbitron mb-6"
                    >
                        Nos <span className="text-neon-green text-glow">Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Des outils puissants pour propulser votre entreprise dans l&apos;ère quantique.
                    </motion.p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        <motion.line
                            x1="25%" y1="50%" x2="50%" y2="50%"
                            stroke="rgba(0, 255, 65, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.line
                            x1="50%" y1="50%" x2="75%" y2="50%"
                            stroke="rgba(0, 255, 65, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />
                    </svg>

                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <Card className="p-8 border border-white/10 bg-black/50 hover:border-neon-green/50 transition-all duration-300 group h-full relative overflow-visible">
                                {/* Hexagonal Background Pattern */}
                                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <div className="absolute top-0 left-0 w-20 h-20 border-2 border-neon-green"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                    />
                                    <div className="absolute bottom-0 right-0 w-16 h-16 border-2 border-neon-green-light"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                    />
                                </div>

                                {/* Circuit Pattern */}
                                <div className="absolute top-4 right-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <svg viewBox="0 0 50 50" className="w-full h-full">
                                        <circle cx="10" cy="10" r="2" fill="currentColor" className="text-neon-green" />
                                        <circle cx="40" cy="10" r="2" fill="currentColor" className="text-neon-green" />
                                        <circle cx="25" cy="40" r="2" fill="currentColor" className="text-neon-green" />
                                        <path d="M10 10 L40 10 L25 40 Z" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-neon-green" />
                                    </svg>
                                </div>

                                {/* Icon Container */}
                                <motion.div
                                    className="w-16 h-16 rounded-lg bg-neon-green/10 flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors relative"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <solution.icon className="w-8 h-8 text-neon-green" />
                                    <div className="absolute inset-0 rounded-lg glow-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {solution.description}
                                </p>

                                {/* Hover Indicator */}
                                <motion.div
                                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-neon-green opacity-0 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Button variant="holographic" className="px-8 py-4">
                        Explorer toutes nos solutions
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
