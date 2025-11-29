'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
    const education = [
        {
            degree: 'Bachelor of Engineering',
            field: 'Computer Science',
            institution: 'PSG College of Technology',
            location: 'Coimbatore',
            period: 'NOV 2020 - JULY 2024',
            grade: 'CGPA: 9.34',
            icon: GraduationCap,
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Bharathi Matric HR Sec School',
            location: 'Coimbatore',
            period: 'JUN 2019 - MAR 2020',
            grade: '96.6%',
            icon: Award,
        },
        {
            degree: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Bharathi Matric HR Sec School',
            location: 'Coimbatore',
            period: 'JUN 2017 - APR 2018',
            grade: '94.5%',
            icon: Award,
        },
    ]

    return (
        <section id="education" className="relative py-20 bg-gradient-to-b from-transparent to-sage-950/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage-500 to-coral-500" />

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                    } md:w-1/2`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-auto md:right-[-1.5rem] lg:left-auto lg:right-[-1.5rem] top-6 w-4 h-4 bg-sage-500 rounded-full border-4 border-slate-900 z-10" />

                                <div className="glass rounded-2xl p-6 ml-16 md:ml-0 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-sage-500/20 rounded-lg">
                                            <edu.icon className="text-sage-400" size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-sage-200">{edu.degree}</h3>
                                                    {edu.field && (
                                                        <p className="text-coral-300 font-medium">{edu.field}</p>
                                                    )}
                                                </div>
                                                <span className="px-3 py-1 bg-coral-500/20 text-coral-200 rounded-full text-sm font-semibold">
                                                    {edu.grade}
                                                </span>
                                            </div>
                                            <p className="text-lg font-semibold text-beige-200 mb-1">
                                                {edu.institution}
                                            </p>
                                            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                                                <span>📍 {edu.location}</span>
                                                <span>📅 {edu.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
