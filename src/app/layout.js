import './globals.css'
import PostHogProvider from '../components/PostHogProvider'

export const metadata = {
  title: 'Pooja Guttal — Software & AI Engineer',
  description: 'Building production AI systems that ship, scale, and solve real problems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider />
        {children}
      </body>
    </html>
  )
}
