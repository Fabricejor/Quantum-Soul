"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-40 relative overflow-hidden flex items-center justify-center bg-black">
            {/* Radial Gradient Background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.1) 0%, rgba(0, 0, 0, 1) 50%)",
                        "radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.15) 0%, rgba(0, 0, 0, 1) 50%)",
                        "radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.1) 0%, rgba(0, 0, 0, 1) 50%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated Grid */}
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Geometric Frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-[90%] h-[80%] border-2 border-neon-green/20 rounded-2xl"
                    animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute w-[85%] h-[75%] border border-neon-green/10 rounded-2xl"
                    animate={{
                        scale: [1, 0.98, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 2,
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-green rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-green/10 border-2 border-neon-green/30 mb-8 glow-effect"
                >
                    <Sparkles className="w-10 h-10 text-neon-green" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold font-orbitron mb-8 leading-tight text-white"
                >
                    Entrez dans une nouvelle <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-green-light to-neon-green-cyan text-glow-strong holographic-shimmer inline-block">
                        dimension digitale
                    </span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                >
                    Discutons de votre transformation quantique.
                </motion.p>

                {/* Button with Particle Burst */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative inline-block"
                >
                    <Button
                        variant="holographic"
                        className="text-xl px-12 py-6 shadow-[0_0_30px_rgba(0,255,65,0.4)] hover:shadow-[0_0_50px_rgba(0,255,65,0.6)] relative group"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Nous contacter
                            <Sparkles className="w-5 h-5" />
                        </span>

                        {/* Particle Burst on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-green rounded-full"
                                    animate={{
                                        x: [0, Math.cos((i * Math.PI) / 4) * 50],
                                        y: [0, Math.sin((i * Math.PI) / 4) * 50],
                                        opacity: [1, 0],
                                        scale: [1, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </div>
                    </Button>

                    {/* Pulsing Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-neon-green/30 pointer-events-none"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-sm text-gray-500 font-mono"
                >
                    Réponse sous 24h • Consultation gratuite • Sans engagement
                </motion.p>
            </div>
        </section>
    );
};
