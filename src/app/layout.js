import './globals.css'

export const metadata = {
  title: 'Pooja Guttal — Software Engineer & AI Engineer',
  description: 'Portfolio of Pooja Guttal — building production AI systems that ship, scale, and solve real problems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
