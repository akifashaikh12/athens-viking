"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BloodParticles from "./BloodParticles";

function Warrior({
  enemy = false,
}: {
  enemy?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const sword = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (group.current) {
      group.current.position.y =
        Math.abs(Math.sin(t * 3)) * 0.04;

      group.current.rotation.y =
        Math.sin(t * 2) * 0.08;
    }

    if (sword.current) {
      sword.current.rotation.z =
        Math.sin(t * 4) * 0.7;
    }
  });

  return (
    <group
      ref={group}
      position={enemy ? [3, 0, -6] : [-3, 0, -6]}
    >
      {/* body */}
      <mesh castShadow position={[0, 1.5, 0]}>
        <capsuleGeometry args={[0.55, 1.7, 8, 12]} />

        <meshStandardMaterial
          color={enemy ? "#302823" : "#665540"}
          roughness={0.9}
        />
      </mesh>

      {/* head */}
      <mesh castShadow position={[0, 3, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />

        <meshStandardMaterial
          color="#a8866c"
          roughness={0.9}
        />
      </mesh>

      {/* shield */}
      <mesh
        position={[enemy ? 0.9 : -0.9, 1.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.8, 0.8, 0.18, 24]} />

        <meshStandardMaterial
          color={enemy ? "#5a1515" : "#8d7958"}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* sword */}
      <group
        ref={sword}
        position={[enemy ? -0.9 : 0.9, 2, 0]}
      >
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.18, 2.8, 0.08]} />

          <meshStandardMaterial
            color="#cbd2d5"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      <BloodParticles
        position={[enemy ? -0.5 : 0.5, 2, 0]}
      />
    </group>
  );
}

export default function Warriors() {
  return (
    <group>
      <Warrior />
      <Warrior enemy />
    </group>
  );
}