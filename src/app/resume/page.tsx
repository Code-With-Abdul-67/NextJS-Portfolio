'use client'

import { FaDownload, FaFileAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
} from '@/utils/animations'

export default function Resume() {
  return (
    <div className="container max-w-5xl mx-auto py-20 px-4 relative">

      {/* Heading */}
      <motion.div className="text-center mb-12" {...fadeInDown}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
          My Resume
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          View or download my professional resume to learn more about my technical background and experience.
        </p>
      </motion.div>

      {/* Download Button */}
      <motion.div
        className="flex justify-center mb-12"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <motion.a
          href="/cv.pdf"
          download
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg hover:shadow-primary/30 transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload className="group-hover:translate-y-1 transition-transform" />
          <span>Download CV</span>
        </motion.a>
      </motion.div>

      {/* PDF Viewer Container */}
      <motion.div
        className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-[#0F0F0F] p-2"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute top-4 right-4 z-10 hidden md:block">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-gray-100 dark:border-white/10 text-xs font-medium">
            <FaFileAlt className="text-primary" />
            <span className="text-gray-600 dark:text-gray-300">Resume Preview</span>
          </div>
        </div>

        <iframe
          src="/cv.pdf"
          className="w-full h-[80vh] rounded-xl border-none"
          title="CV PDF"
        />
      </motion.div>
    </div>
  )
}
