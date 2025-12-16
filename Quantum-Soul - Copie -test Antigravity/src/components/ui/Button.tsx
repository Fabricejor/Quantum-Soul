"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "holographic";
    children: React.ReactNode;
    className?: string;
}

export const Button = ({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        if (props.onClick) {
            props.onClick(e);
        }
    };

    const variants = {
        primary: "bg-neon-green/10 text-neon-green border border-neon-green shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:bg-neon-green/20 hover:shadow-[0_0_30px_rgba(0,255,65,0.5),0_0_60px_rgba(0,255,65,0.3)]",
        secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:text-neon-green hover:border-neon-green/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]",
        outline: "bg-transparent text-white border border-white/20 hover:border-neon-green hover:text-neon-green hover:bg-neon-green/5 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]",
        holographic: "holographic-border bg-black text-white hover:text-neon-green glow-effect"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group",
                variants[variant],
                className
            )}
            {...props}
            onClick={handleClick}
        >
            {/* Ripple Effect */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-neon-green/30 animate-ping"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 10,
                        height: 10,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />

            {/* Particle Trail on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-green rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: "50%",
                        }}
                        animate={{
                            y: [-10, 10],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>
        </motion.button>
    );
};
