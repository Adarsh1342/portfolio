'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Layers, Brain } from 'lucide-react'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: Code2,
            color: 'sage',
            skills: [
                { name: 'C', level: 85 },
                { name: 'Python', level: 90 },
                { name: 'Java', level: 85 },
            ],
        },
        {
            title: 'Tech Stacks',
            icon: Layers,
            color: 'coral',
            skills: [
                { name: 'Express.js', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'React', level: 88 },
                { name: 'HTML & CSS', level: 92 },
            ],
        },
        {
            title: 'Technical Skills',
            icon: Brain,
            color: 'beige',
            skills: [
                { name: 'OOP', level: 90 },
                { name: 'DBMS', level: 85 },
                { name: 'Operating Systems', level: 80 },
                { name: 'Computer Networks', level: 82 },
                { name: 'Data Structures', level: 88 },
                { name: 'Problem Solving', level: 90 },
                { name: 'AI & ML', level: 85 },
            ],
        },
    ]

    const getColorClasses = (color: string) => {
        const colors: Record<string, any> = {
            sage: {
                bg: 'bg-sage-500/20',
                text: 'text-sage-400',
                bar: 'bg-sage-500',
                hover: 'hover:bg-sage-500/30',
            },
            coral: {
                bg: 'bg-coral-500/20',
                text: 'text-coral-400',
                bar: 'bg-coral-500',
                hover: 'hover:bg-coral-500/30',
            },
            beige: {
                bg: 'bg-beige-500/20',
                text: 'text-beige-400',
                bar: 'bg-beige-500',
                hover: 'hover:bg-beige-500/30',
            },
        }
        return colors[color]
    }

    return (
        <section id="skills" className="relative py-20 bg-gradient-to-b from-transparent to-slate-950/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, catIndex) => {
                        const colorClasses = getColorClasses(category.color)
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                                className="glass rounded-2xl p-6 card-hover"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 ${colorClasses.bg} rounded-lg`}>
                                        <category.icon className={colorClasses.text} size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-slate-200">{skill.name}</span>
                                                <span className={`text-sm ${colorClasses.text}`}>{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                                                    className={`h-full ${colorClasses.bar} rounded-full`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
