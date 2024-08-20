"use client";

import React, { Suspense } from 'react';
import { Stars } from './Stars';
import Text3Ds from './Text3D';
import Rocket from './Rocket';
import ReactComponent from './ReactComponent';

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Text3Ds 
        text="Sabilla Luthfi Rahmadhan"
        position={[0, 0, 0]}
        scales={0.08}
      />
      <Text3Ds 
        text="Web Developer"
        position={[0, -0.1, 0]}
        scales={0.05}
      />
      <ReactComponent />
      <Rocket />
      <Stars />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1, 1]} intensity={1} />
    </Suspense>
  );
}
