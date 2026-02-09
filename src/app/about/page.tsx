'use client'

import { FaCode, FaLaptopCode, FaGraduationCap, FaBriefcase, FaUserGraduate } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
} from '@/utils/animations'

export default function About() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="h-8 w-8" />,
      skills: ["React JS", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <FaCode className="h-8 w-8" />,
      skills: ["Next JS", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "CyberSecurity",
      icon: <FaLaptopCode className="h-8 w-8" />,
      skills: ["OSINT", "Wifi Pentesting", "Network Security"]
    },
    {
      title: "Tools & Others",
      icon: <FaGraduationCap className="h-8 w-8" />,
      skills: ["Git / GitHub", "Figma", "Linux", "VS Code"]
    }
  ]

  const experience = [
    {
      title: "Front End Developer",
      period: "2022 - Present",
      description: ["HTML5, CSS3, JS and Bootstrap", "NEXT.JS", "Git, GitHub"]
    },
    {
      title: "Backend Developer",
      period: "2025 - Present",
      description: ["NEXT.JS", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Enrolled in ACCPAi from Aptech",
      period: "2024 - 2025",
      description: ["UI/UX Design with Figma", "Full-stack with PHP, MySQL, Laravel"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      year: "2020",
      icon: <FaUserGraduate className="h-5 w-5" />
    },
    {
      degree: "Bachelor of Science in Pre Engineering",
      year: "2023",
      icon: <FaGraduationCap className="h-5 w-5" />
    }
  ]

  return (
    <div className="container max-w-7xl mx-auto py-20 px-4 relative overflow-hidden">

      {/* Heading */}
      <motion.div className="text-center mb-20" {...fadeInDown}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I&apos;m a passionate <span className="text-primary font-semibold">Front End Developer</span> with expertise in building modern, responsive, and user-centric web applications. I strive for excellence and love learning new technologies.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        className="mb-24"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Skills & Expertise</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 dark:bg-[#0F0F0F]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-primary/10 transition-all group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-4 mb-10">
            <FaBriefcase className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">My Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-8 border-l-2 border-primary/30"
                variants={fadeInUp}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#0F0720]" />
                <div className="bg-white/50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                  <span className="text-primary font-semibold text-sm mb-4 block">{exp.period}</span>
                  <ul className="space-y-2">
                    {exp.description.map((item, iIdx) => (
                      <li key={iIdx} className="text-gray-600 dark:text-gray-400 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-4 mb-10">
            <FaLaptopCode className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">My Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="bg-white/50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm flex items-start gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                  <p className="text-primary font-semibold text-sm">Graduated in {edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
