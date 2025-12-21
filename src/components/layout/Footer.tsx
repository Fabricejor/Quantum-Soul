"use client";

import React from 'react'
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { ArrowRight, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Limitation from './Limitation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Realisation", href: "/realisation" },
        { name: "A propos", href: "/about" },
    ];

    const legalLinks = [
        { name: "Confidentialité", href: "#" },
        { name: "CGU", href: "#" },
        { name: "Sécurité", href: "#" },
    ];

    const socialLinks = [
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
        { icon: Instagram, href: "#" },
    ];

    return (
        <footer className="relative w-full overflow-hidden flex flex-col justify-between bg-background pt-20">

            {/* Top Section: Newsletter & Marquee - Only on Home Page */}
            {isHomePage && (
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center mb-32">
                    <div className="text-center space-y-8 w-full max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-geonova leading-tight">
                            Rejoignez notre newsletter<br />
                            <span className="text-white/60">et participez à l'aventure</span>
                        </h2>

                        <div className="relative w-full max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-white text-black hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="w-full opacity-70 hover:opacity-100 transition-opacity duration-500 pt-8">
                           <Limitation/>
                        </div>
                    </div>
                </div>
            )}

            {/* Sparkles Background Effect */}
            <div className="absolute inset-0 z-0 h-[600px] pointer-events-none">
                <SparklesCore
                    id="tsparticlesfooter"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#00E5FF"
                    speed={0.5}
                />
            </div>

            {/* Planet / Wave Effect + Bottom Content */}
            <div className="relative w-full mt-auto">

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,#00E5FF,transparent_70%)] opacity-50 blur-3xl pointer-events-none z-0" />

                {/* The Wave / Planet Horizon */}
                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] aspect-[2/1] rounded-[50%] border-t border-white/10 bg-black shadow-[0_-20px_50px_-20px_rgba(0,229,255,0.15)] z-10" />

                {/* Footer Content inside the "Planet" */}
                <div className="relative z-20 bg-black pt-32 pb-12 px-4 md:px-8">
                    <div className="container mx-auto flex flex-col items-center gap-12">
                        
                        {/* Logo */}
                        <div className="relative w-32 h-16 md:w-40 md:h-20 opacity-80 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/logo & icons/Logo Q Blanc Icone.png"
                                alt="Quantum Soul Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm md:text-base font-medium text-white/60 hover:text-cyan-400 transition-colors uppercase tracking-wider font-geonova"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Social & Legal */}
                        <div className="flex flex-col items-center gap-8 w-full">
                            {/* Social Icons */}
                            <div className="flex items-center gap-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Legal Links & Copyright */}
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-white/40 border-t border-white/10 pt-8 w-full justify-center">
                                <span>© 2025 Quantum Soul. Tous droits réservés.</span>
                                <div className="flex gap-6">
                                    {legalLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="hover:text-cyan-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
