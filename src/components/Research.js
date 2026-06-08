import { FiGithub, FiFileText } from 'react-icons/fi'

const papers = [
  {
    title: 'Structure-Aware Chunking for Tabular Data in RAG',
    authors: 'Pooja Guttal · First author',
    // venue: 'arXiv:2605.00318 · 202',
    link: 'https://arxiv.org/abs/2605.00318',
    readme: '#',
    award: null,
  },
  {
    title: 'Where do LLMs Fall Short in CBT-Guided Affective Reasoning?',
    // authors: 'Pooja Guttal et al.',
    venue: 'ACII · Under Review',
    link: '#',
    readme: '#',
    award: '🏆 Best MS-Led Research Award, CSEE 2026',
  },
  {
    title: 'Controlling Hallucinations in LLMs for Genre-Specific Storytelling',
    // authors: 'Pooja Guttal',
    // venue: 'November 2024',
    link: '#',
    readme: '#',
    award: null,
  },
]

export default function Research() {
  return (
    <section id="research" style={{ padding: '80px 48px', background: '#fff0f3' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '40px', fontWeight: '300', marginBottom: '48px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Research & Publications</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {papers.map((paper, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '12px', padding: '20px 24px',
            border: '0.5px solid #fce7f3',
            borderLeftWidth: '4px', borderLeftColor: '#e11d48', borderLeftStyle: 'solid',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                {paper.award && (
                  <span style={{
                    fontSize: '10px', color: '#92400e', background: '#fef3c7',
                    border: '1px solid #fcd34d', padding: '4px 12px', borderRadius: '20px',
                    display: 'inline-block', marginBottom: '8px', fontWeight: '600', letterSpacing: '0.2px',
                  }}>
                    {paper.award}
                  </span>
                )}
                <h3 style={{ fontSize: '15px', fontWeight: '500', margin: '0 0 4px' }}>{paper.title}</h3>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 2px' }}>{paper.authors}</p>
                <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>{paper.venue}</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
                <a
                  href={paper.link !== '#' ? paper.link : undefined}
                  target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontSize: '12px', fontWeight: '600', color: 'white',
                    background: '#e11d48', padding: '7px 12px', borderRadius: '8px',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >
                  <FiFileText size={13} /> Read
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
