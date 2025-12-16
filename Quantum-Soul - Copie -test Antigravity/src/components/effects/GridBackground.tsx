"use client";

import { motion } from "framer-motion";

export const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Perspective Grid */}
            <div className="absolute inset-0" style={{ perspective: "1000px" }}>
                <motion.div
                    className="absolute inset-0 cyber-grid opacity-30"
                    style={{
                        transform: "rotateX(60deg) translateZ(-200px)",
                        transformOrigin: "center bottom",
                    }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"
                        style={{ top: `${i * 5}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>

            {/* Vertical Grid Lines */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-green/20 to-transparent"
                        style={{ left: `${i * 5}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>

            {/* Glowing Intersections */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-neon-green"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            boxShadow: "0 0 20px rgba(0, 255, 65, 0.8)",
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
