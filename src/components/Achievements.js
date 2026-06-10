const achievements = [
  {
    image: '/achievements/1.png', number: '01',
    title: 'Guest Speaker — Generative AI',
    sub: 'SVIT Skill Enhancement Day · Jan 2024',
    span: 2, bg: '#ffffff',
  },
  {
    image: '/achievements/2.png', number: '02',
    title: 'State Level Tech Co-ordinator',
    sub: 'State-level technical events',
    span: 1, bg: '#ffffff',
  },
  {
    image: '/achievements/3.png', number: '03',
    title: 'Volunteer Co-ordinator',
    sub: 'Avisa NGO',
    span: 1, bg: '#ffffff',
  },
  {
    image: '/achievements/4.png', number: '04',
    title: 'College Website Developer',
    sub: 'SVIT',
    span: 1, bg: '#ffffff',
  },
  {
    image: '/achievements/5.png', number: '05',
    title: 'Department Distinction',
    sub: 'SVIT · Academic & technical excellence',
    span: 2, bg: '#ffffff',
  },
  {
    image: '/achievements/6.svg', number: '06',
    title: "UMBC Hack '25",
    sub: 'University of Maryland',
    span: 1, bg: '#ffffff',
  },
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

      <div className="bento-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: '240px',
        gap: '16px',
      }}>
        {achievements.map((a, i) => (
          <div
            key={i}
            className={`hover-card bento-tile${a.span === 2 ? ' bento-tile--wide' : ''}`}
            style={{
              gridColumn: `span ${a.span}`,
              background: a.bg,
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #fce7f3',
              boxShadow: '0 4px 24px rgba(225,29,72,0.10)',
              display: 'flex',
              flexDirection: a.span === 2 ? 'row' : 'column',
              alignItems: 'center',
              padding: a.span === 2 ? '0' : '24px 20px',
              position: 'relative',
            }}
          >
            {a.span === 2 ? (
              // Wide tile: image left, text right
              <>
                <div style={{
                  width: '42%', height: '100%', flexShrink: 0,
                  background: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '20px', borderRight: '1px solid #fce7f3',
                }}>
                  <img src={a.image} alt={a.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, padding: '24px 20px' }}>
                  <span style={{
                    fontSize: '10px', color: '#fca5a5',
                    letterSpacing: '2px', textTransform: 'uppercase',
                  }}>{a.number}</span>
                  <h3 style={{
                    fontSize: '22px', fontWeight: '600', margin: '6px 0 8px',
                    color: '#1c1c1c', lineHeight: '1.3',
                    fontFamily: 'Cormorant Garamond, serif',
                  }}>{a.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                    {a.sub}
                  </p>
                </div>
              </>
            ) : (
              // Narrow tile: image top, text bottom
              <>
                <span style={{
                  position: 'absolute', top: '12px', right: '14px',
                  fontSize: '11px', color: '#fca5a5', letterSpacing: '2px',
                }}>{a.number}</span>
                <img src={a.image} alt={a.title}
                  style={{ width: '75%', height: '50%', objectFit: 'contain', marginBottom: '14px' }} />
                <h3 style={{
                  fontSize: '16px', fontWeight: '600', margin: '0 0 4px',
                  color: '#1c1c1c', lineHeight: '1.3', textAlign: 'center',
                  fontFamily: 'Cormorant Garamond, serif',
                }}>{a.title}</h3>
                <p style={{
                  fontSize: '12px', color: '#6b7280',
                  margin: 0, lineHeight: '1.5', textAlign: 'center',
                }}>{a.sub}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
