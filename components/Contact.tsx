'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'adhu1342@gmail.com',
            link: 'mailto:adhu1342@gmail.com',
            color: 'sage',
        },
        {
            icon: Mail,
            label: 'Alternate Email',
            value: 'adarsh2002off@gmail.com',
            link: 'mailto:adarsh2002off@gmail.com',
            color: 'sage',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 7548835341',
            link: 'tel:+917548835341',
            color: 'coral',
        },
        {
            icon: Phone,
            label: 'Alternate Phone',
            value: '+91 8778533840',
            link: 'tel:+918778533840',
            color: 'coral',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Coimbatore, India',
            link: null,
            color: 'beige',
        },
    ]

    const socialLinks = [
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/adarsh-g-64832021a/',
            color: 'bg-blue-600 hover:bg-blue-700',
        },
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/Adarsh1342',
            color: 'bg-slate-700 hover:bg-slate-800',
        },
    ]

    const getColorClasses = (color: string) => {
        const colors: Record<string, any> = {
            sage: 'bg-sage-500/20 text-sage-400',
            coral: 'bg-coral-500/20 text-coral-400',
            beige: 'bg-beige-500/20 text-beige-400',
        }
        return colors[color]
    }

    return (
        <section id="contact" className="relative py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-coral-500 mx-auto rounded-full mb-4" />
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Contact Information Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="glass rounded-xl p-6 card-hover block h-full"
                                    >
                                        <div className={`p-3 ${getColorClasses(info.color)} rounded-lg w-fit mb-4`}>
                                            <info.icon size={24} />
                                        </div>
                                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                                        <p className="font-semibold text-slate-200">{info.value}</p>
                                    </a>
                                ) : (
                                    <div className="glass rounded-xl p-6 card-hover h-full">
                                        <div className={`p-3 ${getColorClasses(info.color)} rounded-lg w-fit mb-4`}>
                                            <info.icon size={24} />
                                        </div>
                                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                                        <p className="font-semibold text-slate-200">{info.value}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass rounded-2xl p-8 mb-12"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-beige-500/20 text-beige-400 rounded-lg">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-beige-200">Address</h3>
                                <p className="text-slate-300">
                                    Site No:14, Sowbagya Avenue, Annamanaiker street,<br />
                                    Kuniamuthur, Coimbatore - 641008, India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                        <div className="flex justify-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`btn-hover p-4 ${social.color} rounded-full text-white shadow-lg transition-all`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={28} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20 pt-8 border-t border-slate-700/50"
                >
                    <p className="text-slate-400">
                        © {new Date().getFullYear()} Adarsh G. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                        Built with Next.js, Three.js & Framer Motion
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
