"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Shader de sommet (Vertex Shader) : Gère la position des points de la géométrie
// Ici, c'est un shader très simple qui projette juste un plan face à la caméra
const vertexShader = `
varying vec2 vUv; // Variable pour passer les coordonnées UV au fragment shader
uniform float time; // Temps global
uniform vec4 resolution; // Résolution de l'écran

void main() {
    vUv = uv; // On passe les UV tels quels
    // Position standard pour un plan plein écran ou une géométrie 2D
    gl_Position = vec4(position, 1.0); 
}
`;

// Shader de fragment (Fragment Shader) : C'est ici que la magie opère pour le rendu visuel
// Calcule la couleur de chaque pixel
const fragmentShader = `
precision highp float; // Haute précision pour éviter les artefacts graphiques
varying vec2 vUv; // Coordonnées UV reçues du vertex shader
uniform float time; // Le temps qui passe (pour l'animation)
uniform vec4 resolution; // Résolution et aspect ratio

// Fonction utilitaire pour effectuer une rotation d'un point en 3D
// v : le point à tourner
// axis : l'axe de rotation
// angle : l'angle de rotation
vec3 rotate(vec3 v, vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    // Matrice de rotation 3D standard
    mat4 m = mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                  oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                  oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                  0.0,                                0.0,                                0.0,                                1.0);
    return (m * vec4(v, 1.0)).xyz;
}

// Smooth Minimum (smin) : La clé de l'effet "liquide"
// Au lieu d'une union dure entre deux formes (min(a,b)), on fait une union douce
// cela crée cet effet de fusion entre les blobs quand ils sont proches.
// k : contrôle la distance de fusion (plus k est grand, plus ça fusionne de loin)
float smin( float a, float b, float k ) {
    k *= 6.0;
    float h = max( k-abs(a-b), 0.0 )/k;
    return min(a,b) - h*h*h*k*(1.0/6.0);
}

// Fonction de distance signée (SDF) pour une sphère
// p : position du point qu'on teste
// r : rayon de la sphère
// Retourne la distance entre le point et la surface de la sphère
float sphereSDF(vec3 p, float r) {
    return length(p) - r;
}

// La scène complète définie par des fonctions de distance (SDF)
// C'est ici qu'on définit formes, positions et mouvements
float sdf(vec3 p) {
    // On crée 4 copies de l'espace (p1, p2, p3, p4) qui tournent dans des directions différentes
    // Cela donne l'impression que les blobs bougent de manière complexe et organique
    vec3 p1 = rotate(p, vec3(0.0, 0.0, 1.0), time/5.0); // Rotation axe Z
    vec3 p2 = rotate(p, vec3(1.), -time/5.0);           // Rotation axe diagonal
    vec3 p3 = rotate(p, vec3(1., 1., 0.), -time/4.5);   // Autre axe diagonal
    vec3 p4 = rotate(p, vec3(0., 1., 0.), -time/4.0);   // Rotation axe Y
    
    // Création et fusion des sphères (blobs)
    // 1. Sphère principale
    float final = sphereSDF(p1 - vec3(-0.5, 0.0, 0.0), 0.35);
    
    // 2. Sphère secondaire
    float nextSphere = sphereSDF(p2 - vec3(0.55, 0.0, 0.0), 0.3);
    final = smin(final, nextSphere, 0.1); // Fusion douce avec la précédente
    
    // 3. Troisième sphère
    nextSphere = sphereSDF(p2 - vec3(-0.8, 0.0, 0.0), 0.2);
    final = smin(final, nextSphere, 0.1); // Fusion douce
    
    // 4. Quatrième sphère
    nextSphere = sphereSDF(p3 - vec3(1.0, 0.0, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1); // Fusion douce
    
    // 5. Cinquième sphère
    nextSphere = sphereSDF(p4 - vec3(0.45, -0.45, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1); // Fusion douce
    
    return final;
}

// Calcul des normales : essentiel pour l'éclairage
// On regarde comment la distance change très légèrement autour d'un point pour déduire l'orientation de la surface
vec3 getNormal(vec3 p) {
    float d = 0.001; // Petit décalage (epsilon)
    return normalize(vec3(
        sdf(p + vec3(d, 0.0, 0.0)) - sdf(p - vec3(d, 0.0, 0.0)),
        sdf(p + vec3(0.0, d, 0.0)) - sdf(p - vec3(0.0, d, 0.0)),
        sdf(p + vec3(0.0, 0.0, d)) - sdf(p - vec3(0.0, 0.0, d))
    ));
}

// Raymarching : Lancer de rayon
// On avance pas à pas le long du rayon de vision jusqu'à toucher une surface (distance < 0.001)
// ou partir trop loin (t > 100.0)
float rayMarch(vec3 rayOrigin, vec3 ray) {
    float t = 0.0; // Distance parcourue
    for (int i = 0; i < 100; i++) { // Max 100 pas pour la performance
        vec3 p = rayOrigin + ray * t;
        float d = sdf(p); // Distance à la surface la plus proche
        if (d < 0.001) return t; // On a touché !
        t += d; // On avance de la distance sûre (Sphere Tracing)
        if (t > 100.0) break; // Trop loin, on arrête
    }
    return -1.0; // Rien touché
}

void main() {
    // Correction du ratio d'aspect pour que les sphères restent rondes peu importe la taille de l'écran
    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
    
    // Configuration de la caméra virtuelle
    vec3 cameraPos = vec3(0.0, 0.0, 5.0); // Caméra reculée de 5 unités en Z
    // Rayon part de la caméra vers le pixel de l'écran
    vec3 ray = normalize(vec3((vUv - vec2(0.5)) * resolution.zw, -1));
    
    // Lancer le Raymarch
    float t = rayMarch(cameraPos, ray);
    
    if (t > 0.0) {
        // Si on touche un objet (blob)
        vec3 p = cameraPos + ray * t; // Point d'impact exact
        vec3 normal = getNormal(p);   // Orientation de la surface à ce point
        
        // Effet Fresnel : Crée cet aspect "contour brillant" ou "verre"
        // Plus on regarde le bord de l'objet, plus c'est intense
        float fresnel = pow(1.0 + dot(ray, normal), 3.0);
        
        // COULEUR DU BLOB (INVERSÉE)
        // Original : vec3(fresnel) -> Bords blancs, centre sombre
        // Inversé : vec3(1.0 - fresnel) -> Centre blanc, bords sombres (aspect solide lumineux)
        // Changez cette ligne pour modifier la couleur des blobs
        vec3 color = vec3(1.0 - fresnel);
        
        gl_FragColor = vec4(color, 1.0);
    } else {
        // COULEUR DE FOND (INVERSÉE)
        // Si le rayon ne touche rien, on affiche le fond
        // vec4(0.0, 0.0, 0.0, 1.0) = Noir
        // vec4(1.0, 1.0, 1.0, 1.0) = Blanc
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); 
    }
}
`;

function LavaLampShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  
  // Les uniformes sont les variables passées du JS vers le Shader
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() }
  }), []);

  // Gestion du redimensionnement pour éviter les déformations
  React.useEffect(() => {
    const { width, height } = size;
    const imageAspect = 1; // Aspect ratio de base
    let a1, a2;
    
    if (height / width > imageAspect) {
      a1 = (width / height) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (height / width) / imageAspect;
    }
    
    // On passe la taille et les ratios de correction au shader
    uniforms.resolution.value.set(width, height, a1, a2);
  }, [size, uniforms]);

  // Boucle d'animation : met à jour le temps à chaque frame
  useFrame((state) => {
    if (meshRef.current) {
      uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export const LavaLamp = ({ children }: { children?: React.ReactNode }) => {
  return (
    // Conteneur principal
    // Vous pouvez changer background: '#000' ici si le canvas n'est pas opaque
    <div style={{ width: '100%', height: '100%', background: '#000', position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas
          camera={{
            left: -0.5, right: 0.5, top: 0.5, bottom: -0.5,
            near: -1000, far: 1000,
            position: [0, 0, 2]
          }}
          orthographic // Caméra orthographique pour éviter la perspective sur le plan 2D
          gl={{ antialias: true }}
        >
          <LavaLampShader />
        </Canvas>
      </div>
      
      {/* Contenu enfant (texte, boutons...) affiché par dessus l'effet */}
      {children && (
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full mix-blend-difference pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}
