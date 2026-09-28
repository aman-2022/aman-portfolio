import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const EducationCard = ({ title, institution, year, details, isLatest }) => (
  <motion.div
    className="relative flex gap-6 md:gap-8"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Timeline Connector */}
    <div className="flex flex-col items-center">
      <motion.div
        className="w-4 h-4 rounded-full border-3 border-primary bg-dark-900 flex items-center justify-center"
        whileHover={{ scale: 1.3 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </motion.div>
      {!isLatest && (
        <div className="w-1 h-24 bg-gradient-to-b from-primary to-slate-700 mt-2"></div>
      )}
    </div>

    {/* Content */}
    <motion.div
      className="glass p-6 rounded-lg border border-slate-700 flex-1 md:mb-12"
      whileHover={{ y: -5, borderColor: '#0ea5e9' }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-primary font-semibold text-sm">{institution}</p>
        </div>
        <span className="text-slate-400 font-medium whitespace-nowrap ml-4">{year}</span>
      </div>
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <p key={idx} className="text-slate-300 text-sm">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  </motion.div>
)

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const educationData = [
    {
      title: 'B.Tech, Data Science',
      institution: 'MGM University, Aurangabad',
      year: '2024 – 2027',
      details: [
        'Currently in 4th year of undergraduate program',
        'Specializing in Data Science, Machine Learning, and Analytics',
        'Coursework: Deep Learning, Data Analytics, Statistics, Digital Image Processing',
        'Strong foundation in full-stack development and database design'
      ],
      isLatest: false
    },
    {
      title: 'Diploma, Computer Science Engineering',
      institution: 'PS College of Aurangabad Polytechnic',
      year: '2021',
      details: [
        'Percentage: 69%',
        'Foundation in Computer Science and programming',
        'Core subjects: Data Structures, Web Development, Databases',
        'Practical experience in software development'
      ],
      isLatest: true
    }
  ]

  return (
    <section id="education" className="py-20 sm:py-32 bg-dark-800">
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
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="md:p-8">
            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <EducationCard
                  key={idx}
                  {...edu}
                  isLatest={idx === educationData.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass p-8 rounded-lg border border-slate-700"
          >
            <div className="flex items-start space-x-4">
              <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-3 gradient-text">Learning Path</h3>
                <p className="text-slate-300 mb-3">
                  From strong fundamentals in computer science to specialized expertise in data science, machine learning, and full-stack development. Continuous learning through real-world projects and coursework in cutting-edge technologies.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="text-lg font-bold text-primary">4+</div>
                    <div className="text-xs text-slate-400">Years Learning</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">10+</div>
                    <div className="text-xs text-slate-400">Specializations</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-slate-400">Coursework Hours</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">4+</div>
                    <div className="text-xs text-slate-400">Live Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
