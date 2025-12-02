'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import * as THREE from 'three'

function Model(props: any) {
  const { scene } = useGLTF('/3d/cube_cascade.glb')
  
  // Optional: Traverse to modify materials if needed for neon effect
  // But usually GLB materials should be sufficient if they have emissive properties
  // We can boost emissive intensity here if needed
  React.useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const material = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial
        if (material) {
          // Enable transparency if needed
          material.transparent = true
          // Boost environment map intensity
          material.envMapIntensity = 2
        }
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}

export function PearlElectronScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        
        {/* ECLAIRAGE DE LA SCÈNE (Lumière blanche pour faire briller le modèle) */}
        
        {/* Lumière ambiante douce pour ne pas avoir de zones totalement noires */}
        <ambientLight intensity={1} color="#ffffff" />
        
        {/* Projecteurs principaux (SpotLights) pour créer les reflets brillants */}
        {/* Projecteur 1 : Lumière principale blanche très intense venant d'en haut à droite */}
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} // Intensité augmentée pour plus de brillance
          color="#ffffff" // BLANC PUR
        />
        
        {/* Projecteur 2 : Lumière de contre (Backlight) blanche venant d'en bas à gauche pour le relief */}
        <spotLight 
          position={[-10, -10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={10} // Intensité augmentée
          color="#ffffff" // BLANC PUR
        />
        
        {/* Environment for reflections */}
        <Environment preset="city" />

        <Float 
          speed={1} // Animation speed
          rotationIntensity={1} // XYZ rotation intensity
          floatIntensity={1} // Up/down float intensity
          floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within
        >
          <Model scale={2.5} rotation={[0, -Math.PI / 4, 0]} />
        </Float>

        {/* Post Processing for Glow/Neon */}
        <EffectComposer enableNormalPass>
          <Bloom 
            luminanceThreshold={1} // Threshold to trigger bloom (higher = only bright things glow)
            mipmapBlur // Smooth blur
            intensity={10} // Intensity of the glow
            radius={0.5} // Spread
          />
          <ToneMapping />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/3d/cube_cascade.glb')

