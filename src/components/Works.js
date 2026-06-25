'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    span: 7,
    title: 'CBT-Guided AI',
    sub: 'Research · NLP · LLMs',
    award: '🏆 Best MS Research 2026',
    href: 'https://github.com/poojavguttal/CBT_LLM',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    span: 5,
    title: 'FactMed Chatbot',
    sub: 'AI · RAG · BioBERT',
    href: 'https://github.com/poojaguttalmd/RAG_Medical_Chatbot',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    span: 5,
    title: 'Plant Disease AI',
    sub: 'CNN · GCP · Docker',
    href: 'https://github.com/poojavguttal/Plant-Disease-Detection-As-A-Service',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  },
  {
    span: 7,
    title: 'Find Me Platform',
    sub: 'Full Stack · Django · JWT',
    award: '🏆 Best BS Project, ISEE',
    href: 'https://github.com/poojavguttal/FindMe',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer block"
      style={{ aspectRatio: project.span === 7 ? '16/10' : '4/3' }}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Halftone overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg flex items-end p-6">
        <div className="relative inline-flex">
          <span className="absolute inset-[-2px] rounded-full accent-gradient" />
          <span className="relative z-10 rounded-full bg-text-primary text-bg text-sm font-medium px-5 py-2.5">
            View —{' '}
            <span className="font-display italic">{project.title}</span>
          </span>
        </div>
      </div>

      {/* Default label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-bg/80 to-transparent">
        <p className="text-xs text-muted uppercase tracking-[0.2em] mb-1">{project.sub}</p>
        <p className="text-base font-medium text-text-primary">
          {project.title}
        </p>
        {project.award && (
          <p className="text-xs text-muted mt-1">{project.award}</p>
        )}
      </div>
    </a>
  )
}

export default function Works() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary">
              Featured{' '}
              <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              A selection of projects I&apos;ve worked on, from concept to launch.
            </p>
          </div>

          <a
            href="https://github.com/poojavguttal"
            target="_blank"
            rel="noreferrer"
            className="relative group hidden md:inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 accent-gradient" />
            <span className="relative z-10 rounded-full border border-stroke text-sm px-5 py-2.5 text-muted group-hover:text-text-primary transition-colors duration-200">
              View all work →
            </span>
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              style={{ gridColumn: `span ${project.span}` }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
