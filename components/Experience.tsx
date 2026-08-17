"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import World from "./World";

export default function Experience() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#78b5d6"]} />

        <fog
          attach="fog"
          args={["#78b5d6", 20, 90]}
        />

        <PerspectiveCamera
          makeDefault
          position={[0, 6, 24]}
          fov={50}
        />

        <ambientLight intensity={1.4} />

        <directionalLight
          castShadow
          position={[10, 20, 10]}
          intensity={4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <directionalLight
          position={[-10, 8, 5]}
          intensity={1}
        />

        <Suspense fallback={null}>
          <World />
        </Suspense>
      </Canvas>
    </div>
  );
}