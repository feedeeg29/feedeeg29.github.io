import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { MathUtils } from "three";
import type { Group } from "three";

type KnotProps = {
  isDark: boolean;
  calm: boolean;
};

// Nudo toroidal iridiscente que se inclina siguiendo al puntero.
function Knot({ isDark, calm }: KnotProps) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // Puntero normalizado al viewport (funciona aunque haya elementos encima del canvas).
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = MathUtils.clamp((event.clientX / window.innerWidth) * 2 - 1, -1, 1);
      pointer.current.y = MathUtils.clamp((event.clientY / window.innerHeight) * 2 - 1, -1, 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * (calm ? 0.05 : 0.22);
    g.rotation.x = MathUtils.damp(g.rotation.x, 0.35 + pointer.current.y * 0.4, 3, delta);
    g.rotation.z = MathUtils.damp(g.rotation.z, pointer.current.x * -0.25, 3, delta);
  });

  return (
    <Float speed={calm ? 0 : 1.4} rotationIntensity={0.25} floatIntensity={0.7}>
      <group ref={group}>
        <mesh>
          <torusKnotGeometry args={[1, 0.36, 300, 56, 2, 3]} />
          <meshPhysicalMaterial
            color={isDark ? "#e9e1ff" : "#f1ebff"}
            metalness={1}
            roughness={0.16}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[120, 620]}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={isDark ? 1.35 : 1.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

type HeroSceneProps = {
  theme?: "dark" | "light";
};

export default function HeroScene({ theme = "dark" }: HeroSceneProps) {
  const isDark = theme === "dark";
  const calm = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 40 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={isDark ? 0.25 : 0.6} />

      {/* Entorno procedural (sin descargar HDRIs): paneles de luz de colores que se
          reflejan en el metal. Se vuelve a generar al cambiar de tema. */}
      <Environment key={theme} resolution={256} frames={1}>
        <color attach="background" args={[isDark ? "#241a5c" : "#6d4fd6"]} />
        <Lightformer form="rect" intensity={5} color="#c4b5fd" position={[-6, 3, 3]} scale={[7, 5, 1]} />
        <Lightformer form="rect" intensity={4} color="#f472b6" position={[6, -1, 2]} scale={[6, 6, 1]} />
        <Lightformer form="ring" intensity={6} color="#fdba74" position={[0, 6, -3]} scale={5} />
        <Lightformer form="rect" intensity={3} color="#ffffff" position={[0, -5, 4]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={3} color="#a78bfa" position={[0, 1, -7]} scale={[10, 4, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#fdba74" position={[-5, -3, -2]} scale={[5, 3, 1]} />
        <Lightformer form="circle" intensity={3} color="#e9d5ff" position={[4, 5, 3]} scale={3} />
      </Environment>

      <Knot isDark={isDark} calm={calm} />

      <Sparkles
        count={calm ? 20 : 55}
        scale={[7, 7, 3]}
        size={isDark ? 3 : 2.4}
        speed={0.35}
        opacity={isDark ? 0.9 : 0.7}
        color={isDark ? "#f0abfc" : "#6d28d9"}
      />
    </Canvas>
  );
}
