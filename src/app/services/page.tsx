'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    FaLaptopCode,
    FaPaintBrush,
    FaPencilRuler,
    FaTools,
    FaArrowRight
} from 'react-icons/fa'
import {
    fadeInUp,
    fadeInDown,
    staggerContainer,
} from '@/utils/animations'
import Link from 'next/link'

export default function ServicesPage() {
    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and SEO-friendly websites using modern technologies like Next.js, React, and Tailwind CSS. From landing pages to complex web apps.",
            icon: <FaLaptopCode className="h-8 w-8" />,
            features: ["Responsive Design", "Next.js & React", "API Integration", "Performance Setup"],
            gradient: "from-amber-500 to-orange-600"
        },
        {
            title: "Logo Designing",
            description: "Crafting unique and memorable visual identities that capture your brand's essence. Professional logos that work perfectly across all digital and print media.",
            icon: <FaPaintBrush className="h-8 w-8" />,
            features: ["Custom Concepts", "Vector Scaling", "Brand Guidelines", "Multiple Formats"],
            gradient: "from-amber-400 to-amber-600"
        },
        {
            title: "UI Designing",
            description: "Creating beautiful, intuitive, and user-centered interfaces. Focusing on user experience to ensure your product is both functional and aesthetically pleasing.",
            icon: <FaPencilRuler className="h-8 w-8" />,
            features: ["Figma Prototypes", "Wireframing", "User Flows", "Design Systems"],
            gradient: "from-orange-500 to-amber-500"
        },
        {
            title: "PC Building",
            description: "Expert PC building services tailored to your needs. From high-end gaming rigs to professional workstations, ensuring optimal performance and aesthetics.",
            icon: <FaTools className="h-8 w-8" />,
            features: ["Parts Selection", "Cable Management", "OS Installation", "Testing & Benchmarking"],
            gradient: "from-amber-600 to-orange-700"
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">

            <div className="container max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    {...fadeInDown}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Professional Services
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I offer a wide range of digital services to help you build, design, and optimize your online presence and hardware.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-white dark:bg-[#0F0F0F] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-primary/10 transition-all duration-500 flex flex-col md:flex-row gap-8 overflow-hidden"
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                            {/* Icon Container */}
                            <div className="flex-shrink-0">
                                <div className={`p-5 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-2 gap-y-3 mb-8">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all group/btn"
                                >
                                    Book Service <FaArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </div>
    )
}
