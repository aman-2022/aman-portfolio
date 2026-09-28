import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'waghmare.aman007@gmail.com',
      href: 'mailto:waghmare.aman007@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8624915699',
      href: 'tel:+918624915699'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/aman-2022',
      href: 'https://github.com/aman-2022'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aman-waghmare',
      href: 'https://linkedin.com/in/aman-waghmare'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Aurangabad, Maharashtra',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Build <span className="gradient-text">Something Useful</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm open to opportunities, internships, collaborations, and projects involving data, analytics, AI, and software development. Let's connect!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="glass rounded-lg p-6 border border-slate-700 hover:border-primary transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">{info.label}</p>
                        <p className="text-slate-300 font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass rounded-lg p-8 border border-slate-700 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-dark-700 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    ✗ Error sending message. Please try again or contact me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center glass p-8 rounded-lg border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-4">Prefer Direct Communication?</h3>
            <p className="text-slate-300 mb-6">
              Reach out directly via email or call me. I'm usually available for a quick chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:waghmare.aman007@gmail.com"
                className="px-6 py-3 bg-primary hover:bg-secondary text-dark-900 font-bold rounded-lg transition-colors"
              >
                Send Email
              </a>
              <a
                href="tel:+918624915699"
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-900 font-bold rounded-lg transition-colors"
              >
                Call Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
