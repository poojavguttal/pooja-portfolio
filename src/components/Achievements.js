'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const achievements = [
  { number: '01', title: "UMBC Hack '25",                  sub: 'University of Maryland'      },
  { number: '02', title: 'Guest Speaker — Generative AI',   sub: 'SVIT · Jan 2024'           },
  { number: '03', title: 'State-Level Tech Co-ordinator',   sub: 'State-level events'         },
  { number: '04', title: 'College Website Developer',       sub: 'SVIT'                       },
  { number: '05', title: 'Department Distinction',          sub: 'SVIT · Academic excellence' },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0C0C0C' }}
        >
          Highlights
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="group flex items-center justify-between gap-6 py-6 sm:py-8 cursor-default"
            style={{
              borderBottom: '1px solid rgba(12,12,12,0.10)',
              borderTop: i === 0 ? '1px solid rgba(12,12,12,0.10)' : 'none',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: '-40px' }}
          >
            {/* Number */}
            <span
              className="font-black flex-shrink-0 leading-none transition-all duration-300 group-hover:opacity-100"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#0C0C0C', opacity: 0.15 }}
            >
              {a.number}
            </span>

            {/* Title */}
            <p
              className="flex-1 font-bold uppercase tracking-tight transition-all duration-300 group-hover:tracking-widest"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.3rem)', color: '#0C0C0C' }}
            >
              {a.title}
            </p>

            {/* Sub */}
            <span
              className="flex-shrink-0 font-light uppercase tracking-widest hidden sm:block transition-opacity duration-300 group-hover:opacity-100"
              style={{ fontSize: '0.65rem', color: '#0C0C0C', opacity: 0.55 }}
            >
              {a.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
