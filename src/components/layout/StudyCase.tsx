"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function StudyCase() {
    const projects = [
        {
            title: "Refonte pour Nebula Corp",
            description: "Une nouvelle identité visuelle et une expérience utilisateur optimisée.",
            img: "/images/Mockup web ai .png",
            span: "md:col-span-2",
            textOnly: false,
        },
        {
            title: "Project Phoenix",
            description: "+40% Conversion",
            tags: ["Facebook", "Twitter", "Instagram"],
            span: "md:col-span-1",
            textOnly: true,
        },
        {
            title: "E-commerce Platform",
            description: "Plateforme e-commerce sur mesure.",
            img: "/images/Mockup e-commerce-2.png",
            span: "md:col-span-1",
            textOnly: false,
        },
        {
            title: "Design System pour Aura",
            description: "Création d'un système de conception complet pour unifier les produits d'Aura.",
            stats: [
                { label: "Implémenté", icon: "AppWindow" },
                { label: "50ms Page Load", icon: "Timer" },
            ],
            span: "md:col-span-1",
            textOnly: true,
        },
        {
            title: "Mobile App Redesign",
            description: "Modernisation de l'application mobile pour une meilleure expérience.",
            img: "/images/Mockup mobile.png",
            span: "md:col-span-1",
            textOnly: false,
        },
    ];

  return (
        <section className="relative min-h-screen py-12 md:py-24 overflow-hidden flex flex-col justify-center">
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova mb-6">
                        Études de cas / Portfolio
                    </h2>
                </div>
{/* effet a rajouter  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20",
                                project.span
                            )}
                        >
                            {project.textOnly ? (
                                <div className="h-full p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/60 mb-6 text-sm md:text-base">{project.description}</p>

                                        {project.tags && (
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                {project.tags.map((tag, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                        {/* Icons placeholders since we don't have exact icon components for social media in lucide default import */}
                                                        <div className="w-4 h-4 bg-white/50 rounded-full" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {project.stats && (
                                            <div className="flex gap-2 md:gap-4 mt-4 flex-wrap">
                                                {project.stats.map((stat, i) => (
                                                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                                        <div className="w-2 h-2 rounded-full bg-white/50" />
                                                        <span className="text-xs text-white/80">{stat.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {project.tags && (
                                        <div className="flex justify-end">
                                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-0">
                                        <Image
                                            src={project.img || ""}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/80 text-xs md:text-sm line-clamp-2 max-w-[90%]">
                                            {project.description}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 md:mt-16">
                    <button className="relative group px-8 py-3.5 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 100%)',
                            backdropFilter: 'blur(10px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: `
                                0 8px 32px 0 rgba(31, 38, 135, 0.37),
                                inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                                inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
                            `
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                            Voir plus de projets
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </button>
                </div>
    </div>
        </section>
    );
}
