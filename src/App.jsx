import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Accessibility from './components/Accessibility'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import NotFound from './components/NotFound'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoaded,    setIsLoaded]    = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)

  useEffect(() => { setIsLoaded(true) }, [])

  const path   = window.location.pathname
  const isHome = path === '/' || path === '/index.html'

  if (!isHome && !path.startsWith('/documents/') && !path.startsWith('/images/')) {
    return (
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        <main><NotFound /></main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      {!loadingDone && <LoadingScreen onComplete={() => setLoadingDone(true)} />}
      <div className={`relative min-h-screen transition-opacity duration-700 ${loadingDone ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Accessibility />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
