"use client";

import { Card } from "@/components/ui/Card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sophie Martin",
        role: "CEO, TechFlow",
        content: "Quantum Soul a révolutionné notre approche client. L'IA est devenue notre meilleur atout.",
        rating: 5,
    },
    {
        name: "Thomas Dubois",
        role: "CTO, DataCorp",
        content: "Une expertise technique impressionnante et une vision futuriste qui nous a séduits.",
        rating: 5,
    },
    {
        name: "Elena Rossi",
        role: "Marketing Dir, FutureAds",
        content: "L'automatisation mise en place nous a fait gagner 30% de productivité dès le premier mois.",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <section className="py-32 bg-black/50 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-5" />

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-[100px]" />

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
                            Témoignages
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-orbitron mb-6"
                    >
                        Ils nous font <span className="text-neon-green text-glow">confiance</span>
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="perspective-1000"
                        >
                            <Card className="p-8 border-white/10 bg-black/50 hover:border-neon-green/30 transition-all duration-500 relative h-full group">
                                {/* Quote Icon */}
                                <Quote className="absolute top-6 right-6 w-12 h-12 text-neon-green/10 group-hover:text-neon-green/20 transition-colors" />

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + i * 0.1 }}
                                        >
                                            <Star className="w-4 h-4 fill-neon-green text-neon-green" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 mb-6 italic relative z-10 leading-relaxed">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar with Glow */}
                                    <motion.div
                                        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-black flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="absolute inset-0 rounded-full glow-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-white font-bold text-lg relative z-10">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </motion.div>

                                    {/* Info */}
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-neon-green transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-neon-green/70 font-mono">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Indicator */}
                                <motion.div
                                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-neon-green"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.3,
                                    }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Connection Lines SVG */}
                <svg className="absolute top-1/2 left-0 right-0 h-px pointer-events-none opacity-20">
                    <motion.line
                        x1="20%" y1="0" x2="80%" y2="0"
                        stroke="rgba(0, 255, 65, 0.5)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    />
                </svg>

                {/* Partner Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            className="h-8 w-32 bg-white/20 rounded relative overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
