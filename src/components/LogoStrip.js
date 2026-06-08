'use client'
import { useEffect, useRef, useState } from 'react'

const companies = [
  {
    logo: '/logos/altumatim.png',
    role: 'Python & AI Engineer',
    style: { height: '28px', width: 'auto' },
  },
  {
    logo: '/logos/Persistent_Systems_Logo.svg.png',
    role: 'Software Engineer',
    style: { height: '38px', width: 'auto' },
  },
  {
    logo: '/logos/umbc.png',
    role: 'Research Assistant',
    style: { height: '40px', width: 'auto' },
  },
  {
    logo: '/logos/L2MRail.png',
    role: 'Software Engineer Intern',
    style: { height: '32px', width: 'auto' },
  },
  {
    logo: '/logos/gowri.png',
    role: 'Python Intern',
    style: { height: '80px', width: 'auto' },
  },
  {
    logo: '/logos/SVIT.png',
    role: 'University Web Developer',
    style: { height: '80px', width: 'auto' },
  },
]

export default function LogoStrip() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '40px 24px 48px',
        background: '#fff9f9',
        borderTop: '0.5px solid #fce7f3',
        borderBottom: '0.5px solid #fce7f3',
        overflow: 'hidden',
      }}
    >
      <p style={{
        textAlign: 'center',
        fontSize: '11px',
        color: '#9ca3af',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        marginBottom: '32px',
      }}>
        Where I've Worked
      </p>
      {/* Desktop: static grid */}
      <div
        className={`logo-strip-grid${visible ? ' logo-strip-row' : ''}`}
        style={{ opacity: visible ? undefined : 0 }}
      >
        {companies.map((company, i) => (
          <div key={i} className="logo-cell" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={company.logo} alt={company.role}
                style={{ objectFit: 'contain', maxWidth: '160px', ...company.style }} />
            </div>
            <p style={{ fontSize: '12px', color: '#e11d48', margin: 0, fontWeight: '500', letterSpacing: '0.3px', textAlign: 'center' }}>
              {company.role}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: auto-scrolling carousel */}
      <div className="logo-strip-mobile-overflow">
        <div className="logo-strip-mobile-track">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexShrink: 0,
            }}>
              <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={company.logo} alt={company.role}
                  style={{ objectFit: 'contain', height: '44px', width: 'auto', maxWidth: '120px' }} />
              </div>
              <p style={{ fontSize: '11px', color: '#e11d48', margin: 0, fontWeight: '500', textAlign: 'center', whiteSpace: 'nowrap' }}>
                {company.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
