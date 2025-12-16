"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Database, Cpu, Network, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
    { name: "Cloud AI", icon: Network },
    { name: "Data Pipelines", icon: Database },
    { name: "Machine Learning", icon: Cpu },
    { name: "Chatbots NLP", icon: MessageSquare },
];

export const TechShowcase = () => {
    return (
        <section id="tech" className="py-32 bg-black/50 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-6">
                        <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-mono uppercase tracking-wider">
                            Technologies
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                        Showcase <span className="text-neon-green text-glow">Technologique</span>
                    </h2>

                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        Notre stack technologique est conçue pour la performance, l&apos;escalabilité et la sécurité.
                        Nous utilisons les outils les plus avancés pour propulser votre entreprise.
                    </p>

                    {/* Tech Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-4 flex items-center gap-3 bg-white/5 border-white/10 hover:border-neon-green/50 transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                                        <tech.icon className="w-5 h-5 text-neon-green" />
                                    </div>
                                    <span className="font-bold text-sm text-white group-hover:text-neon-green transition-colors">
                                        {tech.name}
                                    </span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <Button variant="holographic">Découvrir notre stack</Button>
                </motion.div>

                {/* Right - 3D Wireframe Visualization */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="h-[500px] bg-gradient-to-br from-neon-green/10 to-black rounded-2xl flex items-center justify-center border border-neon-green/20 relative overflow-hidden perspective-1000">
                        {/* Grid Floor with Perspective */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                            <div
                                className="absolute inset-0 grid-pattern"
                                style={{
                                    transform: "rotateX(60deg) translateZ(-100px)",
                                    transformOrigin: "center bottom",
                                }}
                            />
                        </div>

                        {/* 3D Rotating Wireframe Cube */}
                        <div className="relative w-48 h-48" style={{ transformStyle: "preserve-3d" }}>
                            <motion.div
                                className="absolute inset-0"
                                style={{ transformStyle: "preserve-3d" }}
                                animate={{
                                    rotateX: [0, 360],
                                    rotateY: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {/* Cube Faces */}
                                {[
                                    { transform: "rotateY(0deg) translateZ(96px)" },
                                    { transform: "rotateY(90deg) translateZ(96px)" },
                                    { transform: "rotateY(180deg) translateZ(96px)" },
                                    { transform: "rotateY(-90deg) translateZ(96px)" },
                                    { transform: "rotateX(90deg) translateZ(96px)" },
                                    { transform: "rotateX(-90deg) translateZ(96px)" },
                                ].map((face, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-48 h-48 border-2 border-neon-green/50 bg-neon-green/5"
                                        style={{ transform: face.transform }}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* Orbiting Rings */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-64 h-64 border-2 border-neon-green/30 rounded-full" />
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-80 h-80 border border-neon-green-light/20 rounded-full" />
                        </motion.div>

                        {/* Data Stream Animation */}
                        <div className="absolute top-4 right-4 font-mono text-xs text-neon-green/50 overflow-hidden h-32">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 120, opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                >
                                    {Math.random().toString(36).substring(7)}
                                </motion.div>
                            ))}
                        </div>

                        {/* Corner Labels */}
                        <span className="absolute bottom-4 left-4 font-mono text-xs text-neon-green/50">
                            3D VISUALIZATION
                        </span>
                        <span className="absolute top-4 left-4 font-mono text-xs text-neon-green/50">
                            v2.0.1
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
