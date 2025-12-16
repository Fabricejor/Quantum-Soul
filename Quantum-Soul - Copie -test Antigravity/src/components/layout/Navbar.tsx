"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Solutions", href: "#solutions" },
        { name: "Vision", href: "#vision" },
        { name: "Technologie", href: "#tech" },
        { name: "Projets", href: "#portfolio" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass-panel-strong border-b border-neon-green/20 shadow-[0_0_30px_rgba(0,255,65,0.1)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                {/* Logo with Animation */}
                <Link href="/" className="flex items-center gap-2 group relative z-10">
                    <motion.div
                        className="relative w-10 h-10 flex items-center justify-center"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Zap className="w-7 h-7 text-neon-green group-hover:text-white transition-colors duration-300" />
                        <motion.div
                            className="absolute inset-0 bg-neon-green/20 blur-lg rounded-full group-hover:bg-white/20 transition-colors duration-300"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>
                    <span className="text-xl font-bold tracking-wider font-orbitron">
                        QUANTUM <span className="text-neon-green group-hover:text-white transition-colors text-glow">SOUL</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-sm uppercase tracking-widest hover:text-neon-green transition-colors relative group py-2"
                            >
                                {link.name}

                                {/* Active Indicator with Glow */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-green transition-all duration-300 group-hover:w-full glow-effect" />

                                {/* Hover Particles */}
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <motion.span
                                        className="block w-1 h-1 bg-neon-green rounded-full"
                                        animate={{
                                            y: [-5, -15],
                                            opacity: [1, 0],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                        }}
                                    />
                                </span>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="holographic" className="ml-4">
                            Contact
                        </Button>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-white hover:text-neon-green transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu with Stagger Animation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel-strong backdrop-blur-xl border-b border-neon-green/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium hover:text-neon-green transition-colors flex items-center gap-2 group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-neon-green/50 group-hover:bg-neon-green transition-colors" />
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                            >
                                <Button className="w-full" variant="holographic">Contact</Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Border Glow */}
            {isScrolled && (
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-green to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.nav>
    );
};
