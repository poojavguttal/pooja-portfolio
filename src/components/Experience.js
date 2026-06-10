const experiences = [
  {
    title: 'Python & AI Engineer (Co-op Intern)',
    company: 'Altumatim',
    location: 'Remote, United States',
    period: 'Feb 2026 – May 2026',
    type: 'AI Engineer',
    skills: [
      'Python', 'LLM Pipelines', 'RAG', 'LangChain', 'GCP', 'Vertex AI', 'Gemini', 'Claude Code', 'Github Copilot', 'GitBucket'
    ],
    bullets: [
      // REPLACE: Add your bullet points here
      'Engineered and shipped features including production LLM pipelines, RAG systems, and enterprise integrations that enhanced the efficiency of legal AI workflows.'
    ],
  },
  {
    title: 'Research Assistant',
    company: 'UMBC',
    location: 'Baltimore, MD',
    period: 'May 2025 – May 2026',
    type: 'Research',
    skills: [
      'Python', 'SQL', 'Tableau', 'Data Analysis', 'Machine Learning', 'NLP', 'Deep Learning'
    ],
    bullets: [
      'Transformed student and staff institutional data into Tableau dashboards, delivering insights that supported academic planning and workforce decisions. Built SQL stored procedures and views to streamline data access and reporting workflows.'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Persistent Systems',
    location: 'Bangalore, India',
    period: 'Aug 2022 – Aug 2024',
    type: 'SWE',
    skills: [
      'React.js', 'JavaScript (ES6+)', 'TypeScript',
      'Java', 'Spring Boot', 'REST APIs', 'Microservices',
      'JWT', 'PostgreSQL', 'MySQL', 'Git', 'Agile',
    ],
    bullets: [
      // REPLACE: Add your bullet points here
      'Shipped full-stack features for enterprise insurance platform serving millions of health plan members, and built internal automation tools for the Learning & Development team, reducing manual effort by 75%.'
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'L2MRail',
    location: 'Bangalore, India',
    period: 'Sep 2021 – Jan 2022',
    type: 'SWE',
    skills: [
      'Django', 'PostgreSQL', 'Python', 'SQL',
      'AWS ECS', 'REST APIs', 'MQTT Broker (Async Message Queues)',
    ],
    bullets: [
      // REPLACE: Add your bullet points here
      'Built real-time rail wheel health monitoring infrastructure for Indian Railways (RDSO), processing 20,000+ daily sensor events across safety-critical systems.'
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '80px 48px',
      background: '#fff0f3',
    }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '40px',
        fontWeight: '300',
        marginBottom: '48px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Work Experience</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="hover-card" style={{
            background: 'white',
            borderRadius: '16px',
            padding: '28px 32px',
            border: '0.5px solid #fce7f3',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '8px',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '500', margin: 0 }}>
                    {exp.title}
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#e11d48', margin: '4px 0 0' }}>
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap' }}>
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul style={{
              margin: '12px 0',
              paddingLeft: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {exp.bullets.map((bullet, j) => (
                <li key={j} style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div style={{
              borderTop: '0.5px solid #fce7f3',
              paddingTop: '16px',
              marginTop: '16px',
            }}>
              <p style={{
                fontSize: '10px',
                color: '#6b7280',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: '11px',
                    color: '#e11d48',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    border: '1px solid #fda4af',
                    background: 'white',
                    fontWeight: '500',
                    letterSpacing: '0.2px',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
