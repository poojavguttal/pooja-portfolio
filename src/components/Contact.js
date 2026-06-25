'use client'
import FadeIn from './FadeIn'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const links = [
  { label: 'Email',    href: 'mailto:poojaguttal.md@gmail.com',    icon: FiMail     },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/poojaguttal', icon: FiLinkedin },
  { label: 'GitHub',   href: 'https://github.com/poojavguttal',     icon: FiGithub   },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 text-center"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Let&apos;s connect
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <p
          className="font-light uppercase tracking-wide mx-auto mb-10 sm:mb-12"
          style={{ color: '#D7E2EA', opacity: 0.55, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', maxWidth: '480px' }}
        >
          Open to new opportunities, research collaborations, and building something amazing together.
        </p>
      </FadeIn>

      <FadeIn delay={0.35} y={20}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-2.5 rounded-full px-7 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
              style={{
                background: 'transparent',
                border: '1px solid rgba(215,226,234,0.35)',
                color: '#D7E2EA',
                textDecoration: 'none',
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
