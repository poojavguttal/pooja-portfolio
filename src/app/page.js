'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <LogoStrip />
      <Experience />
      <Projects />
      <Research />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
    </main>
  )
}
