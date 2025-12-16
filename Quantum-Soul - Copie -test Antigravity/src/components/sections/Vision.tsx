"use client";

import { motion } from "framer-motion";

export const Vision = () => {
    return (
        <section id="vision" className="py-32 relative overflow-hidden bg-black">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />

            {/* Scan Lines */}
            <div className="absolute inset-0 scan-lines" />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 border-2 border-neon-green/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 border-2 border-neon-green-cyan/10"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    animate={{
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Holographic Quote Marks */}
                    <motion.div
                        className="absolute -top-10 -left-10 text-9xl text-neon-green/20 font-serif"
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    >
                        &ldquo;
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-10 -right-10 text-9xl text-neon-green/20 font-serif"
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: 2,
                        }}
                    >
                        &rdquo;
                    </motion.div>

                    {/* Quote Text with Reveal Animation */}
                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold font-orbitron leading-tight mb-8 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-white">
                            Le futur n&apos;est pas quelque chose que l&apos;on prévoit,
                        </span>
                        <br />
                        <span className="text-white">
                            c&apos;est quelque chose que l&apos;on{" "}
                        </span>
                        <span className="text-neon-green text-glow-strong holographic-shimmer inline-block">
                            construit
                        </span>
                        <span className="text-white">.</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 italic mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        - L&apos;Esprit Quantum
                    </motion.p>

                    {/* Animated Pulse Dot */}
                    <div className="flex justify-center">
                        <div className="relative w-6 h-6">
                            <motion.div
                                className="absolute inset-0 bg-neon-green rounded-full"
                                animate={{
                                    scale: [1, 2, 1],
                                    opacity: [1, 0, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                            <div className="relative w-6 h-6 bg-neon-green rounded-full glow-effect" />
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="mt-20 flex justify-center gap-4">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-neon-green/50"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
