"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] w-full h-full bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Rotating Container for Images */}
            <motion.div
                className="absolute flex flex-col items-center justify-center gap-20 md:gap-28"
                animate={{ rotate: 180 }}
                transition={{ duration: 4, ease: "linear" }}
            >
                {/* Image du haut (Endroit) */}
                <div className="relative w-80 h-80 md:w-[350px] md:h-[350px]">
                    <Image
                        src="/images/logo & icons/compteur.png"
                        alt="Compteur Haut"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>

                {/* Image du bas (Envers) */}
                <div className="relative w-80 h-80 md:w-[350px] md:h-[350px] rotate-180">
                    <Image
                        src="/images/logo & icons/compteur.png"
                        alt="Compteur Bas"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>
            </motion.div>

            {/* Texte Central - Statique */}
            <h1 className="z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white font-geonova tracking-wider uppercase animate-pulse text-center pointer-events-none">
                Quantum Soul
            </h1>
        </motion.div>
    );
}
