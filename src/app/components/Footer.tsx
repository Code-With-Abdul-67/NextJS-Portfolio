import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0F0F0F] border-t border-gray-100 dark:border-white/5 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Brand and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Code-With-Abdul
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-medium">
              Building digital experiences with passion and precision.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-5">
            {[
              { href: "https://github.com/Code-With-Abdul-67", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "mailto:codewithabdul67@gmail.com", icon: <FaEnvelope />, label: "Email" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all shadow-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 