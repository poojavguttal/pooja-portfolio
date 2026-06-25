'use client'
export default function Grain() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: '-50%',
        width: '200%',
        height: '200%',
        zIndex: 9997,
        pointerEvents: 'none',
        opacity: 0.22,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        animation: 'grain 0.18s steps(2) infinite',
      }}
    />
  )
}
