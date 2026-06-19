"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { LimelightNav } from "@/components/ui/docks/limelight-nav";
import { GlassButton } from "@/components/ui/button/apple-tahoe-liquid-glass-button";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

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
        <>
            <style>{`
                .navbar-liquid-active {
                    backdrop-filter: blur(20px) saturate(180%) !important;
                    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
                    background-color: rgba(13, 13, 13, 0.15) !important;
                    box-shadow: 
                        inset 0 0 0 1px rgba(255, 255, 255, 0.08),
                        inset 1.8px 3px 0px -2px rgba(255, 255, 255, 0.7), 
                        inset -2px -2px 0px -2px rgba(255, 255, 255, 0.6), 
                        inset -3px -8px 1px -6px rgba(255, 255, 255, 0.4), 
                        inset -0.3px -1px 4px 0px rgba(0, 0, 0, 0.2), 
                        inset -1.5px 2.5px 0px -2px rgba(0, 0, 0, 0.4), 
                        inset 0px 3px 4px -2px rgba(0, 0, 0, 0.4), 
                        inset 2px -6.5px 1px -4px rgba(0, 0, 0, 0.2), 
                        0px 2px 10px 0px rgba(0, 0, 0, 0.3), 
                        0px 10px 30px 0px rgba(0, 0, 0, 0.25) !important;
                    transition: backdrop-filter 300ms ease, background-color 300ms ease, box-shadow 300ms ease;
                }
                .navbar-liquid-inactive {
                    transition: backdrop-filter 300ms ease, background-color 300ms ease, box-shadow 300ms ease;
                }
            `}</style>

            {/* Desktop Navbar */}
            <div className="hidden md:flex fixed top-0 left-0 right-0 z-[5000] justify-center pt-6 pointer-events-none">
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
                    aria-label="Navigation principale"
                    className={`pointer-events-auto flex items-center justify-between px-4 md:px-8 text-foreground overflow-hidden ${isScrolled ? "navbar-liquid-active" : "navbar-liquid-inactive"
                        }`}
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
                                alt="QuantumSoul Logo"
                                fill
                                sizes="128px"
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* LIENS (Centre) */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`text-sm font-medium transition-all duration-300 uppercase tracking-wider font-geonova ${isActive
                                        ? "text-cyan-400 -translate-y-1 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                        : "text-muted-foreground hover:text-primary hover:-translate-y-0.5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* BOUTON (Droite) */}
                    <motion.div
                        className="flex items-center shrink-0"
                        animate={{
                            marginRight: isScrolled ? "0.5rem" : "0rem"
                        }}
                    >
                        <Link href="/get-started">
                            <GlassButton
                                aria-label="Rejoignez-nous"
                                className="text-white text-sm font-semibold"
                            >
                                Rejoignez-nous
                            </GlassButton>
                        </Link>
                    </motion.div>
                </motion.nav>
            </div>

            {/* Mobile Navigation Dock */}
            <LimelightNav />
        </>
    );
}
