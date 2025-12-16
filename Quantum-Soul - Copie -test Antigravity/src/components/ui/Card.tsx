"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    glowEffect?: boolean;
}

export const Card = ({
    children,
    className,
    hoverEffect = true,
    glowEffect = false
}: CardProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? {
                y: -10,
                boxShadow: "0 0 25px rgba(0, 255, 65, 0.3), 0 0 50px rgba(0, 255, 65, 0.1)"
            } : {}}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            className={cn(
                "glass-panel-strong p-6 rounded-xl relative overflow-hidden transition-all duration-300 border border-white/10",
                glowEffect && "glow-effect",
                className
            )}
            style={{
                transform: isHovering && hoverEffect
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 30}deg) rotateY(${(mousePosition.x - 150) / 30}deg)`
                    : "none",
                transition: "transform 0.1s ease-out",
            }}
        >
            {/* Holographic Shimmer */}
            <div className="absolute inset-0 holographic-shimmer opacity-50" />

            {/* Inner Glow */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 65, 0.1) 0%, transparent 50%)`,
                }}
            />

            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-green/20 via-neon-green-light/20 to-neon-green-cyan/20 blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-green/20 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-green/20 rounded-br-xl" />
        </motion.div>
    );
};
