"use client";

import Link from "next/link";
import { Zap, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-neon-green/20 pt-20 pb-10 relative overflow-hidden">
            {/* Grid Background with Fade */}
            <div className="absolute inset-0 grid-pattern opacity-5" />

            {/* Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-green/5 blur-[100px] rounded-full" />

            {/* Scan Lines */}
            <div className="absolute inset-0 scan-lines opacity-30" />

            {/* Wave Separator */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-neon-green to-transparent"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <motion.div
                                className="relative w-10 h-10 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Zap className="w-7 h-7 text-neon-green group-hover:text-white transition-colors duration-300" />
                                <div className="absolute inset-0 bg-neon-green/20 blur-lg rounded-full group-hover:bg-white/20 transition-colors duration-300 glow-effect" />
                            </motion.div>
                            <span className="text-xl font-bold tracking-wider font-orbitron">
                                QUANTUM <span className="text-neon-green group-hover:text-white transition-colors text-glow">SOUL</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            Redéfinir les standards du web avec une approche quantique. Performance, design et innovation.
                        </p>

                        {/* Tech Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="text-xs text-neon-green font-mono">Powered by AI</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-orbitron font-bold mb-6 text-lg text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-neon-green" />
                            Navigation
                        </h4>
                        <ul className="space-y-4 text-gray-400">
                            {["Solutions", "Vision", "Technologie", "Projets"].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-neon-green transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-neon-green group-hover:w-4 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-orbitron font-bold mb-6 text-lg text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-neon-green" />
                            Légal
                        </h4>
                        <ul className="space-y-4 text-gray-400">
                            {["Mentions légales", "Confidentialité", "CGV", "Contact"].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href="#"
                                        className="hover:text-neon-green transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-neon-green group-hover:w-4 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <motion.p
                        className="text-gray-500 text-sm font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        © {currentYear} Quantum Soul. Tous droits réservés.
                    </motion.p>

                    {/* Social Icons with 3D Flip */}
                    <div className="flex items-center gap-4">
                        {[
                            { Icon: Github, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Linkedin, href: "#" },
                            { Icon: Instagram, href: "#" },
                        ].map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300 relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    rotateY: 360,
                                    scale: 1.1,
                                }}
                            >
                                <Icon className="w-5 h-5 relative z-10" />
                                <div className="absolute inset-0 rounded-full glow-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-neon-green/10 rounded-full" />
                <div className="absolute top-4 right-4 w-12 h-12 border border-neon-green/10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
            </div>
        </footer>
    );
};
