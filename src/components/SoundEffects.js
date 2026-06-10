'use client'
import { useEffect } from 'react'

function getCtx() {
  if (typeof window === 'undefined') return null
  if (!window.__audioCtx) window.__audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  const ctx = window.__audioCtx
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function playPop() {
  const ctx = getCtx()
  if (!ctx) return
  const t = ctx.currentTime

  // Very short impulse — exponential decay envelope on noise, lowpassed to "pop"
  const bufSize = Math.floor(ctx.sampleRate * 0.003)
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.25))
  }

  const noise = ctx.createBufferSource()
  noise.buffer = buf

  const filter = ctx.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = 1800

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.55, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.01)

  noise.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  noise.start(t)
}

export default function SoundEffects() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('button') || e.target.closest('a')) {
        playPop()
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
