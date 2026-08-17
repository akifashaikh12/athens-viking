"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import Architecture from "./Architecture";
import Environment from "./Environment";
import Zeus from "./Zeus";
import Warriors from "./Warriors";

export default function World() {
  const { camera, scene } = useThree();

  const progress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      progress.current =
        max > 0 ? window.scrollY / max : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useFrame(({ clock }) => {
    const p = progress.current;
    const time = clock.getElapsedTime();

    /*
      CAMERA JOURNEY
    */

    const targetZ =
      24 -
      p * 70;

    const targetY =
      6 -
      p * 5;

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      0.04
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.04
    );

    camera.position.x =
      Math.sin(time * 0.15) * 0.6;

    camera.rotation.y =
      Math.sin(time * 0.08) * 0.03;

    /*
      WORLD COLOR TRANSITION
    */

    const peaceful = new THREE.Color(
      "#7cb4d4"
    );

    const war = new THREE.Color(
      "#210707"
    );

    scene.background = peaceful.clone().lerp(
      war,
      Math.max(0, (p - 0.45) / 0.55)
    );

    /*
      ATMOSPHERE
    */

    if (scene.fog) {
      scene.fog.color = peaceful
        .clone()
        .lerp(
          war,
          Math.max(0, (p - 0.45) / 0.55)
        );
    }
  });

  return (
    <>
      <Architecture />

      <Environment />

      <Zeus />

      <group
        position={[0, 0, -38]}
      >
        <Warriors />
      </group>
    </>
  );
}