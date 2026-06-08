const achievements = [
  { emoji: '🎤', title: 'Guest Speaker — Generative AI', subtitle: 'SVIT Skill Enhancement Day · January 2024' },

]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '80px 48px', background: '#fff9f9' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '40px',
        fontWeight: '300', marginBottom: '48px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Achievements & Leadership</span>
      </h2>
      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '16px', padding: '24px',
            border: '0.5px solid #fce7f3', display: 'flex', gap: '16px', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '28px' }}>{item.emoji}</span>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '500', margin: '0 0 4px' }}>{item.title}</h3>
              <p style={{ fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
