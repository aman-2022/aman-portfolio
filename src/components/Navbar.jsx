import React, { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ onRecruiterMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-dark-900/80 backdrop-blur-md border-b border-slate-800 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              AMAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Icons and buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/aman-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aman-waghmare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <button
              onClick={onRecruiterMode}
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-dark-900 bg-primary hover:bg-secondary rounded-lg transition-colors"
            >
              RECRUITER VIEW
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-slate-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-primary hover:bg-dark-800 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={onRecruiterMode}
                className="w-full mt-4 px-4 py-2 text-sm font-medium text-dark-900 bg-primary hover:bg-secondary rounded-lg transition-colors"
              >
                RECRUITER VIEW
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
