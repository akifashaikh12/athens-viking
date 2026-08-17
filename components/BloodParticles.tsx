"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BloodParticles({
  position,
}: {
  position: [number, number, number];
}) {
  const count = 45;

  const particles = useMemo(() => {
    return [...Array(count)].map(() => ({
      position: new THREE.Vector3(
        0,
        0,
        0
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        Math.random() * 4,
        (Math.random() - 0.5) * 4
      ),
      life: Math.random(),
    }));
  }, []);

  useFrame((_, delta) => {
    particles.forEach((particle) => {
      particle.position.addScaledVector(
        particle.velocity,
        delta
      );

      particle.velocity.y -= delta * 7;

      particle.life += delta;

      if (particle.life > 1) {
        particle.position.set(0, 0, 0);

        particle.velocity.set(
          (Math.random() - 0.5) * 4,
          Math.random() * 4,
          (Math.random() - 0.5) * 4
        );

        particle.life = 0;
      }
    });
  });

  return (
    <group position={position}>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
          scale={0.035}
        >
          <sphereGeometry args={[1, 6, 6]} />

          <meshBasicMaterial color="#8d1111" />
        </mesh>
      ))}
    </group>
  );
}