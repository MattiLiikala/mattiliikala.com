import { useEffect, useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'

function Home() {
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem('homeScroll')
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10))
      sessionStorage.removeItem('homeScroll')
    }
  }, [])

  useEffect(() => {
    return () => {
      sessionStorage.setItem('homeScroll', String(window.scrollY))
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}
