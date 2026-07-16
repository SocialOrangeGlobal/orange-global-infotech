'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows, Float, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.preload('/model/strange_shapes.glb')

function RobotScene({ scale = 0.5 }: { scale?: number }) {
  const meshRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/model/strange_shapes.glb')

  useFrame((state) => {
    if (!meshRef.current) return
    // Subtle floating rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
  })

  return (
    <group ref={meshRef}>
      <Float
        speed={1.2}
        rotationIntensity={0.06}
        floatIntensity={0.5}
        floatingRange={[-0.05, 0.05]}
      >
        <primitive
          object={scene}
          scale={scale}
          position={[0, -1.0, 0]}
          dispose={null}
        />
      </Float>
    </group>
  )
}

function Fallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.8, 1.2, 0.8]} />
      <meshStandardMaterial color="#FF6B00" wireframe />
    </mesh>
  )
}

export default function RobotModel() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 5], fov: 42, near: 0.1, far: 100 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      style={{ background: 'transparent' }}
    >
      {/* Ambient — base fill */}
      <ambientLight intensity={1.2} color="#ffffff" />

      {/* Key — warm sunlight from top-right */}
      <directionalLight
        position={[5, 8, 4]}
        intensity={2.8}
        color="#fffdf5"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill — cool left */}
      <directionalLight position={[-4, 2, 2]} intensity={0.9} color="#cce8ff" />

      {/* Rim — orange brand accent from below-front */}
      <pointLight position={[0, -2, 4]} intensity={1.5} color="#FF6B00" distance={10} />

      {/* Back light — purple tint */}
      <pointLight position={[-2, 3, -4]} intensity={0.6} color="#c084fc" distance={12} />

      {/* Contact shadow */}
      <ContactShadows
        position={[0, -1.85, 0]}
        opacity={0.18}
        scale={6}
        blur={3}
        far={2.5}
        color="#111111"
      />

      <Environment preset="studio" />

      <Suspense fallback={<Fallback />}>
        <RobotScene scale={2.2} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        dampingFactor={0.06}
        enableDamping
        rotateSpeed={0.4}
      />
    </Canvas>
  )
}
