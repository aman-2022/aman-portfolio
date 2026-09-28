import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ label, value }) => (
  <motion.div
    className="glass p-6 rounded-lg border border-slate-700"
    whileHover={{ y: -5, borderColor: '#0ea5e9' }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{value}</div>
    <div className="text-sm text-slate-400">{label}</div>
  </motion.div>
)

export default function About() {
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
    <section id="about" className="py-20 sm:py-32 bg-dark-900">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a B.Tech Data Science undergraduate at MGM University (4th year), passionate about transforming data into actionable insights. With a strong foundation in both full-stack development and data science, I build end-to-end solutions that combine technical excellence with practical business value.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                My expertise spans across data analytics, machine learning, software development, and database optimization. I've delivered production-ready applications processing 50,000+ records with optimized query performance and seamless user experiences.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I'm driven by solving real-world problems using technology. Whether it's building analytics platforms, developing recommendation systems, or creating full-stack applications, I approach each project with a focus on scalability, performance, and user-centric design.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I'm looking for opportunities in data analytics, machine learning, software development, and product roles where I can contribute meaningfully and continue learning.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <StatCard label="Education" value="B.Tech" />
              <StatCard label="Graduation" value="2027" />
              <StatCard label="Background" value="CSE Diploma" />
              <StatCard label="Status" value="Fresher" />
              <StatCard label="Projects" value="4+" />
              <StatCard label="Focus Area" value="Data & AI" />
            </motion.div>
          </div>

          {/* Skills Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass p-8 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Key Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <span className="text-slate-300">Full-Stack Development</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <span className="text-slate-300">Data Analytics & Visualization</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <span className="text-slate-300">Machine Learning Solutions</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <span className="text-slate-300">Database Optimization</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
