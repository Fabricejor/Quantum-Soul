"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 180 + Math.random() * 40, // Cyan/Blue range (180-220)
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
} as const;

export function BeamsBackground({
    className,
    intensity = "strong",
    children,
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<ReturnType<typeof requestAnimationFrame>>(0);
    const MINIMUM_BEAMS = 15; // Reduced slightly for performance

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: hinting we might not need alpha on the context itself if full screen
        if (!ctx) return;

        const updateCanvasSize = () => {
            // PERFORMANCE FIX: Force DPR to 1. 
            // High DPI rendering is unnecessary for a blurred background and kills FPS.
            const dpr = 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        
        // Debounce resize
        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateCanvasSize, 200);
        };
        
        window.addEventListener("resize", handleResize);

        function resetBeam(beam: Beam, index: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100; // Largeur du rayon (min 100, + max 100 aléatoire)
            beam.speed = 0.5 + Math.random() * 0.4; // Vitesse de déplacement vertical
            beam.hue = 180 + Math.random() * 40; // Cyan/Blue range constant
            beam.opacity = 0.2 + Math.random() * 0.1; // Opacité de base
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180); // Rotation du rayon

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            
            // Utilisation de la saturation (90%) et luminosité (60%) pour une couleur cyan visible
            gradient.addColorStop(0, `hsla(${beam.hue}, 90%, 60%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(
                0.4,
                `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.6,
                `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 90%, 60%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            // PERFORMANCE FIX: Removed ctx.filter = "blur(35px)"
            // Using CSS filter instead
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ 
                    filter: "blur(40px)", // Increased CSS blur to replace canvas blur
                    opacity: 0.6 
                }}
            />

            {/* Static overlay instead of motion.div to save CPU */}
            <div
                className="absolute inset-0 bg-neutral-950/5"
                style={{
                    backdropFilter: "blur(20px)",
                }}
            />
            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
}
