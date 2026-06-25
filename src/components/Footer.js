export default function Footer() {
  return (
    <footer
      className="px-5 sm:px-8 md:px-10 py-8 sm:py-10"
      style={{
        background: '#0C0C0C',
        borderTop: '1px solid rgba(215, 226, 234, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p
          className="font-light uppercase tracking-widest"
          style={{ fontSize: '0.7rem', color: '#D7E2EA', opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Pooja Guttal
        </p>
      </div>
    </footer>
  )
}
