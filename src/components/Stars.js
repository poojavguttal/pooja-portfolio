export default function Stars({ count = 18 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${(i * 43 + 9) % 94}%`,
          top:  `${(i * 61 + 5) % 88}%`,
          width:  i % 4 === 0 ? '4px' : '2px',
          height: i % 4 === 0 ? '4px' : '2px',
          background: i % 6 === 0 ? '#ffd700' : '#ffffff',
          pointerEvents: 'none',
          animation: `starTwinkle ${1.2 + (i % 4) * 0.5}s ease-in-out infinite`,
          animationDelay: `${(i * 0.28) % 2.2}s`,
        }} />
      ))}
    </>
  )
}
