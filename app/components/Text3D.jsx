"use client";

import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';

export default function Text3Ds({ text = "Animated Text", scales = 0.09, position = [0, 0, 0], ...props }) {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.geometry.computeBoundingBox();
    const { boundingBox } = textRef.current.geometry;

    const scale = scales;
    const centerX = (boundingBox.max.x - boundingBox.min.x) / 2 * scale;
    const centerY = (boundingBox.max.y - boundingBox.min.y) / 9 * scale;
    const centerZ = (boundingBox.max.z - boundingBox.min.z) / 2 * scale;

    textRef.current.position.set(
      position[0] - centerX,
      position[1] - centerY,
      position[2] - centerZ
    );
  }, [text, scales, position]);

  useFrame(({ clock }) => {
    if (text === "Web Developer") {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Text3D font={"./fonts/Roboto_Regular.json"} ref={textRef} {...props} scale={[scales, scales, scales]}>
      {text}
      <meshNormalMaterial attach="material" />
    </Text3D> 
  );
}