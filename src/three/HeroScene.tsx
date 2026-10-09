import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

type SceneProps = {
  color: string;
  opacity: number;
  calm: boolean;
};

// Poliedro de baja resolución dibujado solo con líneas: discreto, monocromo,
// con una rotación muy lenta y un leve seguimiento del cursor.
function Shape({ color, opacity, calm }: SceneProps) {
  const group = useRef<Group>(null);
  const inner = useRef<Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    const i = inner.current;
    if (!g || !i) return;
    const { x, y } = state.pointer;
    if (!calm) {
      g.rotation.y += delta * 0.07;
      g.rotation.x += delta * 0.03;
      i.rotation.y -= delta * 0.12;
    }
    // Parallax suave hacia el cursor
    g.position.x += (x * 0.25 - g.position.x) * 0.04;
    g.position.y += (y * 0.18 - g.position.y) * 0.04;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.3, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
      </mesh>
      <group ref={inner}>
        <mesh>
          <icosahedronGeometry args={[1.25, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={opacity * 0.9} />
        </mesh>
      </group>
    </group>
  );
}

type HeroSceneProps = {
  theme?: "dark" | "light";
};

export default function HeroScene({ theme = "dark" }: HeroSceneProps) {
  const calm = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isDark = theme === "dark";

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      frameloop={calm ? "demand" : "always"}
    >
      <Shape color={isDark ? "#dd8a62" : "#a2431d"} opacity={isDark ? 0.22 : 0.3} calm={calm} />
    </Canvas>
  );
}
