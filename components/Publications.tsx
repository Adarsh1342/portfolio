'use client'

import { motion } from 'framer-motion'
import { FileText, Award, ExternalLink } from 'lucide-react'

export default function Publications() {
    const publications = [
        {
            title: 'Automatic Road Accident Detection Using Deep Learning',
            description: 'State-of-the-art object detection and classification system using hybrid algorithm combining YOLOv5h and CNN for automatic road accident detection.',
            conference: '4th International Conference on Artificial Intelligence and Smart Energy (ICAIS 2024)',
            publisher: 'Springer Publication',
            year: '2024',
            type: 'Conference Paper',
        },
    ]

    return (
        <section id="publications" className="relative py-20 bg-gradient-to-b from-transparent to-coral-950/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Publications</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass rounded-2xl p-8 card-hover border-2 border-coral-500/30 bg-gradient-to-br from-coral-500/10 to-sage-500/10"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-coral-500/20 rounded-xl">
                                        <FileText className="text-coral-400" size={48} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start gap-2 mb-3">
                                        <Award className="text-coral-400 flex-shrink-0 mt-1" size={24} />
                                        <h3 className="text-2xl font-bold text-coral-200 leading-tight">
                                            {pub.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {pub.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-3 py-1 bg-sage-500/20 text-sage-200 rounded-full font-medium">
                                                {pub.type}
                                            </span>
                                            <span className="px-3 py-1 bg-coral-500/20 text-coral-200 rounded-full font-medium">
                                                {pub.year}
                                            </span>
                                        </div>
                                        <p className="text-beige-200 font-semibold">
                                            📚 {pub.conference}
                                        </p>
                                        <p className="text-slate-400">
                                            🏢 {pub.publisher}
                                        </p>
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
