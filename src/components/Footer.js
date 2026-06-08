export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      fontSize: '11px',
      color: '#9ca3af',
      borderTop: '0.5px solid #fce7f3',
      background: '#fff9f9',
    }}>
      Pooja Guttal · Built with 💗 · {new Date().getFullYear()}
    </footer>
  )
}
