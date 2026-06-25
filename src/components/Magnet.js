'use client'
import { useRef, useState } from 'react'

export default function Magnet({
  children,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) / strength
    const y = (e.clientY - (rect.top + rect.height / 2)) / strength
    setPos({ x, y })
  }

  return (
    <div
      ref={ref}
      style={{ display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => { setActive(false); setPos({ x: 0, y: 0 }) }}
    >
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
