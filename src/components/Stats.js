'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 2.5, suffix: '+', label: 'Years Experience', sub: 'Software & AI Engineering' },
  { value: 10,  suffix: '+', label: 'Projects Shipped', sub: 'From research to production' },
  { value: 3,   suffix: '',  label: 'Research Papers', sub: 'NLP, LLMs & ML' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-3 accent-gradient-text">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-medium text-text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-muted">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
