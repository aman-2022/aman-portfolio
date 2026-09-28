import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import DataSphere from '../components/3d/DataSphere'

export default function Hero({ reducedMotion }) {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <DataSphere />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/0 via-dark-900/30 to-dark-900"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.p
              className="text-sm font-semibold text-primary mb-4 uppercase tracking-widest"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="gradient-text">Aman</span>
            </motion.h1>

            <motion.div
              className="space-y-2 mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300">
                Data Science × Analytics × AI
              </h2>
              <p className="text-lg text-slate-400">
                B.Tech Data Science undergraduate at MGM University
              </p>
            </motion.div>

            <motion.p
              className="text-slate-400 text-lg mb-8 max-w-xl"
              variants={itemVariants}
            >
              Turning data, ideas, and technology into useful real-world solutions. Specializing in full-stack development, data analytics, machine learning, and AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#resume"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-900 font-bold rounded-lg transition-colors"
              >
                DOWNLOAD RESUME
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-slate-600 text-slate-300 hover:border-primary hover:text-primary font-bold rounded-lg transition-colors"
              >
                CONTACT ME
              </a>
            </motion.div>
          </motion.div>

          {/* Right - 3D Visualization (Hidden on small screens) */}
          <motion.div
            className="hidden lg:block h-96"
            variants={itemVariants}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={reducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-slate-400 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">SCROLL TO EXPLORE</span>
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  )
}
