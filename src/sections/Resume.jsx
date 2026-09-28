import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="resume" className="py-20 sm:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Take a Closer Look</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Download my comprehensive resume to explore my complete education, technical skills, projects, certifications, and career objectives.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-lg border border-slate-700">
                    <div className="text-2xl font-bold text-primary mb-2">4+</div>
                    <div className="text-sm text-slate-400">Production Projects</div>
                  </div>
                  <div className="glass p-4 rounded-lg border border-slate-700">
                    <div className="text-2xl font-bold text-primary mb-2">35+</div>
                    <div className="text-sm text-slate-400">Technical Skills</div>
                  </div>
                  <div className="glass p-4 rounded-lg border border-slate-700">
                    <div className="text-2xl font-bold text-primary mb-2">Full-Stack</div>
                    <div className="text-sm text-slate-400">Expertise</div>
                  </div>
                  <div className="glass p-4 rounded-lg border border-slate-700">
                    <div className="text-2xl font-bold text-primary mb-2">B.Tech</div>
                    <div className="text-sm text-slate-400">Data Science</div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3">Resume Highlights</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Full-Stack Development: React, Flask, MySQL, Node.js</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Data Science & ML: Python, Scikit-learn, Deep Learning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Production-Ready Systems: 50K+ records, &lt;500ms APIs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Database Design & Optimization: 40% query improvement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Business Analytics: Power BI, Excel, Data Visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right - Resume Card */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-32">
                <motion.div
                  className="glass rounded-lg border border-slate-700 overflow-hidden"
                  whileHover={{ y: -10, borderColor: '#0ea5e9' }}
                >
                  {/* Preview */}
                  <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <FileText size={48} className="text-slate-400 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-slate-600">Resume</div>
                      <div className="text-xs text-slate-500">2 Pages</div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">
                        PDF Version
                      </p>
                      <a
  href="/resume/Aman_Waghmare_Resume.pdf"
  download="Aman_Waghmare_Resume.pdf"
  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors"
>
  <Download size={20} />
  <span>Download PDF</span>
</a>
                    </div>

                    <a
  href="/resume/Aman_Waghmare_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center px-4 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-900 font-bold rounded-lg transition-colors"
>
  View Resume
</a>

                    <div className="pt-4 border-t border-slate-700 space-y-2 text-xs text-slate-400">
                      <div className="flex justify-between">
                        <span>File Size:</span>
                        <span className="text-slate-300">~500 KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="text-slate-300">PDF</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Updated:</span>
                        <span className="text-slate-300">2026</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Alternative Format */}
                <motion.div
                  className="mt-4 glass rounded-lg p-4 border border-slate-700 text-center"
                  whileHover={{ y: -2 }}
                >
                  <p className="text-xs text-slate-400 mb-3">Alternative Format</p>
                  <button className="w-full px-4 py-2 text-sm font-semibold text-slate-300 border border-slate-600 hover:border-primary hover:text-primary rounded transition-colors">
                    View as HTML
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
