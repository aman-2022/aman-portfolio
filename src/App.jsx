import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import RecruiterMode from './components/RecruiterMode'

export default function App() {
  const [recruiterMode, setRecruiterMode] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (recruiterMode) {
    return (
      <RecruiterMode 
        onClose={() => setRecruiterMode(false)} 
        reducedMotion={reducedMotion}
      />
    )
  }

  return (
    <div className="bg-dark-900 min-h-screen text-slate-100">
      <Navbar onRecruiterMode={() => setRecruiterMode(true)} />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
