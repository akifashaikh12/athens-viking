"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Tree({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const leaves = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!leaves.current) return;

    const t = clock.getElapsedTime();

    leaves.current.rotation.z =
      Math.sin(t * 1.2 + position[0]) * 0.025;
  });

  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.25, 0.4, 4, 8]} />
        <meshStandardMaterial color="#493526" />
      </mesh>

      <group ref={leaves} position={[0, 3, 0]}>
        <mesh>
          <coneGeometry args={[2, 4, 8]} />
          <meshStandardMaterial color="#29452d" />
        </mesh>

        <mesh position={[0, 1.4, 0]}>
          <coneGeometry args={[1.6, 3, 8]} />
          <meshStandardMaterial color="#355a37" />
        </mesh>

        <mesh position={[0, 2.5, 0]}>
          <coneGeometry args={[1.1, 2.3, 8]} />
          <meshStandardMaterial color="#456c42" />
        </mesh>
      </group>
    </group>
  );
}

function Clouds() {
  const cloud = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!cloud.current) return;

    cloud.current.position.x += delta * 0.5;

    if (cloud.current.position.x > 35) {
      cloud.current.position.x = -35;
    }
  });

  return (
    <group ref={cloud} position={[-20, 14, -30]}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[
            i * 2.5,
            Math.sin(i) * 0.5,
            Math.cos(i) * 2,
          ]}
        >
          <sphereGeometry args={[2.5, 16, 16]} />
          <meshStandardMaterial
            color="#f2eee4"
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

function Mountains() {
  return (
    <group position={[0, -1, -45]}>
      {[...Array(9)].map((_, i) => (
        <mesh
          key={i}
          position={[(i - 4) * 9, 6, Math.sin(i) * 3]}
          rotation={[0, 0, Math.random() * 0.1]}
        >
          <coneGeometry
            args={[
              8 + Math.random() * 5,
              18 + Math.random() * 8,
              5,
            ]}
          />

          <meshStandardMaterial
            color="#35423d"
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Environment() {
  const trees = useMemo(() => {
    return [...Array(35)].map((_, i) => ({
      x: (Math.random() - 0.5) * 45,
      z: Math.random() * 25 - 15,
      scale: 0.7 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <group>
      {trees.map((tree, i) => (
        <Tree
          key={i}
          position={[tree.x, 0, tree.z]}
          scale={tree.scale}
        />
      ))}

      <Clouds />
      <Mountains />
    </group>
  );
}