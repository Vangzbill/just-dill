"use client"; 

import React from 'react'
import { Stars } from './Stars'
import Text3Ds from './Text3D';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function Scene() {
  const obj = useLoader(OBJLoader, './images/earth.obj')
  return (
    <>
      <Text3Ds 
          text="Hello, World!"
        />
      <Stars 
      />
        {/* <primitive object={obj} scale={0.5} position={[0, 0, 0]} /> */}
    </>
  )
}