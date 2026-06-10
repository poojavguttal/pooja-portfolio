'use client'
import { useEffect, useState } from 'react'

const greetings = {
  morning:   (city) => city ? `It's a good morning in ${city}!` : `Good morning!`,
  afternoon: (city) => city ? `It's a lovely afternoon in ${city}!` : `Good afternoon!`,
  evening:   (city) => city ? `It's a good evening in ${city}!` : `Good evening!`,
  night:     (city) => city ? `It's late night in ${city}!` : `It's late night!`,
  day:       (city) => city ? `Hello from ${city}!` : `Hello!`,
}

export default function VisitorGreeting() {
  const [data, setData] = useState(null)
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  const dismiss = () => {
    setFading(true)
    setTimeout(() => setVisible(false), 400)
  }

  useEffect(() => {
    fetch('/api/visit')
      .then(r => r.json())
      .then(d => {
        setData(d)
        setVisible(true)

        const t = setTimeout(dismiss, 8000)
        return () => clearTimeout(t)
      })
      .catch(() => {})
  }, [])

  if (!visible || !data) return null

  const greeting = (greetings[data.timeOfDay] || greetings.day)(data.city)

  return (
    <div style={{
      position: 'fixed',
      top: '84px',
      right: '24px',
      zIndex: 999,
      background: '#fff',
      border: '1px solid #fda4af',
      borderRadius: '20px',
      padding: '28px 32px',
      maxWidth: '420px',
      boxShadow: '0 12px 40px rgba(225,29,72,0.14)',
      opacity: fading ? 0 : 1,
      transform: fading ? 'translateY(-10px)' : 'translateY(0)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      animation: 'greetSlideIn 0.4s ease',
    }}>
      <button
        onClick={dismiss}
        style={{
          position: 'absolute', top: '14px', right: '18px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#9ca3af', fontSize: '20px', lineHeight: 1, padding: 0,
        }}
      >×</button>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '22px',
        fontWeight: '600',
        color: '#e11d48',
        marginBottom: '10px',
        marginRight: '20px',
        lineHeight: '1.3',
      }}>
        {greeting}
      </p>
      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.8', margin: 0 }}>
        Thank you for clicking to know more about me!
      </p>
    </div>
  )
}
