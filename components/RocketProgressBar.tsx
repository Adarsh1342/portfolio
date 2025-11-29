'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RocketProgressBar() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [isMounted, setIsMounted] = useState(false)
    const [pathDefinition, setPathDefinition] = useState("")
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        setIsMounted(true)

        const updatePath = () => {
            const height = window.innerHeight
            setWindowHeight(height)
            const width = 100 // Fixed width of the container in the SVG coordinate space if we were using one, but here we'll use pixel values mostly. 
            // Actually, the container is w-24 (96px). Let's assume center is 48.

            // We want the path to go from top to bottom.
            // Let's create a path with a few curves.
            // M 48 0
            // C 96 (h*0.1), 0 (h*0.2), 48 (h*0.3) ...

            const steps = 6
            const stepHeight = height / steps

            let d = `M 50 0`
            for (let i = 0; i < steps; i++) {
                const yStart = i * stepHeight
                const yEnd = (i + 1) * stepHeight

                // Control points
                // Alternating curves
                const controlX1 = i % 2 === 0 ? 100 : 0
                const controlX2 = i % 2 === 0 ? 0 : 100

                const controlY1 = yStart + stepHeight * 0.33
                const controlY2 = yStart + stepHeight * 0.66

                d += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, 50 ${yEnd}`
            }

            setPathDefinition(d)
        }

        updatePath()
        window.addEventListener('resize', updatePath)
        return () => window.removeEventListener('resize', updatePath)
    }, [])

    const offsetDistance = useTransform(scaleX, value => `${value * 100}%`)

    if (!isMounted || !pathDefinition) return null

    return (
        <div className="fixed right-4 top-0 bottom-0 w-24 z-50 pointer-events-none hidden md:block">
            <div className="relative w-full h-full">
                {/* Progress Line */}
                <svg className="w-full h-full overflow-visible">
                    {/* Background Track */}
                    <path
                        d={pathDefinition}
                        fill="none"
                        stroke="rgba(95, 115, 96, 0.2)"
                        strokeWidth="2"
                        className="h-full"
                    />
                    {/* Active Progress Track */}
                    <motion.path
                        d={pathDefinition}
                        fill="none"
                        stroke="#d87469"
                        strokeWidth="3"
                        style={{ pathLength: scaleX }}
                        className="h-full"
                    />
                </svg>

                {/* Rocket - Outside SVG to avoid distortion */}
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 text-coral-500"
                    style={{
                        offsetPath: `path('${pathDefinition}')`,
                        offsetDistance,
                        offsetRotate: 'auto 90deg',
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full drop-shadow-[0_0_10px_rgba(216,116,105,0.8)]"
                    >
                        <path
                            d="M12 2.5c0 0-6 8-6 13 0 3.5 2.5 6 6 6s6-2.5 6-6c0-5-6-13-6-13zM12 21.5c-1.5 0-3-1.5-3-3.5 0-1.5 1-3 3-3s3 1.5 3 3-1.5 3.5-3 3.5z"
                            fill="#d87469"
                        />
                        <path
                            d="M12 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
                            fill="#fff"
                            fillOpacity="0.5"
                        />
                    </svg>
                    {/* Engine Flame */}
                    <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-4 bg-orange-500 rounded-full blur-[2px]"
                        animate={{
                            height: [10, 15, 10],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}
