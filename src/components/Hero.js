'use client'
import FadeIn from './FadeIn'
import Magnet from './Magnet'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center px-6 md:px-10 pt-20 md:pt-24 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex items-center gap-8 md:gap-12 w-full max-w-5xl">

        {/* Left — text content */}
        <div className="flex flex-col gap-5 z-20 flex-1 min-w-0">

          <FadeIn delay={0.1} y={20}>
            <span
              className="font-light uppercase tracking-[0.3em] text-xs sm:text-sm"
              style={{ color: '#D7E2EA', opacity: 0.75 }}
            >
              Software &amp; AI Engineer
            </span>
          </FadeIn>

          <div className="overflow-hidden">
            <FadeIn delay={0.2} y={40}>
              <h1
                className="hero-heading font-black uppercase tracking-tight leading-none"
                style={{ fontSize: 'clamp(3.2rem, 7.5vw, 8rem)' }}
              >
                Hi, i&apos;m<br />Pooja
              </h1>
            </FadeIn>
          </div>

          <FadeIn delay={0.38} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug"
              style={{
                color: '#D7E2EA',
                opacity: 0.55,
                fontSize: 'clamp(0.72rem, 1.2vw, 1rem)',
                maxWidth: '300px',
              }}
            >
            Designing and engineering impactful solutions that solve real-world problems, empower users, and contribute to a better, more inclusive future.
            </p>
          </FadeIn>

        </div>

        {/* Right — portrait */}
        <FadeIn
          delay={0.55}
          y={30}
          className="flex-shrink-0 z-10 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px]"
        >
          <Magnet
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/photo.jpg"
              alt="Pooja Guttal"
              style={{ width: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Magnet>
        </FadeIn>

      </div>
    </section>
  )
}
