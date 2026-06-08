export default function About() {
  return (
    <section id="about" style={{ padding: '80px 48px', background: '#fff9f9', marginTop: '32px' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '40px',
        fontWeight: '300', marginBottom: '40px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>About Me</span>
      </h2>
      <div className="about-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '2', margin: 0 }}>
            I am a Master's in Computer Science graduate, happy to be part of the top 2–3% of women worldwide who hold a graduate degree.
          </p>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '2', margin: 0 }}>
            With 2.5+ years of professional experience, I've built and shipped production systems, including enterprise-grade applications and LLM-powered automation pipelines that operate in real-world workflows. My work focuses on creating scalable, impactful solutions that improve operational efficiency, enhance user experience, and turn complex data into actionable insights across domains such as healthcare scheduling, workflow automation, and analytics platforms. I am focused on building technology that goes beyond processes to create real impact for people.
          </p>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '2', margin: 0 }}>
           Outside of tech, I enjoy exploring different cuisines, exploring new places and cultures, and expressing my creativity through painting.
          </p>
        </div>
        <div>
          <div style={{
            width: '100%', height: '280px', background: '#fce7f3', borderRadius: '12px',
            border: '2px dashed #fda4af', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '32px' }}>▶️</span>
            <span style={{ fontSize: '13px', color: '#e11d48', fontWeight: '500' }}>Intro video coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
