'use client'
import { useEffect, useState } from 'react'

export default function Intro({ onComplete }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 400)
    const t2 = setTimeout(() => setStep(2), 1200)
    const t3 = setTimeout(() => setStep(3), 2000)
    const t4 = setTimeout(() => onComplete(), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#1a1a4e',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '32px',
      opacity: step === 3 ? 0 : 1,
      transition: step === 3 ? 'opacity 0.8s ease' : 'none',
    }}>
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${(i * 37 + 11) % 95}%`,
          top: `${(i * 53 + 7) % 85}%`,
          width: i % 3 === 0 ? '4px' : '2px',
          height: i % 3 === 0 ? '4px' : '2px',
          background: '#ffffff',
          animation: `starTwinkle ${1.5 + (i % 3) * 0.5}s ease-in-out infinite`,
          animationDelay: `${(i * 0.3) % 2}s`,
        }} />
      ))}

      <div style={{
        fontFamily: 'Press Start 2P, monospace', textAlign: 'center',
        opacity: step >= 1 ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        <div style={{ fontSize: '10px', color: '#ffd700', letterSpacing: '3px', marginBottom: '20px' }}>
          ★ PORTFOLIO PRESENTS ★
        </div>
        <div style={{
          fontSize: 'clamp(28px, 6vw, 56px)', color: '#ffffff',
          textShadow: '4px 4px 0 #e11d48',
          lineHeight: 1.4,
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? 'scale(1)' : 'scale(0.7)',
          transition: 'opacity 0.5s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          POOJA<br />GUTTAL
        </div>
      </div>

      <div style={{
        fontFamily: 'Press Start 2P, monospace', fontSize: '9px',
        color: '#a0a0ff', letterSpacing: '2px',
        opacity: step >= 2 ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        SOFTWARE &amp; AI ENGINEER
      </div>

      <div style={{
        fontFamily: 'Press Start 2P, monospace', fontSize: '9px',
        color: '#ffd700',
        animation: 'blink 0.9s step-start infinite',
        opacity: step >= 2 ? 1 : 0,
        transition: 'opacity 0.4s ease',
        marginTop: '16px',
      }}>
        ▶ PRESS START
      </div>
    </div>
  )
}
