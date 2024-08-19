"use client";

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'

export default function Text3Ds({ text = "Animated Text", scales = 0.2, ...props }) {
  const textRef = useRef()

  // useFrame(() => {
  //   textRef.current.rotation.y += 0.01
  // })
  useEffect(() => {
    textRef.current.geometry.computeBoundingBox()
    const { boundingBox } = textRef.current.geometry

    const scale = scales
    const centerX = (boundingBox.max.x - boundingBox.min.x) / 2 * scale
    const centerY = (boundingBox.max.y - boundingBox.min.y) / 2 * scale
    const centerZ = (boundingBox.max.z - boundingBox.min.z) / 2 * scale

    textRef.current.position.set(-centerX, -centerY, -centerZ)

  }, [text])

  return (
    <Text3D className={"scale-150"} font={"./fonts/Roboto_Regular.json"} ref={textRef} {...props} scale={[scales,scales,scales]}>
      {text}
      <meshNormalMaterial attach="material" />
    </Text3D> 
  )
}
