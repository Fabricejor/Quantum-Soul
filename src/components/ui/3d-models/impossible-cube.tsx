'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, PerspectiveCamera, Center, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// Couleur néon cyan
const NEON_COLOR = '#00ffff'

// Fonction utilitaire pour détecter si une couleur est cyan/bleue
function isCyanOrBlue(color: THREE.Color): boolean {
  const r = color.r
  const g = color.g
  const b = color.b
  
  // Cyan : g et b élevés, r faible
  // Bleu : b élevé, r et g faibles
  const isCyan = g > 0.5 && b > 0.5 && r < 0.3
  const isBlue = b > 0.5 && r < 0.3 && g < 0.7
  const isBrightCyan = (g > 0.8 || b > 0.8) && r < 0.2
  
  return isCyan || isBlue || isBrightCyan
}

// Version alternative qui détecte aussi par couleur originale
function ModelWithEdges(props: any) {
  const { scene } = useGLTF('/3d/impossible_cube.glb')
  const groupRef = useRef<THREE.Group>(null)
  
  // Configuration des matériaux
  React.useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh
        const originalMaterial = mesh.material as THREE.MeshStandardMaterial
        
        if (originalMaterial) {
          const matName = originalMaterial.name?.toLowerCase() || ''
          const meshName = mesh.name?.toLowerCase() || ''
          
          // Vérifier le nom du matériau/mesh
          const isNeonByName = 
            matName.includes('edge') || matName.includes('line') || 
            matName.includes('glow') || matName.includes('emission') ||
            matName.includes('neon') || matName.includes('light') ||
            matName.includes('wire') || matName.includes('bright') ||
            meshName.includes('edge') || meshName.includes('line') ||
            meshName.includes('glow') || meshName.includes('neon')
          
          // Vérifier la couleur originale (cyan/bleu = arête)
          let isNeonByColor = false
          if (originalMaterial.color) {
            isNeonByColor = isCyanOrBlue(originalMaterial.color)
          }
          // Vérifier aussi l'émission originale
          if (originalMaterial.emissive && !isNeonByColor) {
            isNeonByColor = isCyanOrBlue(originalMaterial.emissive)
          }
          
          const isNeonPart = isNeonByName || isNeonByColor
          
          if (isNeonPart) {
            // Arêtes néon brillantes - MeshBasicMaterial pour une émission pure
            const neonMat = new THREE.MeshBasicMaterial({
              color: new THREE.Color(NEON_COLOR),
              toneMapped: false, // Crucial pour que le bloom fonctionne
            })
            mesh.material = neonMat
          } else {
            // Corps sombre - noir profond avec légère teinte bleue
            const darkMat = new THREE.MeshStandardMaterial({
              color: new THREE.Color('#08080e'),
              metalness: 0.9,
              roughness: 0.3,
              emissive: new THREE.Color('#000508'),
              emissiveIntensity: 0.05,
            })
            mesh.material = darkMat
          }
        }
      }
    })
  }, [scene])

  // Animation
  useFrame((state, delta) => {
    if (scene) {
      scene.rotation.y += delta * 0.1
      scene.rotation.x += delta * 0.0
    }
  })

  return <primitive ref={groupRef} object={scene} {...props} />
}

export function ImpossibleCubeScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          alpha: true, // Fond transparent
        }}
        style={{ background: 'transparent' }}
      >
        {/* Caméra - éloignée pour voir le cube en entier */}
        <PerspectiveCamera makeDefault position={[0, 0, 180]} fov={45} />
        
        {/* Éclairage minimal pour voir le corps du cube */}
        <ambientLight intensity={0.15} color="#1a1a2e" />
        
        {/* Lumière directionnelle douce pour les reflets sur le corps */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.3} 
          color="#2a2a3e"
        />
        <directionalLight 
          position={[-5, -5, 5]} 
          intensity={0.2} 
          color="#1a1a2e"
        />

        {/* Animation de flottement */}
        <Float 
          speed={1.5} 
          rotationIntensity={0.3} 
          floatIntensity={0.8} 
          floatingRange={[-0.15, 0.15]}
        >
          <Center>
            <ModelWithEdges scale={0.15} />
          </Center>
        </Float>

        {/* Post-processing : Bloom pour l'effet néon */}
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur 
            intensity={1.8}
            radius={0.85}
          />
        </EffectComposer>

        {/* Contrôles pour manipuler l'objet (360 degrés) */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          dampingFactor={0.05}
          enableDamping={true}
          minDistance={100}
          maxDistance={300}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/3d/impossible_cube.glb')
