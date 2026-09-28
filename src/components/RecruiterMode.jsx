import React from 'react'
import { motion } from 'framer-motion'
import { X, Download, Github, Linkedin, Mail } from 'lucide-react'
import { projects } from '../data/projects'

export default function RecruiterMode({ onClose, reducedMotion }) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark-900 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-400 hover:text-primary transition-colors"
        aria-label="Close recruiter mode"
      >
        <X size={24} />
      </button>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="text-5xl font-bold mb-2">
              <span className="gradient-text">AMAN WAGHMARE</span>
            </div>
            <div className="text-2xl text-slate-300 font-semibold mb-4">
              Data Science | Data Analytics | Machine Learning | Full-Stack Development
            </div>
            <p className="text-slate-400 text-lg max-w-2xl">
              B.Tech Data Science undergraduate with 4+ production-ready projects, expertise in full-stack development, data analytics, and machine learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Education & Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              {/* Education */}
              <div className="glass p-6 rounded-lg border border-slate-700">
                <h2 className="text-lg font-bold text-primary mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-300">B.Tech Data Science</p>
                    <p className="text-sm text-slate-400">MGM University</p>
                    <p className="text-xs text-slate-500">2024 – 2027 (4th Year)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-300">Diploma, Computer Science</p>
                    <p className="text-sm text-slate-400">PS College of Aurangabad Polytechnic</p>
                    <p className="text-xs text-slate-500">2021 | 69%</p>
                  </div>
                </div>
              </div>

              {/* Core Skills */}
              <div className="glass p-6 rounded-lg border border-slate-700">
                <h2 className="text-lg font-bold text-primary mb-4">Core Skills</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Languages</p>
                    <p className="text-sm text-slate-300">Python, Java, C++, JavaScript</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Full-Stack</p>
                    <p className="text-sm text-slate-300">React, Flask, MySQL, Node.js</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Data Science</p>
                    <p className="text-sm text-slate-300">ML, Deep Learning, SQL, ETL</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Tools</p>
                    <p className="text-sm text-slate-300">Power BI, Pandas, Scikit-learn, Git</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="glass p-6 rounded-lg border border-slate-700">
                <h2 className="text-lg font-bold text-primary mb-4">Contact</h2>
                <div className="space-y-3">
                  <a
                    href="mailto:waghmare.aman007@gmail.com"
                    className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    <span className="text-sm">waghmare.aman007@gmail.com</span>
                  </a>
                  <a
                    href="tel:+918624915699"
                    className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <span className="text-sm">+91 8624915699</span>
                  </a>
                  <a
                    href="https://github.com/aman-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">github.com/aman-2022</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/aman-waghmare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <Linkedin size={16} />
                    <span className="text-sm">linkedin.com/in/aman-waghmare</span>
                  </a>
                </div>
              </div>

              {/* Download Resume */}
              <a
                href="/resume/Aman_Waghmare_Resume.pdf"
                download="Aman_Waghmare_Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Right Column - Featured Projects */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
                <p className="text-slate-400 text-sm">Key achievements and production-ready applications</p>
              </div>

              <div className="space-y-4">
                {projects.slice(0, 4).map((project) => (
                  <motion.div
                    key={project.id}
                    className="glass p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-xs font-semibold text-primary uppercase">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-3">
                      {project.shortDescription}
                    </p>

                    <div className="mb-3">
                      <p className="text-xs text-slate-400 mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-dark-700 text-slate-300 rounded border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.highlights && (
                      <ul className="space-y-1 mb-3">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-slate-400 flex items-start space-x-2"
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-primary border border-slate-600 rounded transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs font-medium text-dark-900 bg-primary hover:bg-secondary rounded transition-colors"
                      >
                        Demo
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <div className="glass p-4 rounded-lg text-center border border-slate-700">
                  <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                  <p className="text-xs text-slate-400">Data Records</p>
                </div>
                <div className="glass p-4 rounded-lg text-center border border-slate-700">
                  <div className="text-2xl font-bold text-primary mb-1">40%</div>
                  <p className="text-xs text-slate-400">Query Optimization</p>
                </div>
                <div className="glass p-4 rounded-lg text-center border border-slate-700">
                  <div className="text-2xl font-bold text-primary mb-1">&lt;500ms</div>
                  <p className="text-xs text-slate-400">API Response</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between"
          >
            <p className="text-slate-400 text-sm">
              © 2026 Aman Waghmare | Data Science × Analytics × AI × Software
            </p>
            <button
              onClick={onClose}
              className="mt-4 sm:mt-0 px-6 py-2 text-sm font-medium border border-slate-600 text-slate-300 hover:border-primary hover:text-primary rounded-lg transition-colors"
            >
              Back to Portfolio
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
