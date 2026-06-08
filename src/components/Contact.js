import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '80px 48px',
      background: '#fff0f3',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '40px',
        fontWeight: '300',
        marginBottom: '16px',
      }}>
        <span style={{ color: '#e11d48', fontStyle: 'italic' }}>Let's Talk</span>
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#6b7280',
        maxWidth: '480px',
        margin: '0 auto 32px',
        lineHeight: '1.8',
      }}>
        I'm always excited to connect with people building innovative solutions and creating meaningful impact through technology.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:poojaguttal.md@gmail.com" style={{
          border: '1px solid #e11d48',
          color: '#e11d48',
          background: 'transparent',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
        }}>
          <FiMail size={16} />
          Email
        </a>
        <a href="https://linkedin.com/in/poojaguttal" target="_blank" rel="noreferrer" style={{
          border: '1px solid #e11d48',
          color: '#e11d48',
          background: 'transparent',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
        }}>
          <FiLinkedin size={16} />
          LinkedIn
        </a>
        <a href="https://github.com/poojavguttal" target="_blank" rel="noreferrer" style={{
          border: '1px solid #e11d48',
          color: '#e11d48',
          background: 'transparent',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
        }}>
          <FiGithub size={16} />
          GitHub
        </a>
      </div>
    </section>
  )
}
