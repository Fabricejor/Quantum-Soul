"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticlesCardProps {
  title: string;
  coverImage: string;
  content: string;
  link: string;
  className?: string;
}

export default function ArticlesCard({
  title,
  coverImage,
  content,
  link,
  className,
}: ArticlesCardProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:gap-8", className)}>
      {/* Cover Image */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-geonova leading-tight">
          {title}
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors group"
        >
          Voir l'article complet
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
