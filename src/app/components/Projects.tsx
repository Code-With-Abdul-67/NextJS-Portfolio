'use client'

import { projects } from '@/contents/projects'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <motion.section
      className="py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-primary"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
