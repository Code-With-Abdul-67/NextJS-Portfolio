'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28 relative overflow-hidden">

      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className='flex justify-center items-center mb-8'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full w-36 h-36 object-cover border-4 border-white dark:border-[#1E1B2E]"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Abdul Baseer
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Front End Developer | UI Designer | Wifi Pentester
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/Code-With-Abdul-67"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="inline-block w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-primary/25 transition-all"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="inline-block w-full md:w-auto bg-white dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 