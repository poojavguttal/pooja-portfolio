'use client'
import { useEffect, useState } from 'react'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Research',   href: '#research' },
  { label: 'Highlights', href: '#achievements' },
  { label: 'Community',  href: '#community' },
  { label: 'Contact',    href: '#contact' },
]

const socials = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/poojaguttal',   label: 'LinkedIn' },
  { icon: FiGithub,   href: 'https://github.com/poojavguttal',       label: 'GitHub' },
  { icon: FiMail,     href: 'mailto:poojaguttal.md@gmail.com',       label: 'Email' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 md:py-6 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(12,12,12,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      {/* Left — name */}
      <span
        className="text-sm md:text-base font-medium uppercase tracking-widest"
        style={{ color: '#D7E2EA', opacity: 0.6 }}
      >
        Pooja Guttal
      </span>

      {/* Center — nav links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm lg:text-base font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA', textDecoration: 'none' }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right — social icons */}
      <div className="flex items-center gap-4 md:gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className="transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA' }}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </nav>
  )
}
