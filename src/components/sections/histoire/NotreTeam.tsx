"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Linkedin, Globe } from "lucide-react";
import Image from "next/image";
import { GlassButton } from "@/components/apple-tahoe-liquid-glass-button";

type TeamMember = {
    name: string;
    designation: string;
    quote: string;
    src: string;
    linkedin?: string;
    portfolio?: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Fabrice Ramos",
        designation: "Développeur Fullstack & AI Enthusiast",
        quote:
            "Passionné par l'intersection entre le développement web moderne et l'intelligence artificielle. Mon objectif est de créer des expériences numériques qui repoussent les limites de l'innovation.",
        src: "/images/Teams/Ramos.jpg",
        linkedin: "https://www.linkedin.com/in/fabrice-ramos-4517831bb/",
        portfolio: "https://fabricejor-dev-portfolio.vercel.app",
    },
    {
        name: "Serigne Falilou Mbacké Cissé",
        designation: "Senior Software Developer | Problem Solver | AI & DevOps Enthusiast",
        quote:
            "Résoudre des problèmes complexes par des solutions logicielles élégantes et robustes. L'automatisation et l'IA sont au cœur de ma démarche pour optimiser les processus et créer de la valeur.",
        src: "/images/Teams/Fallilou.jpg",
        linkedin: "https://www.linkedin.com/in/serigne-falilou-m-backé-cisse-0810081a3/",
    },
    {
        name: "Mandiaye Kébé",
        designation: "Ingénieur, Développeur Fullstack & Tech Lead",
        quote:
            "Guider les équipes techniques vers l'excellence. Je combine expertise technique et leadership pour transformer des visions ambitieuses en produits logiciels performants et évolutifs.",
        src: "/images/Teams/Mandiaye.jpg",
        portfolio: "https://portfolio-beta-teal-27.vercel.app",
        linkedin: "https://www.linkedin.com/in/mandiaye-kebe-8b19bb1b6/",
    },
    {
        name: "Ibrahima Sory Sané",
        designation: "Full-Stack Software Engineer | Data & AI",
        quote:
            "L'ingénierie logicielle au service de la donnée. Je conçois des architectures complètes qui permettent d'exploiter tout le potentiel de l'IA pour des prises de décision éclairées.",
        src: "/images/Teams/Ibrahima.jpg",
        linkedin: "https://www.linkedin.com/in/ibrahima-sory-sane/",
        portfolio: "https://ibrahimasane.vercel.app",
    },
    {
        name: "Falilou Tine",
        designation: "Statisticien et Informaticien du Décisionnel",
        quote:
            "Transformer les données brutes en insights stratégiques. Mon expertise en statistiques et en informatique décisionnelle aide les entreprises à naviguer dans la complexité de leurs données.",
        src: "/images/Teams/Tine.jpg",
        linkedin: "https://www.linkedin.com/in/falilou-tine/",
    },
];

export default function NotreTeam() {
    const [active, setActive] = useState(0);
    const [autoplay] = useState(true);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % teamMembers.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(handleNext, 10000);
        return () => clearInterval(interval);
    }, [autoplay, handleNext]);

    const isActive = (index: number) => index === active;

    const randomRotate = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
            {/* Decorative background glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-geonova">
                    Notre Équipe
                </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Image Section */}
                    <div className="relative h-96 w-full flex items-center justify-center">
                        {/* Glow behind cards */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />
                        <div className="relative h-full w-full max-w-[300px]">
                            <AnimatePresence>
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotate(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.9,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotate(),
                                            zIndex: isActive(index)
                                                ? 999
                                                : teamMembers.length + 2 - index,
                                            y: isActive(index) ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotate(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 origin-bottom flex items-center justify-center"
                                    >
                                        <div className="relative w-[260px] h-[340px] rounded-[2rem] p-3 bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
                                            {/* Glow inside card */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none" />
                                            
                                            {/* Image frame */}
                                            <div className="relative flex-1 w-full rounded-2xl overflow-hidden shadow-inner">
                                                <Image
                                                    src={member.src}
                                                    alt={member.name}
                                                    fill
                                                    draggable={false}
                                                    className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            
                                            {/* Polaroid/Card Footer */}
                                            <div className="mt-3 flex items-center justify-between px-2">
                                                <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium font-sans">QS Team</span>
                                                <span className="text-[10px] text-cyan-400 font-mono">0{index + 1}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-geonova tracking-tight">
                                        {teamMembers[active].name}
                                    </h3>
                                    <p className="text-sm md:text-base text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                        {teamMembers[active].designation}
                                    </p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -top-8 -left-4 text-7xl text-white/5 font-serif pointer-events-none select-none">“</span>
                                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light italic relative z-10">
                                        &ldquo;{teamMembers[active].quote}&rdquo;
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {teamMembers[active].portfolio && (
                                        <a
                                            href={teamMembers[active].portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GlassButton className="text-white text-sm font-semibold group flex items-center gap-2">
                                                <Globe className="w-4 h-4 text-white/70 group-hover:rotate-12 transition-transform" />
                                                Portfolio
                                            </GlassButton>
                                        </a>
                                    )}
                                    {teamMembers[active].linkedin && (
                                        <a
                                            href={teamMembers[active].linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GlassButton className="text-white text-sm font-semibold group flex items-center gap-2">
                                                <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                                                LinkedIn
                                            </GlassButton>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex gap-4 pt-12">
                            <GlassButton
                                onClick={handlePrev}
                                size="icon"
                                aria-label="Previous member"
                                className="text-white group rounded-full"
                            >
                                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            </GlassButton>
                            <GlassButton
                                onClick={handleNext}
                                size="icon"
                                aria-label="Next member"
                                className="text-white group rounded-full"
                            >
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </GlassButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
