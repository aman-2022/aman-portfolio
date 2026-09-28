import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ title, skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const descriptions = {
    'Python': 'Core language for data science, ML, and backend development',
    'Java': 'Object-oriented programming and enterprise applications',
    'C': 'Systems programming and algorithm implementation',
    'C++': 'Performance-critical applications and competitive programming',
    'JavaScript': 'Frontend and backend web development',
    'React': 'Modern UI development with component-based architecture',
    'Flask': 'Lightweight Python web framework for APIs and backends',
    'Node.js': 'JavaScript runtime for server-side development',
    'PHP': 'Server-side scripting for web applications',
    'HTML/CSS': 'Web markup and styling',
    'REST APIs': 'Building and consuming RESTful web services',
    'SQL': 'Relational database design and query optimization',
    'MySQL': 'Open-source relational database management',
    'MongoDB': 'NoSQL document database',
    'ETL': 'Extract, Transform, Load data pipelines',
    'Machine Learning': 'Supervised and unsupervised learning algorithms',
    'Deep Learning': 'Neural networks and deep learning frameworks',
    'Data Preprocessing': 'Data cleaning, transformation, and preparation',
    'Feature Engineering': 'Creating meaningful features for models',
    'Statistics': 'Statistical analysis and hypothesis testing',
    'EDA': 'Exploratory Data Analysis and visualization',
    'KNN': 'K-Nearest Neighbors classification algorithm',
    'Regression': 'Linear and non-linear regression modeling',
    'Classification': 'Classification algorithms and techniques',
    'CNN': 'Convolutional Neural Networks for image processing',
    'Pandas': 'Data manipulation and analysis library',
    'NumPy': 'Numerical computing with Python',
    'Scikit-learn': 'Machine learning library for Python',
    'Recharts': 'React charting library for data visualization',
    'Power BI': 'Business intelligence and dashboard creation',
    'Excel': 'Spreadsheet analysis and reporting',
    'Git': 'Version control system',
    'GitHub': 'Git hosting and collaboration platform',
    'VS Code': 'Code editor and development environment',
    'Figma': 'UI/UX design tool',
    'PyCharm': 'Python IDE for development'
  }

  return (
    <motion.div
      className="glass rounded-lg p-8 border border-slate-700"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-6 text-primary">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="px-4 py-2 bg-dark-800 border border-slate-700 rounded-full text-sm font-medium text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {skill}
            {hoveredSkill === skill && (
              <motion.div
                className="mt-2 text-xs text-slate-400 bg-dark-700 p-2 rounded mt-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {descriptions[skill] || 'Proficient in this technology'}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript']
    },
    {
      title: 'Full-Stack Development',
      skills: ['React', 'Flask', 'Node.js', 'PHP', 'HTML/CSS', 'REST APIs']
    },
    {
      title: 'Database & Data Engineering',
      skills: ['SQL', 'MySQL', 'MongoDB', 'ETL']
    },
    {
      title: 'Machine Learning & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'Data Preprocessing', 'Feature Engineering', 'Statistics', 'EDA', 'KNN', 'Regression', 'Classification', 'CNN']
    },
    {
      title: 'Data Analysis & Visualization',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Recharts', 'Power BI', 'Excel']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'PyCharm']
    }
  ]

  return (
    <section id="skills" className="py-20 sm:py-32 bg-dark-800">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <SkillCard title={category.title} skills={category.skills} />
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass p-8 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Core Competencies</h3>
            <p className="text-slate-300 leading-relaxed">
              Full-stack development expertise combining React frontend with Flask/Node.js backends. Advanced data science skills including machine learning, statistical analysis, and data visualization. Strong database design and optimization capabilities. Production-ready application development with focus on performance, scalability, and user experience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
