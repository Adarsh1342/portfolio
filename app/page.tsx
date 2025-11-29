'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import Background3D from '@/components/Background3D'
import RocketProgressBar from '@/components/RocketProgressBar'

export default function Home() {
    return (
        <main className="relative">
            <Background3D />
            <RocketProgressBar />
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Publications />
            <Contact />
        </main>
    )
}
