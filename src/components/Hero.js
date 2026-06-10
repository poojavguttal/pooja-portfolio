export default function Hero() {
  return (
    <section id="hero" className="hero-grid">
      <div className="hero-photo" style={{
        background: 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img src="/photo.jpg" alt="Pooja Guttal"
          style={{ width: '75%', height: '75%', borderRadius: '16px', objectFit: 'contain' }} />
      </div>

      <div className="hero-text" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px',
        background: '#fff9f9',
      }}>
        <p style={{ fontSize: '28px', color: '#e11d48', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', margin: 0 }}>
          Hey there, I am
        </p>
        <h1 className="hero-title" style={{
          fontFamily: 'Cormorant Garamond, serif', fontWeight: '300',
          color: '#1c1c1c', lineHeight: '1.1', margin: 0,
        }}>
          <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Pooja Guttal</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.8', maxWidth: '400px', margin: 0 }}>
          A young woman in Tech passionate about building intelligent, end-to-end solutions focused on solving real-world problems and delivering meaningful impact.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
          <a href="/resume.pdf" target="_blank" className="hover-btn" style={{
            background: '#e11d48', color: 'white', padding: '12px 24px',
            borderRadius: '8px', fontSize: '13px', textDecoration: 'none', fontWeight: '500',
          }}>View Resume</a>
          <a href="#contact" className="hover-btn" style={{
            background: 'transparent', color: '#e11d48', padding: '12px 24px',
            borderRadius: '8px', fontSize: '13px', textDecoration: 'none',
            border: '1px solid #e11d48', fontWeight: '500',
          }}>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
