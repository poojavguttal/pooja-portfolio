'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const items = [
  {
    src: '/logos/rewriting_the_code_logo.jpeg',
    label: 'Rewriting the Code',
    desc: 'Community empowering college women and non-binary students in tech through mentorship, resources, and opportunities.',
    tag: 'Women in Tech',
  },
  {
    src: '/community/aws-she-builds.jpeg',
    label: 'AWS She Builds',
    desc: 'Empowering women in tech through mentorship, cloud skills, and community building.',
    tag: 'Cloud · Community',
  },
  {
    src: '/community/avisa.jpeg',
    label: 'Avisa Trust',
    desc: 'Bangalore-based NGO uplifting underserved communities through health and hygiene.',
    tag: 'NGO · Social Impact',
  },
]

export default function Community() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="community"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10"
      style={{ background: '#0C0C0C', position: 'relative', zIndex: 10 }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Community
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-6 rounded-2xl p-4 cursor-default"
            style={{ background: 'rgba(215,226,234,0.04)', border: '1px solid rgba(215,226,234,0.10)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: '-40px' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              background: hovered === i ? 'rgba(215,226,234,0.08)' : 'rgba(215,226,234,0.04)',
              borderColor: hovered === i ? 'rgba(215,226,234,0.25)' : 'rgba(215,226,234,0.10)',
            }}
          >
            {/* Photo */}
            <div className="flex-shrink-0 rounded-xl overflow-hidden" style={{ width: '160px', height: '110px', background: 'rgba(215,226,234,0.06)' }}>
              <motion.img
                src={item.src}
                alt={item.label}
                className="w-full h-full"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                animate={{ scale: hovered === i ? 1.05 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span
                className="font-light uppercase tracking-widest"
                style={{ fontSize: '0.6rem', color: '#D7E2EA', opacity: 0.7 }}
              >
                {item.tag}
              </span>
              <h3
                className="font-semibold uppercase tracking-tight"
                style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)', color: '#D7E2EA' }}
              >
                {item.label}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.88rem)', color: '#D7E2EA', opacity: 0.75 }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
