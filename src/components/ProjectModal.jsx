import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-dark-800 rounded-lg border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-slate-300 text-lg">{project.shortDescription}</p>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Overview</h2>
                <p className="text-slate-300">{project.description.overview}</p>
              </div>

              {/* Problem & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="glass p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold mb-3 text-primary">Problem</h3>
                  <p className="text-slate-300 text-sm">{project.description.problem}</p>
                </div>
                <div className="glass p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold mb-3 text-primary">Objective</h3>
                  <p className="text-slate-300 text-sm">{project.description.objective}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.description.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 border border-slate-600 rounded-full text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dataset */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Dataset</h2>
                <p className="text-slate-300">{project.description.dataset}</p>
              </div>

              {/* Methodology */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Methodology</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.description.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary text-dark-900 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              {project.description.results && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Results & Impact</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(project.description.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="glass p-4 rounded-lg border border-slate-700"
                      >
                        <div className="text-2xl font-bold text-primary mb-2">{value}</div>
                        <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Key Highlights</h2>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-slate-300"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-slate-600 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
