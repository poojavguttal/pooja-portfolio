const photos = [
  {
    src: '/community/aws-she-builds.jpeg',
    label: 'AWS She Builds',
    desc: 'An AWS initiative to empower women in tech through mentorship, cloud skills, and community building — fostering diversity across the industry.',
  },
  {
    src: '/community/avisa.jpeg',
    label: 'Avisa Charitable Trust',
    desc: 'A Bangalore-based NGO whose name means "sweet nectar" in Sanskrit — dedicated to uplifting underserved communities with a focus on health and hygiene.',
  },
]

export default function Community() {
  return (
    <section id="community" style={{ padding: '80px 48px', background: '#fff9f9' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '40px',
        fontWeight: '300', marginBottom: '48px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Community Involvement</span>
      </h2>

      <div style={{
        display: 'flex', gap: '32px', justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {photos.map((p, i) => (
          <div key={i} className="hover-card" style={{
            width: '340px',
            background: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #fce7f3',
            boxShadow: '0 4px 24px rgba(225,29,72,0.08)',
          }}>
            <img
              src={p.src}
              alt={p.label}
              style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', background: '#ffffff' }}
            />
            <div style={{ padding: '20px 22px', borderTop: '1px solid #fce7f3' }}>
              <p style={{
                fontSize: '20px', fontWeight: '600', color: '#1c1c1c',
                margin: '0 0 8px', fontFamily: 'Cormorant Garamond, serif',
              }}>
                {p.label}
              </p>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.7' }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
