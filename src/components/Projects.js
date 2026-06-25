'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const projects = [
  {
    number: '01',
    category: 'Research · NLP · LLMs',
    name: 'CBT-Guided AI for Mental Health',
    award: 'Best MS Research 2026 — CSEE, UMBC',
    description: 'Built a knowledge-guided NLP framework using knowledge graph retrieval, cognitive model and NLI filtering to enable clinically grounded LLM reasoning. Evaluated Chain-of-Thought prompting across 4 open-source models, achieving 66.7% therapeutic reasoning adherence.',
    tech: ['NLP', 'LLMs', 'SNOMED CT', 'NLI', 'Python'],
    github: 'https://github.com/poojavguttal/CBT_LLM',
  },
  {
    number: '02',
    category: 'AI · RAG · FastAPI',
    name: 'FactMed — AI Medical Chatbot',
    award: null,
    description: 'RAG-based medical chatbot using FAISS vector search and BioBERT embeddings over 47,000+ medical Q&A pairs. Designed retrieval pipeline to surface relevant context before generation, reducing hallucinations and grounding responses in verified medical literature.',
    tech: ['RAG', 'FAISS', 'BioBERT', 'LLaMA-2', 'FastAPI'],
    github: 'https://github.com/poojaguttalmd/RAG_Medical_Chatbot',
  },
  {
    number: '03',
    category: 'ML · Computer Vision · GCP',
    name: 'Plant Disease Detection & AI Advisory',
    award: null,
    description: 'End-to-end plant disease detection platform with a custom CNN trained on 15K+ leaf images achieving 95.6% precision, deployed via FastAPI and Docker on GCP. AI advisory module instruction-tuned to provide treatment guidance with citations in every recommendation.',
    tech: ['TensorFlow', 'CNN', 'FastAPI', 'Docker', 'GCP'],
    github: 'https://github.com/poojavguttal/Plant-Disease-Detection-As-A-Service',
  },
  {
    number: '04',
    category: 'ML · Time Series · Anomaly Detection',
    name: 'Smart Grid Anomaly Detection',
    award: null,
    description: 'ML pipeline on SGCC time-series energy data using XGBoost, LSTM, and Random Forest for electricity theft detection with SMOTE-based class balancing and PCA. Achieved 91% theft and 90% novelty detection accuracy across precision, recall, F1, and AUROC.',
    tech: ['XGBoost', 'LSTM', 'Random Forest', 'Scikit-learn'],
    github: 'https://github.com/leann-z/smart-grid-anomaly-detection',
  },
  {
    number: '05',
    category: 'Full Stack · Django · MongoDB',
    name: 'Find Me — Full Stack Platform',
    award: 'Best BS Project — ISEE',
    description: 'Full-stack platform with REST APIs, database-backed workflows, JWT authentication, input validation, and API testing to enable digital storefronts for small home businesses.',
    tech: ['Django', 'MongoDB', 'JavaScript', 'JWT', 'REST APIs'],
    github: 'https://github.com/poojavguttal/FindMe',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10"
      style={{ background: '#F6F7F9' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0C0C0C' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="flex flex-col justify-between rounded-3xl p-7 sm:p-8"
            style={{ background: '#fff', border: '1px solid rgba(12,12,12,0.07)' }}
            initial={{ opacity: 0, y: 70, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: '-40px' }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 60px rgba(12,12,12,0.12)', transition: { duration: 0.2 } }}
          >
            {/* Top */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className="font-black"
                  style={{ fontSize: '0.72rem', color: '#0C0C0C', opacity: 0.2, letterSpacing: '0.1em' }}
                >
                  {p.number}
                </span>
                <span
                  className="font-light uppercase tracking-widest"
                  style={{ fontSize: '0.58rem', color: '#0C0C0C', opacity: 0.4 }}
                >
                  {p.category}
                </span>
              </div>

              <div>
                {p.award && (
                  <p className="font-light mb-1.5" style={{ fontSize: '0.65rem', color: '#7621B0', opacity: 0.85 }}>
                    {p.award}
                  </p>
                )}
                <h3
                  className="font-bold leading-snug tracking-tight"
                  style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: '#0C0C0C' }}
                >
                  {p.name}
                </h3>
              </div>

              <p
                className="font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)', color: '#0C0C0C', opacity: 0.52 }}
              >
                {p.description}
              </p>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="rounded-full px-3 py-1 text-xs font-light uppercase tracking-wide"
                    style={{ background: 'rgba(12,12,12,0.05)', color: '#0C0C0C', opacity: 0.6 }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-medium uppercase tracking-widest transition-opacity duration-200 hover:opacity-50"
                style={{ fontSize: '0.68rem', color: '#0C0C0C', textDecoration: 'none' }}
              >
                View on GitHub <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
