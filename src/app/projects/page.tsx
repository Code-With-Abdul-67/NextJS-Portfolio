'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
} from '@/utils/animations'

export default function Projects() {
  return (
    <motion.section
      className="container max-w-7xl mx-auto py-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-lg text-secondary mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the code or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            {/* Project Image */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {project.title}
              </h3>

              <p className="text-secondary mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
