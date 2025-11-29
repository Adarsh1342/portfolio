'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Verizon Data Services India',
            type: 'Full-time',
            period: 'JULY 2025 - PRESENT',
            description: 'Working on enterprise-level software solutions and data services.',
            skills: ['Apache Flink', 'MongoDB', 'OracleDB', 'Neo4jDB', 'CI/CD'],
            current: true,
        },
        {
            title: 'Software Engineering Intern',
            company: 'Verizon Data Services India',
            type: 'Internship',
            period: 'FEB 2024 - JUNE 2024',
            description: 'Gained hands-on experience in modern data technologies and development practices.',
            skills: ['Apache Flink', 'MongoDB', 'OracleDB', 'Neo4jDB', 'CI/CD Concepts'],
            current: false,
        },
    ]

    return (
        <section id="experience" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass rounded-2xl p-8 card-hover relative overflow-hidden"
                        >
                            {exp.current && (
                                <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-sage-500 to-coral-500 text-white text-sm font-semibold rounded-bl-lg">
                                    Current
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-sage-500/20 rounded-xl">
                                        <Briefcase className="text-sage-400" size={40} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-sage-200 mb-2">{exp.title}</h3>
                                        <p className="text-xl text-coral-300 font-semibold mb-2">{exp.company}</p>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                                            <span className="px-3 py-1 bg-beige-500/20 text-beige-200 rounded-full">
                                                {exp.type}
                                            </span>
                                            <span>📅 {exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 mb-4">{exp.description}</p>

                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Code className="text-coral-400" size={20} />
                                            <h4 className="font-semibold text-coral-300">Skills Acquired</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                                                    className="px-3 py-1 bg-sage-500/20 text-sage-200 rounded-lg text-sm font-medium hover:bg-sage-500/30 transition-colors"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
