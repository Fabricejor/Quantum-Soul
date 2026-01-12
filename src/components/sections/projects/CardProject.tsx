"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface CardProjectProps {
  title: string;
  subtitle: string;
  coverImage: string;
  span?: string;
  rowSpan?: string;
  onClick?: () => void;
}

export default function CardProject({
  title,
  subtitle,
  coverImage,
  span = "md:col-span-1",
  rowSpan,
  onClick,
}: CardProjectProps) {
  return (
    <CardContainer
      containerClassName={cn("w-full h-full !py-0 !flex !items-stretch", span, rowSpan)}
      className="w-full h-full"
    >
      <CardBody className="w-full h-full">
        <div
          className={cn(
            "group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 cursor-pointer w-full h-full",
            span
          )}
          onClick={onClick}
        >
          <CardItem translateZ={20} className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            </div>
          </CardItem>

          <CardItem translateZ={50} className="absolute bottom-0 left-0 right-0 p-6 md:p-8 w-full">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-geonova">
                  {title}
                </h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2">
                  {subtitle}
                </p>
              </div>
              <CardItem translateZ={30} rotateX={5}>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </CardItem>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
