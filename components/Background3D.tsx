'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField({ mouse }: { mouse: THREE.Vector2 }) {
    const ref = useRef<THREE.Points>(null)
    const originalPositions = useRef<Float32Array | null>(null)

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(5000 * 3)

        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 100
            const y = (Math.random() - 0.5) * 100
            const z = (Math.random() - 0.5) * 100

            positions.set([x, y, z], i * 3)
        }

        originalPositions.current = new Float32Array(positions)
        return positions
    }, [])

    useFrame((state, delta) => {
        if (ref.current && originalPositions.current) {
            ref.current.rotation.x -= delta * 0.05
            ref.current.rotation.y -= delta * 0.075

            // Get the positions attribute
            const positions = ref.current.geometry.attributes.position.array as Float32Array

            // Mouse interaction - repel particles from cursor
            for (let i = 0; i < positions.length; i += 3) {
                const x = originalPositions.current[i]
                const y = originalPositions.current[i + 1]
                const z = originalPositions.current[i + 2]

                // Convert mouse position to 3D space
                const mouseX = mouse.x * 15
                const mouseY = mouse.y * 15

                // Calculate distance from particle to mouse
                const dx = x - mouseX
                const dy = y - mouseY
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Repel particles within a certain radius
                const maxDistance = 10
                if (distance < maxDistance) {
                    const force = (1 - distance / maxDistance) * 2
                    positions[i] = x + dx * force
                    positions[i + 1] = y + dy * force
                    positions[i + 2] = z
                } else {
                    // Smoothly return to original position
                    positions[i] += (x - positions[i]) * 0.1
                    positions[i + 1] += (y - positions[i + 1]) * 0.1
                    positions[i + 2] += (z - positions[i + 2]) * 0.1
                }
            }

            ref.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#5f7360"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    )
}

function FloatingGeometry({ position, scale, color, mouse }: { position: [number, number, number], scale: number, color: string, mouse: THREE.Vector2 }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3

            // Base floating animation
            const baseY = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.5

            // Mouse interaction - subtle attraction
            const mouseX = mouse.x * 3
            const mouseY = mouse.y * 3

            meshRef.current.position.x = position[0] + mouseX * 0.3
            meshRef.current.position.y = baseY + mouseY * 0.3
            meshRef.current.position.z = position[2]
        }
    })

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color={color}
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    )
}

function Scene() {
    const { viewport } = useThree()
    const [mouse, setMouse] = useState(new THREE.Vector2(0, 0))

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse position to -1 to 1 range
            const x = (event.clientX / window.innerWidth) * 2 - 1
            const y = -(event.clientY / window.innerHeight) * 2 + 1
            setMouse(new THREE.Vector2(x, y))
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <StarField mouse={mouse} />

            <FloatingGeometry position={[-8, 2, -5]} scale={2} color="#5f7360" mouse={mouse} />
            <FloatingGeometry position={[8, -2, -5]} scale={1.5} color="#d87469" mouse={mouse} />
            <FloatingGeometry position={[0, 5, -8]} scale={1.8} color="#b39679" mouse={mouse} />
            <FloatingGeometry position={[-5, -4, -6]} scale={1.3} color="#8891a0" mouse={mouse} />
        </>
    )
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 75 }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    )
}
