"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/3d/HeroScene";
import { ParticleField } from "@/components/effects/ParticleField";
import { HolographicOverlay } from "@/components/effects/HolographicOverlay";

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* 3D Star Field */}
            <HeroScene />

            {/* Particle Field */}
            <ParticleField />

            {/* Holographic Overlay */}
            <HolographicOverlay />

            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 mesh-gradient opacity-40" />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Hexagon */}
                <motion.div
                    className="absolute top-20 right-20 w-40 h-40 border-2 border-neon-green/20"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Triangle */}
                <motion.div
                    className="absolute bottom-40 left-20 w-32 h-32 border-2 border-neon-green-light/20"
                    style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                    animate={{
                        rotate: [0, -360],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Circle */}
                <motion.div
                    className="absolute top-1/2 left-10 w-24 h-24 rounded-full border-2 border-neon-green-cyan/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Small Squares */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-8 h-8 border border-neon-green/30"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`,
                        }}
                        animate={{
                            rotate: [0, 180, 360],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-neon-green text-lg md:text-xl font-mono mb-4 tracking-widest uppercase text-glow"
                >
                    Innovation Numérique
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-orbitron relative"
                    data-text="Donnez Vie à Votre Vision Digitale"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-white to-neon-green-cyan text-glow-strong">
                        Donnez Vie à Votre
                    </span>
                    <br />
                    <span className="text-white text-glow">Vision Digitale</span>

                    {/* Glitch Effect Lines */}
                    <motion.div
                        className="absolute inset-0 opacity-0 hover:opacity-20"
                        animate={{
                            opacity: [0, 0.1, 0],
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 5,
                        }}
                    >
                        <span className="absolute inset-0 text-neon-green" style={{ transform: "translate(-2px, 2px)" }}>
                            Donnez Vie à Votre Vision Digitale
                        </span>
                        <span className="absolute inset-0 text-neon-green-cyan" style={{ transform: "translate(2px, -2px)" }}>
                            Donnez Vie à Votre Vision Digitale
                        </span>
                    </motion.div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Une approche quantique du développement web. Design futuriste, performance absolue et expériences immersives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Button variant="holographic" className="w-full md:w-auto text-lg px-10 py-5">
                        Découvrir nos solutions
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto text-lg px-10 py-5">
                        Voir une démo
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
                >
                    {[
                        { value: "99%", label: "Performance" },
                        { value: "24/7", label: "Support" },
                        { value: "100+", label: "Projets" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-neon-green text-glow mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 relative overflow-hidden">
                    <motion.div
                        className="w-1 h-2 bg-neon-green rounded-full"
                        animate={{
                            y: [0, 20, 0],
                            opacity: [1, 0, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                    <div className="absolute inset-0 rounded-full glow-effect opacity-50" />
                </div>
            </motion.div>
        </section>
    );
};
