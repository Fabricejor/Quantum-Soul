"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error maath types are not fully compatible
import * as random from "maath/random/dist/maath-random.esm";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.8 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff41"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

/* Nebula Clouds */
function Nebula() {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 2.5 }));

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime / 30;
            ref.current.rotation.y = state.clock.elapsedTime / 40;
        }
    });

    return (
        <group ref={ref}>
            <Points positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00ff88"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.15}
                    blending={2} // AdditiveBlending
                />
            </Points>
        </group>
    );
}

/* Shooting Stars */
function ShootingStars() {
    return (
        <>
            {[...Array(3)].map((_, i) => (
                <ShootingStar key={i} delay={i * 3} />
            ))}
        </>
    );
}

function ShootingStar({ delay }: { delay: number }) {
    const ref = useRef<any>(null);

    useFrame((state) => {
        if (ref.current) {
            const time = (state.clock.elapsedTime + delay) % 6;
            if (time < 1) {
                ref.current.position.x = -2 + time * 4;
                ref.current.position.y = 1 - time * 2;
                ref.current.position.z = -1;
                ref.current.material.opacity = time < 0.5 ? time * 2 : (1 - time) * 2;
            } else {
                ref.current.material.opacity = 0;
            }
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial color="#00ffcc" transparent />
        </mesh>
    );
}

export const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                    <Nebula />
                    <ShootingStars />
                </Suspense>
            </Canvas>
        </div>
    );
};
