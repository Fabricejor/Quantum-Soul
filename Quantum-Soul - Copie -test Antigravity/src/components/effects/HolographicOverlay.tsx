"use client";

import { motion } from "framer-motion";

export const HolographicOverlay = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Gradient Overlay */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(
                            45deg,
                            transparent 0%,
                            rgba(0, 255, 65, 0.03) 25%,
                            rgba(0, 255, 136, 0.05) 50%,
                            rgba(0, 255, 204, 0.03) 75%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Scan Lines */}
            <motion.div
                className="absolute inset-0 scan-lines"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Horizontal Scan Bar */}
            <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"
                style={{
                    boxShadow: "0 0 20px rgba(0, 255, 65, 0.5)",
                }}
                animate={{
                    top: ["0%", "100%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Chromatic Aberration Effect */}
            <div className="absolute inset-0 mix-blend-screen opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.2) 0%, transparent 70%)",
                        filter: "blur(40px)",
                    }}
                />
            </div>

            {/* Floating Holographic Particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-neon-green"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: "0 0 10px rgba(0, 255, 65, 0.8)",
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green/30" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-green/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-green/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-green/30" />
        </div>
    );
};
