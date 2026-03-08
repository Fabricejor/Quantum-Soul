"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { SparklesCore } from "@/components/ui/effects/sparkles";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Projet non trouvé
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesproject"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>

      <div className="relative z-10 mt-20 container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/realisation"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Retour aux réalisations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Cover Image */}
            <div className={`relative w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 ${project.aspectRatio || 'aspect-video'}`}>
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Title & Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-geonova leading-tight">
                {project.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-white/60 font-light">
                {project.subtitle}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Project Link Button */}
              {project.link && (
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Découvrir le projet déployé
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Gallery Column */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Galerie du projet
            </h3>
            
            {project.gallery && project.gallery.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={img.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-white/90 font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
