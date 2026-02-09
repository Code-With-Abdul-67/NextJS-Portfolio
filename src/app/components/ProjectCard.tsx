'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    githubLink: string
    demoLink?: string
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="group relative h-full bg-white dark:bg-[#0F0F0F] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col"
            variants={{
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -5 }}
        >
            {/* Project Image Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 z-10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-medium bg-primary/5 text-primary border border-primary/20 rounded-full uppercase tracking-wider"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm font-medium group/btn"
                    >
                        <FaGithub className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Code</span>
                    </a>

                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium shadow-lg shadow-primary/20 group/btn"
                        >
                            <FaExternalLinkAlt className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
