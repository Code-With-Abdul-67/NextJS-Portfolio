'use client'

import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer
} from '@/utils/animations'

export default function Resume() {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-primary"
        {...fadeInDown}
      >
        Resume
      </motion.h1>

      <motion.div
        className="flex justify-center mb-6"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <a
          href="/cv.pdf"
          download
          className="btn btn-primary flex items-center gap-2 hover:border hover:border-black hover:rounded"
        >
          <FaDownload />
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="rounded-lg shadow-md overflow-hidden border border-black/10 hover:border-black transition bg-white dark:bg-[#3b185f]/50"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <iframe
          src="/cv.pdf"
          className="w-full h-[80vh] rounded-md"
          title="CV PDF"
        />
      </motion.div>
    </div>
  )
}
