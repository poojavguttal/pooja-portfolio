import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    name: 'CBT-Guided Conversational AI for Mental Health Support',
    award: '🏆 Best MS-Led Research Award, CSEE 2026',
    description: 'Built a knowledge-guided NLP framework using knowledge graph retrieval, cognitive model and NLI filtering to enable clinically grounded LLM reasoning with responsible AI principles. Evaluated Chain-of-Thought prompting across 4 open-source models, achieving 66.7% therapeutic reasoning adherence.',
    tags: ['NLP', 'LLMs', 'SNOMED CT', 'NLI', 'Python'],
    github: 'https://github.com/poojavguttal/CBT_LLM',
  },
  {
    name: 'FactMed – AI Medical Chatbot',
    award: null,
    description: 'Developed a RAG-based medical chatbot using FAISS vector search and BioBERT embeddings over 47,000+ medical Q&A pairs to deliver accurate, source-grounded clinical answers. Designed the retrieval pipeline to surface relevant context before generation, reducing hallucinations and grounding responses in verified medical literature.',
    tags: ['RAG', 'FAISS', 'BioBERT', 'LLaMA-2', 'FastAPI'],
    github: 'https://github.com/poojaguttalmd/RAG_Medical_Chatbot',
  },
  {
    name: 'Plant Disease Detection and AI advisory',
    award: null,
    description: 'Built an end-to-end plant disease detection platform with a custom CNN trained on 15K+ leaf images achieving 95.6% precision, deployed via FastAPI and Docker on GCP. The AI advisory module was instruction-tuned to provide treatment guidance sourced from trusted agricultural resources, with citations included in every recommendation.',
    tags: ['TensorFlow', 'CNN', 'FastAPI', 'Docker', 'GCP'],
    github: 'https://github.com/poojavguttal/Plant-Disease-Detection-As-A-Service',
  },
  {
    name: 'Smart Grid Anomaly Detection',
    award: null,
    description: 'Built an ML pipeline on SGCC time-series energy data using XGBoost, LSTM, and Random Forest for electricity theft detection with SMOTE-based class balancing and PCA. Achieved 91% theft and 90% novelty detection accuracy evaluated across precision, recall, F1, and AUROC.',
    tags: ['XGBoost', 'LSTM', 'Random Forest', 'Scikit-learn'],
    github: 'https://github.com/leann-z/smart-grid-anomaly-detection',
  },
  {
    name: 'Find Me – Full Stack Platform',
    award: '🏆 Best BS-Led Project, ISEE',
    description: 'Developed a full-stack platform with REST APIs, database-backed workflows, JWT authentication, input validation, and API testing to enable digital storefronts for small home businesses.',
    tags: ['Django', 'MongoDB', 'JavaScript', 'JWT', 'REST APIs'],
    github: 'https://github.com/poojavguttal/FindMe',
  },
]

const awardStyle = {
  fontSize: '10px', color: '#92400e', background: '#fef3c7',
  border: '1px solid #fcd34d', padding: '4px 12px', borderRadius: '20px',
  display: 'inline-block', width: 'fit-content', fontWeight: '600', letterSpacing: '0.2px',
  marginBottom: '6px',
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 48px', background: '#fff9f9' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '40px',
        fontWeight: '300', marginBottom: '48px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Featured Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '16px', padding: '24px',
            border: '0.5px solid #fce7f3', display: 'flex', flexDirection: 'column', gap: '10px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', margin: 0 }}>{project.name}</h3>
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
                  fontSize: '11px', fontWeight: '600', color: 'white',
                  background: '#e11d48', padding: '5px 10px', borderRadius: '6px',
                  textDecoration: 'none',
                }}>
                  <FiGithub size={12} /> GitHub
                </a>
              )}
            </div>
            {project.award && (
              <span style={awardStyle}>{project.award}</span>
            )}
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.8', flex: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '11px', color: '#e11d48',
                  padding: '4px 12px', borderRadius: '6px',
                  border: '1px solid #fda4af', background: 'white',
                  fontWeight: '500', letterSpacing: '0.2px',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
