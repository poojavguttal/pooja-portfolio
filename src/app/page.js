'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Achievements from '../components/Achievements'
import Community from '../components/Community'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Review from '../components/Review'

export default function Home() {
  return (
    <div style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <Navbar />
      <Hero />
      <About />
      <LogoStrip />
      <Experience />
      <Projects />
      <Research />
      <Achievements />
      <Community />
      <Contact />
      <Footer />
      <Review />
    </div>
  )
}
