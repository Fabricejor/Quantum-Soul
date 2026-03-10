"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Linkedin, Globe } from "lucide-react";
import Image from "next/image";

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
    const [autoplay, setAutoplay] = useState(true);

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
        <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-geonova">
                    Notre Équipe
                </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Image Section */}
                    <div className="relative h-96 w-full flex items-center justify-center">
                        <div className="relative h-full w-full max-w-[350px]">
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
                                        className="absolute inset-0 origin-bottom"
                                    >
                                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl ">
                                            <Image
                                                src={member.src}
                                                alt={member.name}
                                                fill
                                                draggable={false}
                                                className="object-cover object-center"
                                            />
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
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2 font-geonova">
                                        {teamMembers[active].name}
                                    </h3>
                                    <p className="text-lg text-neutral-400 font-medium">
                                        {teamMembers[active].designation}
                                    </p>
                                </div>

                                <p className="text-lg text-neutral-300 leading-relaxed italic">
                                    &ldquo;{teamMembers[active].quote}&rdquo;
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {teamMembers[active].portfolio && (
                                        <a
                                            href={teamMembers[active].portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity"
                                        >
                                            <Globe className="w-4 h-4" />
                                            Portfolio
                                        </a>
                                    )}
                                    {teamMembers[active].linkedin && (
                                        <a
                                            href={teamMembers[active].linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            LinkedIn
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex gap-4 pt-12">
                            <button
                                onClick={handlePrev}
                                className="group flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Previous member"
                            >
                                <ArrowLeft className="h-6 w-6 text-black dark:text-white transition-transform group-hover:-translate-x-1" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Next member"
                            >
                                <ArrowRight className="h-6 w-6 text-black dark:text-white transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
