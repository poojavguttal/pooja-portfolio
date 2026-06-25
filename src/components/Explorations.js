'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85', label: 'LLM Pipeline' },
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85', label: 'RAG Architecture' },
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85', label: 'Medical AI' },
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85', label: 'Neural Networks' },
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85', label: 'Computer Vision' },
  { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85', label: 'Data Engineering' },
]

export default function Explorations() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const col1Ref = useRef(null)
  const col2Ref = useRef(null)

  useEffect(() => {
    const initParallax = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current || !col1Ref.current || !col2Ref.current) return

      gsap.to(col1Ref.current, {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(col2Ref.current, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }
    initParallax()
  }, [])

  const col1 = images.slice(0, 3)
  const col2 = images.slice(3, 6)

  return (
    <section ref={sectionRef} className="bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-4">
            Visual{' '}
            <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto mb-8">
            A curated visual collection of AI and engineering projects, experiments, and inspirations.
          </p>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            className="relative group inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 accent-gradient" />
            <span className="relative z-10 rounded-full border border-stroke text-sm px-6 py-2.5 text-muted group-hover:text-text-primary transition-colors duration-200">
              View on Dribbble ↗
            </span>
          </a>
        </motion.div>

        {/* Parallax columns */}
        <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-[900px] mx-auto">
          <div ref={col1Ref} className="flex flex-col gap-5 md:gap-8">
            {col1.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square bg-surface border border-stroke group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-5 md:gap-8 mt-16 md:mt-24">
            {col2.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square bg-surface border border-stroke group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
