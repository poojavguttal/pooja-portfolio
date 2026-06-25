'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['Design', 'Create', 'Inspire']

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length)
    }, 900)

    const duration = 2700
    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const value = Math.floor(progress * 100)
      setCount(value)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        clearInterval(wordInterval)
        setTimeout(onComplete, 400)
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      clearInterval(wordInterval)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Top-left label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 md:top-8 md:left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center rotating word */}
      <div className="text-center select-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 block"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className="absolute bottom-10 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none select-none">
        {String(count).padStart(3, '0')}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full accent-gradient"
          style={{
            scaleX: count / 100,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
        />
      </div>
    </motion.div>
  )
}
