'use client'
import { motion } from 'framer-motion'

const entries = [
  {
    title: 'Structure-Aware Chunking for Tabular Data in RAG',
    tag: 'Research',
    time: '8 min read',
    date: 'May 2025',
    href: 'https://arxiv.org/abs/2605.00318',
    color: '#89AACC',
  },
  {
    title: 'Where do LLMs Fall Short in CBT-Guided Affective Reasoning?',
    tag: 'NLP · ACII',
    time: '10 min read',
    date: 'Apr 2025',
    href: 'https://drive.google.com/file/d/1E6G2K81H3Q12_Q90ExIva4Lx3U1YIe95/view',
    color: '#7B9EC8',
    award: '🏆 Best MS Research',
  },
  {
    title: 'Controlling Hallucinations in LLMs for Genre-Specific Storytelling',
    tag: 'LLMs',
    time: '7 min read',
    date: 'Mar 2025',
    href: 'https://drive.google.com/file/d/1MKBgnG6cDYgqP2zVJDLY8DN0DdCC45kR/view',
    color: '#5E87BE',
  },
  {
    title: 'Smart Grid Anomaly Detection with XGBoost, LSTM & Random Forest',
    tag: 'ML · Time Series',
    time: '6 min read',
    date: 'Jan 2025',
    href: 'https://github.com/leann-z/smart-grid-anomaly-detection',
    color: '#4E7AB0',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Research</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary">
              Recent{' '}
              <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              Research papers and explorations in AI, NLP, and machine learning.
            </p>
          </div>

          <a
            href="https://arxiv.org/search/?query=pooja+guttal"
            target="_blank"
            rel="noreferrer"
            className="relative group hidden md:inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 accent-gradient" />
            <span className="relative z-10 rounded-full border border-stroke text-sm px-5 py-2.5 text-muted group-hover:text-text-primary transition-colors duration-200">
              View all →
            </span>
          </a>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <motion.a
              key={i}
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 group no-underline"
            >
              {/* Color dot */}
              <div
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-lg"
                style={{ background: entry.color + '22', border: `1px solid ${entry.color}44` }}
              >
                <span style={{ color: entry.color }}>📄</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">{entry.tag}</span>
                  {entry.award && (
                    <span className="text-xs text-muted">· {entry.award}</span>
                  )}
                </div>
                <p className="text-sm md:text-base text-text-primary font-medium group-hover:accent-gradient-text transition-all duration-200 truncate">
                  {entry.title}
                </p>
              </div>

              {/* Meta */}
              <div className="flex-shrink-0 text-right hidden sm:block">
                <p className="text-xs text-muted">{entry.time}</p>
                <p className="text-xs text-muted mt-0.5">{entry.date}</p>
              </div>

              {/* Arrow */}
              <span className="text-muted group-hover:text-text-primary transition-colors duration-200 flex-shrink-0">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
