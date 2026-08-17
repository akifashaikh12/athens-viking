"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Column({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.55, 6, 20]} />
        <meshStandardMaterial
          color="#c7b99c"
          roughness={0.9}
        />
      </mesh>

      <mesh position={[0, 3.15, 0]}>
        <boxGeometry args={[1.5, 0.35, 1.5]} />
        <meshStandardMaterial color="#a99a7c" />
      </mesh>

      <mesh position={[0, -3.1, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 0.3, 20]} />
        <meshStandardMaterial color="#9e9075" />
      </mesh>
    </group>
  );
}

function Temple() {
  const columns = useMemo(() => {
    const result: [number, number, number][] = [];

    for (let x = -8; x <= 8; x += 4) {
      result.push([x, 3, -4]);
      result.push([x, 3, 4]);
    }

    for (let z = -4; z <= 4; z += 4) {
      result.push([-8, 3, z]);
      result.push([8, 3, z]);
    }

    return result;
  }, []);

  return (
    <group>
      {columns.map((position, index) => (
        <Column key={index} position={position} />
      ))}

      <mesh position={[0, 6.4, 0]} castShadow>
        <boxGeometry args={[18, 0.8, 10]} />
        <meshStandardMaterial
          color="#d4c6a7"
          roughness={0.85}
        />
      </mesh>

      <mesh position={[0, 7.2, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[10, 3, 4]} />
        <meshStandardMaterial
          color="#b7a98c"
          roughness={0.9}
        />
      </mesh>
    </group>
  );
}

function FloatingDust() {
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);

    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = Math.random() * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    return positions;
  }, []);

  const points = useMemo(() => {
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particles, 3)
    );

    return geometry;
  }, [particles]);

  useFrame((_, delta) => {
    const position =
      points.attributes.position.array as Float32Array;

    for (let i = 0; i < 500; i++) {
      position[i * 3 + 1] += delta * 0.12;

      if (position[i * 3 + 1] > 15) {
        position[i * 3 + 1] = 0;
      }
    }

    points.attributes.position.needsUpdate = true;
  });

  return (
    <points geometry={points}>
      <pointsMaterial
        color="#e7d8b8"
        size={0.035}
        transparent
        opacity={0.45}
      />
    </points>
  );
}

export default function Architecture() {
  return (
    <group>
      <Temple />
      <FloatingDust />
    </group>
  );
}