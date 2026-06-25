'use client'
import { motion } from 'framer-motion'

const companies = [
  { name: 'Altumatim',          logo: '/logos/altumatim.png'                  },
  { name: 'UMBC',               logo: '/logos/umbc.png'                        },
  { name: 'Persistent Systems', logo: '/logos/Persistent_Systems_Logo.svg.png' },
  { name: 'L2MRail',            logo: '/logos/L2MRail.png'                     },
  { name: 'Gowri Enterprises',  logo: '/logos/gowri.png'                       },
]

export default function LogoStrip() {
  return (
    <section
      className="py-20 sm:py-24 px-6 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <motion.p
        className="text-center font-light uppercase tracking-[0.3em] mb-16"
        style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)', color: '#D7E2EA', opacity: 0.45 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.45, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Where I&apos;ve Worked
      </motion.p>

      <div className="flex flex-nowrap justify-center items-center gap-6">
        {companies.map((c, i) => (
          <motion.div
            key={i}
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '18px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4, scale: 1.06, transition: { duration: 0.2 } }}
          >
            <img
              src={c.logo}
              alt={c.name}
              style={{ height: '52px', width: 'auto', maxWidth: '160px', objectFit: 'contain', display: 'block' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
