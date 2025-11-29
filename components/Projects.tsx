'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: 'Effective Prediction of Parkinson\'s Disease',
            description: 'Developed an Ensemble Machine Learning Algorithm with Hyperparameter Tuning and Feature Selection using Python, scikit-learn, numpy, and tensorflow.',
            tech: ['Python', 'Machine Learning', 'scikit-learn', 'TensorFlow', 'numpy'],
            github: 'https://github.com/Adarsh1342/Effective-Prediction-of-Parkinson-s-Disease-using-ML-.git',
            color: 'sage',
        },
        {
            title: 'Inventory Management System',
            description: 'Comprehensive inventory system with product management, stock updates, sales tracking, customer management, and receipt printing. Includes user authentication.',
            tech: ['Java', 'SQL', 'Swing GUI'],
            github: 'https://github.com/Adarsh1342/INVENTORY-MANAGEMENT-SYSTEM-I4-IN-JAVA-.git',
            color: 'coral',
        },
        {
            title: 'Crypto Package (Security Package)',
            description: 'Python package for file encryption/decryption with Streamlit web interface. Supports multiple encryption techniques and steganography using OpenCV and numpy.',
            tech: ['Python', 'Streamlit', 'OpenCV', 'Cryptography', 'Steganography'],
            github: 'https://github.com/Viraj-Agarwal/Security_Package.git',
            color: 'beige',
        },
        {
            title: 'Accident Detection and Signal Regulation System',
            description: 'State-of-the-art object detection and classification system using hybrid algorithm with YOLOv5h and CNN for automatic road accident detection.',
            tech: ['Deep Learning', 'YOLOv5', 'CNN', 'Computer Vision'],
            github: 'https://github.com/Adarsh1342/Accident-Detection-and-Signal-Regulation-System.git',
            color: 'sage',
        },
        {
            title: 'Car Rental System',
            description: 'Full-stack web application for car rental management with user creation, car rental periods, and admin functions for CRUD operations. All data stored in database.',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
            github: null,
            color: 'coral',
        },
    ]

    const getColorClasses = (color: string) => {
        const colors: Record<string, any> = {
            sage: 'from-sage-500/20 to-sage-600/20 border-sage-500/30',
            coral: 'from-coral-500/20 to-coral-600/20 border-coral-500/30',
            beige: 'from-beige-500/20 to-beige-600/20 border-beige-500/30',
        }
        return colors[color]
    }

    return (
        <section id="projects" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`glass rounded-2xl p-6 card-hover border-2 bg-gradient-to-br ${getColorClasses(project.color)}`}
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-sage-100 mb-3 line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-slate-700/50 text-slate-200 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hover inline-flex items-center gap-2 px-4 py-2 bg-sage-600 hover:bg-sage-700 text-white rounded-lg text-sm font-semibold transition-all w-full justify-center"
                                >
                                    <Github size={18} />
                                    View on GitHub
                                    <ExternalLink size={16} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
