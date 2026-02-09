'use client'

import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'

function ContactForm() {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState('')

  useEffect(() => {
    const service = searchParams.get('service')
    if (service) {
      setMessage(`Hi Abdul! I am interested in your ${service} service. I would like to discuss a project about it.`)
    }
  }, [searchParams])

  return (
    <motion.form
      action="https://formsubmit.co/codewithabdul67@gmail.com"
      method="POST"
      className="space-y-6"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your-email@domain.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
          />
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Send Message</span>
        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.form>
  )
}

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-4 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          {...slideInLeft}
        >
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out directly!
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:codewithabdul67@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">Email Me</h3>
                  <span className="text-primary group-hover:text-primary/80 transition-colors">
                    codewithabdul67@gmail.com
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          className="bg-white dark:bg-[#0F0F0F] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 relative overflow-hidden"
          {...slideInRight}
        >
          {/* Form Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-primary italic">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </motion.div>
      </div>
    </div>
  )
}
