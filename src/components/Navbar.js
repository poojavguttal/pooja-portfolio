'use client'
import { useState } from 'react'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 48px',
        background: '#fff9f9',
        borderBottom: '0.5px solid #fce7f3',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <img src="/pg-logo.png" alt="PG" style={{ height: '48px', width: 'auto' }} />

        <div className="nav-links">
          {['About', 'Experience', 'Projects', 'Research', 'Achievements', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontSize: '13px', color: '#6b7280', textDecoration: 'none', letterSpacing: '0.5px',
            }}
              onMouseEnter={e => e.target.style.color = '#e11d48'}
              onMouseLeave={e => e.target.style.color = '#6b7280'}
            >{item}</a>
          ))}
        </div>

        <div className="nav-socials">
          <a href="https://linkedin.com/in/poojaguttal" target="_blank" rel="noreferrer"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiLinkedin size={18} />
          </a>
          <a href="https://github.com/poojavguttal" target="_blank" rel="noreferrer"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiGithub size={18} />
          </a>
          <a href="mailto:poojaguttal.md@gmail.com"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiMail size={18} />
          </a>
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['About', 'Experience', 'Projects', 'Research', 'Achievements', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}
          >{item}</a>
        ))}
        <div style={{ display: 'flex', gap: '16px', paddingTop: '8px', borderTop: '0.5px solid #fce7f3' }}>
          <a href="https://linkedin.com/in/poojaguttal" target="_blank" rel="noreferrer"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiLinkedin size={18} />
          </a>
          <a href="https://github.com/poojavguttal" target="_blank" rel="noreferrer"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiGithub size={18} />
          </a>
          <a href="mailto:pooja@altumatim.com"
            style={{ color: '#e11d48', display: 'flex', alignItems: 'center' }}>
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </>
  )
}
