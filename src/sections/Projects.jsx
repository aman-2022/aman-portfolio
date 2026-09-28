import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

const ProjectCard = ({ project, onViewDetails }) => (
  <motion.div
    className="group glass rounded-lg overflow-hidden border border-slate-700 cursor-pointer h-full flex flex-col"
    whileHover={{ y: -10, borderColor: '#0ea5e9' }}
    transition={{ duration: 0.3 }}
    onClick={() => onViewDetails(project)}
  >
    {/* Image Placeholder */}
    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
            {project.title.split(' ')[0]}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-4">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {project.category}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-dark-700 text-slate-300 rounded border border-slate-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-dark-700 text-slate-300 rounded border border-slate-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-4 flex-1">
        <div className="space-y-1">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
              <span className="text-primary">▸</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-slate-700">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-primary border border-slate-600 rounded transition-colors"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-dark-900 bg-primary hover:bg-secondary rounded transition-colors"
        >
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
      </div>

      {/* View Details */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onViewDetails(project)
        }}
        className="mt-4 w-full py-2 text-sm font-bold text-primary border border-primary hover:bg-primary hover:text-dark-900 rounded transition-colors"
      >
        View Case Study
      </button>
    </div>
  </motion.div>
)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

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

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 sm:py-32 bg-dark-900">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass p-8 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Project Statistics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-slate-400">Data Points Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-slate-400">Production Applications</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
