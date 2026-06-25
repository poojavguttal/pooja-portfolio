'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .hover-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    let frame
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      {/* outer trailing glow */}
      <div style={{
        position: 'fixed',
        left: trail.x,
        top: trail.y,
        width: hovered ? '48px' : '32px',
        height: hovered ? '48px' : '32px',
        borderRadius: '50%',
        border: '1px solid rgba(225,29,72,0.5)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        boxShadow: '0 0 16px rgba(225,29,72,0.25)',
      }} />
      {/* inner dot */}
      <div style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#e11d48',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
        boxShadow: '0 0 10px rgba(225,29,72,0.8)',
      }} />
    </>
  )
}
