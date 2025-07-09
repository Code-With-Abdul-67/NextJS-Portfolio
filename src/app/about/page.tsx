'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from '@/utils/animations'

export default function About() {
  return (
    <motion.div
      className="container max-w-7xl mx-auto py-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-primary"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Front End Developer with expertise in building modern web applications.
          I intend to find the best ways to learn new things day by day.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React JS / Next JS</li>
              <li>Bootstrap</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          {/* Cybersecurity */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">CyberSecurity</h3>
            <ul className="text-secondary space-y-2">
              <li>OSINT</li>
              <li>Wifi Pentesting</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Figma</li>
              <li>Linux</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
        >
          {/* Experience Card 1 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            <h3 className="text-xl font-semibold mb-2">
              Front End Developer (From 2022 till Present)
            </h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>HTML5, CSS3, JS and Bootstrap</li>
              <li>Git, GitHub</li>
            </ul>
          </motion.div>

          {/* Experience Card 2 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            <h3 className="text-xl font-semibold mb-2">
              Enrolled in ACCPAi from Aptech (2024 ~ 2025)
            </h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Figma</li>
              <li>PHP, My SQL, Laravel</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>

        {/* CS Degree */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mb-6"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Completed in 2020</p>
          </motion.div>

          {/* Pre-Engineering */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Pre Engineering</h3>
            <p className="text-primary mb-2">Completed in 2023</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
