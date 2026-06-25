'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const termColors = {
  'ACII 2026':        '#A78BFA',
  'arXiv':            '#F59E0B',
  'First Author':     '#34D399',
  'Best MS Research': '#FBBF24',
}

function HL({ text }) {
  if (!text) return null
  let parts = [{ text, hl: false }]
  Object.entries(termColors).forEach(([term, color]) => {
    parts = parts.flatMap(p => {
      if (p.hl) return [p]
      const segs = p.text.split(term)
      if (segs.length === 1) return [p]
      return segs.flatMap((s, i) => {
        const out = []
        if (s) out.push({ text: s, hl: false })
        if (i < segs.length - 1) out.push({ text: term, hl: true, color })
        return out
      })
    })
  })
  return <>{parts.map((p, i) => p.hl ? <span key={i} style={{ color: p.color, fontWeight: 600 }}>{p.text}</span> : p.text)}</>
}

const papers = [
  {
    number: '01',
    title: 'Where do LLMs Fall Short in CBT-Guided Affective Reasoning?',
    venue: 'ACII 2026 — Accepted as Full Paper',
    award: 'Best MS Research, CSEE 2026',
    authors: 'Pooja Guttal',
    link: 'https://drive.google.com/file/d/1E6G2K81H3Q12_Q90ExIva4Lx3U1YIe95/view?usp=sharing',
    tag: 'Accepted',
  },
  {
    number: '02',
    title: 'Structure-Aware Chunking for Tabular Data in RAG',
    venue: 'arXiv · 2025',
    award: null,
    authors: 'Pooja Guttal · First Author',
    link: 'https://arxiv.org/abs/2605.00318',
    tag: 'Published',
  },
  {
    number: '03',
    title: 'Controlling Hallucinations in LLMs for Genre-Specific Storytelling',
    venue: null,
    award: null,
    authors: 'Pooja Guttal',
    link: 'https://drive.google.com/file/d/1MKBgnG6cDYgqP2zVJDLY8DN0DdCC45kR/view?usp=sharing',
    tag: 'Preprint',
  },
]

const tagColors = {
  Accepted:  { bg: '#7621B0', color: '#fff' },
  Published: { bg: '#0C7A45', color: '#fff' },
  Preprint:  { bg: 'rgba(215,226,234,0.15)', color: '#D7E2EA' },
}

export default function Research() {
  return (
    <section
      id="research"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Research
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {papers.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-4 p-7 sm:p-8 rounded-3xl"
            style={{
              background: 'rgba(215,226,234,0.05)',
              border: '1px solid rgba(215,226,234,0.15)',
              textDecoration: 'none',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: '-60px' }}
            whileHover={{
              background: 'rgba(215,226,234,0.09)',
              borderColor: 'rgba(215,226,234,0.4)',
              x: 6,
              transition: { duration: 0.2 },
            }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <motion.span
                  className="font-black leading-none"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: '#D7E2EA', opacity: 0.45 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.45 }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {p.number}
                </motion.span>
                <motion.span
                  className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest"
                  style={{ background: tagColors[p.tag].bg, color: tagColors[p.tag].color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.35, ease: 'backOut' }}
                  viewport={{ once: false }}
                >
                  {p.tag}
                </motion.span>
                {p.award && (
                  <motion.span
                    className="font-light uppercase tracking-widest hidden sm:inline"
                    style={{ fontSize: '0.6rem', color: '#D7E2EA', opacity: 0.65 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.65 }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.4 }}
                    viewport={{ once: false }}
                  >
                    <HL text={p.award} />
                  </motion.span>
                )}
              </div>
              <span
                className="flex-shrink-0 text-base transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: '#D7E2EA', opacity: 0.6 }}
              >
                →
              </span>
            </div>

            {/* Title */}
            <p
              className="font-medium leading-snug"
              style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.2rem)', color: '#D7E2EA' }}
            >
              {p.title}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-light" style={{ fontSize: '0.78rem', color: '#D7E2EA', opacity: 0.7 }}>
                <HL text={p.authors} />
              </span>
              {p.venue && (
                <>
                  <span style={{ color: '#D7E2EA', opacity: 0.4, fontSize: '0.7rem' }}>·</span>
                  <span className="font-light" style={{ fontSize: '0.78rem', color: '#D7E2EA', opacity: 0.65 }}>
                    <HL text={p.venue} />
                  </span>
                </>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
