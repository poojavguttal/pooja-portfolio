'use client'
import { useEffect, useRef } from 'react'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/poojaguttal' },
  { label: 'GitHub',   href: 'https://github.com/poojavguttal' },
  { label: 'Email',    href: 'mailto:poojaguttal.md@gmail.com' },
]

const MARQUEE_TEXT = 'BUILDING THE FUTURE • '

export default function ContactFooter() {
  const videoRef = useRef(null)
  const marqueeRef = useRef(null)

  // HLS background
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const src = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
    import('hls.js').then(({ default: Hls }) => {
      if (Hls.isSupported()) {
        const hls = new Hls({ startLevel: -1 })
        hls.loadSource(src)
        hls.attachMedia(video)
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
      }
    })
  }, [])

  // GSAP marquee
  useEffect(() => {
    const initMarquee = async () => {
      const { gsap } = await import('gsap')
      if (!marqueeRef.current) return
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    }
    initMarquee()
  }, [])

  return (
    <footer id="contact" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* HLS background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-20 border-y border-stroke/50 py-4">
          <div ref={marqueeRef} className="flex whitespace-nowrap" style={{ width: 'max-content' }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-display italic text-text-primary/20 mx-4"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Get in touch</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-8">
              Let&apos;s build something
              <br />
              <span className="font-display italic accent-gradient-text">incredible.</span>
            </h2>

            <a
              href="mailto:poojaguttal.md@gmail.com"
              className="relative group inline-flex"
            >
              <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 accent-gradient" />
              <span className="relative z-10 rounded-full border border-stroke text-sm md:text-base px-8 py-4 text-text-primary group-hover:border-transparent transition-all duration-200">
                poojaguttal.md@gmail.com ↗
              </span>
            </a>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
            {/* Social links */}
            <div className="flex items-center gap-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted hover:text-text-primary transition-colors duration-200 uppercase tracking-[0.15em]"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Available indicator */}
            <div className="flex items-center gap-2">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <div className="relative rounded-full w-2 h-2 bg-emerald-500" />
              </div>
              <span className="text-xs text-muted">Available for projects</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Pooja Guttal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
