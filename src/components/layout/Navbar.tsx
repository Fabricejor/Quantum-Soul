"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    // Détecter le scroll pour déclencher l'animation
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && isScrolled) {
            setIsScrolled(false);
        }
    });

    // Liens de navigation
    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Realisation", href: "/realisation" },
        { name: "A propos", href: "/about" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
            {/* Le conteneur nav a pointer-events-auto pour réactiver les clics */}
            <motion.nav
                initial={{
                    width: "98%",
                    borderRadius: "0px",
                    backgroundColor: "rgba(13, 13, 13, 0)", // Transparent au début
                    backdropFilter: "blur(0px) saturate(50%)",
                }}
                animate={{
                    width: isScrolled ? "85%" : "98%", // Se rétracte
                    borderRadius: isScrolled ? "9999px" : "12px", // S'arrondit en mode capsule
                    backgroundColor: isScrolled
                        ? "rgba(20, 20, 20, 0.35)" // Plus transparent pour l'effet liquide
                        : "rgba(13, 13, 13, 0)",
                    backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(0px) saturate(100%)", // Effet glass iOS (blur + saturation)
                    border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
                    boxShadow: isScrolled ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "none", // Ombre portée pour la profondeur
                    paddingTop: isScrolled ? "0.5rem" : "1rem",
                    paddingBottom: isScrolled ? "0.5rem" : "1rem",
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="pointer-events-auto flex items-center justify-between px-4 md:px-8 text-foreground overflow-hidden"
            >
                {/* LOGO (Gauche) */}
                <motion.div
                    className="relative flex items-center justify-center shrink-0"
                    animate={{
                        marginLeft: isScrolled ? "0.5rem" : "0rem"
                    }}
                >
                    <Link href="/" className="relative w-32 h-12 block">
                        {/* Utilisation du logo BLANC car le fond est noir (#0D0D0D) */}
                        <Image
                            src="/images/logo & icons/QS ID Noir Background Transparent.png"
                            alt="Quantum Soul Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* LIENS (Centre) */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider font-geonova"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* BOUTON (Droite) */}
                <motion.div
                    className="flex items-center shrink-0"
                    animate={{
                        marginRight: isScrolled ? "0.5rem" : "0rem"
                    }}
                >
                    <Link href="/get-started">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_var(--color-primary)]"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.nav>
        </div>
    );
}
