'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { withBasePath } from '@/lib/utils'

export default function Hero() {
    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Floating shapes background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-sage-500/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-coral-500/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Profile Picture - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-sage-500 to-coral-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sage-500/50 shadow-2xl">
                                <Image
                                    src={withBasePath("/profile.png")}
                                    alt="Adarsh G"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Content - Right Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                                Hi, I&apos;m{' '}
                                <span className="gradient-text">Adarsh G</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-6"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-sage-300 font-light mb-4">
                                Full Stack Developer & ML Engineer
                            </h2>
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                                Computer Science Engineer at Verizon Data Services India, specializing in
                                Full Stack Development, Machine Learning, and Deep Learning solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                className="btn-hover px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-sage-500/50"
                            >
                                <Mail size={20} />
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-hover px-8 py-3 glass text-white rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-white/10"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-sage-400"
                    >
                        <span className="text-sm">Scroll Down</span>
                        <ArrowDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
