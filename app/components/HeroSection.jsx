"use client";

import { Canvas } from '@react-three/fiber'
import Scene from '../components/Scene'

export default function HeroSection() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
    </div>
  )
}
