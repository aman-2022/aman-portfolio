import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const InnerSphere = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }))

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0001
      ref.current.rotation.y -= 0.0002
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const Particles = () => {
  const ref = useRef()
  const [particles] = useState(() => random.inSphere(new Float32Array(1000), { radius: 2 }))

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001
      ref.current.rotation.y += 0.0001
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

function Scene() {
  const groupRef = useRef()
  const { mouse } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * 0.3
      groupRef.current.rotation.y = mouse.x * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      <InnerSphere />
      <Particles />
    </group>
  )
}

export default function DataSphere() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        dpr={isMobile ? 1 : window.devicePixelRatio}
      >
        <Scene />
        <Preload all />
      </Canvas>
    </div>
  )
}
