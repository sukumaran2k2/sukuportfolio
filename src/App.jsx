import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Certificate/>
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
