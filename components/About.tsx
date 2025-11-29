'use client'

import { motion } from 'framer-motion'
import { User, Calendar, MapPin, Languages } from 'lucide-react'

export default function About() {
    const details = [
        { icon: Calendar, label: 'Date of Birth', value: '13 April 2002' },
        { icon: User, label: 'Age', value: '22 years' },
        { icon: MapPin, label: 'Nationality', value: 'Indian' },
        { icon: User, label: 'Gender', value: 'Male' },
    ]

    const languages = ['Malayalam', 'Tamil', 'English', 'Hindi', 'French']
    const hobbies = ['Football', 'Chess', 'Cycling', 'Speed Cubing']

    return (
        <section id="about" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Personal Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-2xl p-8 card-hover"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-sage-300">Personal Details</h3>
                        <div className="space-y-4">
                            {details.map((detail, index) => (
                                <motion.div
                                    key={detail.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-2 bg-sage-500/20 rounded-lg">
                                        <detail.icon className="text-sage-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">{detail.label}</p>
                                        <p className="text-lg font-semibold">{detail.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-sage-500/10 rounded-lg">
                            <p className="text-sm text-slate-400 mb-2">Address</p>
                            <p className="text-sm">
                                Site No:14, Sowbagya Avenue, Annamanaiker street,<br />
                                Kuniamuthur, Coimbatore - 641008, India
                            </p>
                        </div>
                    </motion.div>

                    {/* Languages & Hobbies */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass rounded-2xl p-8 card-hover"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Languages className="text-coral-400" size={28} />
                                <h3 className="text-2xl font-bold text-coral-300">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {languages.map((lang, index) => (
                                    <motion.span
                                        key={lang}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="px-4 py-2 bg-coral-500/20 text-coral-200 rounded-full text-sm font-medium hover:bg-coral-500/30 transition-colors"
                                    >
                                        {lang}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass rounded-2xl p-8 card-hover"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-beige-300">Hobbies & Interests</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {hobbies.map((hobby, index) => (
                                    <motion.div
                                        key={hobby}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="p-3 bg-beige-500/20 rounded-lg text-center hover:bg-beige-500/30 transition-colors"
                                    >
                                        <p className="font-medium text-beige-200">{hobby}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
