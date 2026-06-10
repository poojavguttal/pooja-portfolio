'use client'
import { useState, useRef, useEffect } from 'react'
import { FiSquare, FiVolume2 } from 'react-icons/fi'

const segments = [
  { id: 'hero',       label: 'The Story Begins', file: '/audio/segment-0.mp3' },
  { id: 'about',      label: 'Her Journey',       file: '/audio/segment-1.mp3' },
  { id: 'experience', label: 'Her Work',          file: '/audio/segment-2.mp3' },
  { id: 'projects',   label: 'What She Builds',   file: '/audio/segment-3.mp3' },
  { id: 'contact',    label: 'The Invitation',    file: '/audio/segment-4.mp3' },
]

export default function VoiceAssistant() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const audioRef = useRef(null)
  const stoppedRef = useRef(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const playSegment = (index) => {
    if (stoppedRef.current || index >= segments.length) {
      setIsPlaying(false)
      setCurrentIndex(-1)
      return
    }

    const { id, file } = segments[index]
    setCurrentIndex(index)
    scrollToSection(id)

    const audio = new Audio(file)
    audioRef.current = audio
    audio.onended = () => { if (!stoppedRef.current) playSegment(index + 1) }
    audio.onerror = () => { setIsPlaying(false); setCurrentIndex(-1) }
    audio.play().catch(() => { setIsPlaying(false); setCurrentIndex(-1) })
  }

  const handleToggle = () => {
    if (isPlaying) {
      stoppedRef.current = true
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null }
      setIsPlaying(false)
      setCurrentIndex(-1)
      return
    }

    stoppedRef.current = false
    setIsPlaying(true)
    playSegment(0)
  }

  useEffect(() => {
    return () => {
      stoppedRef.current = true
      if (audioRef.current) audioRef.current.pause()
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      {isPlaying && currentIndex >= 0 && (
        <div style={{
          background: '#fff',
          border: '1px solid #fda4af',
          borderRadius: '12px',
          padding: '10px 14px',
          fontSize: '12px',
          color: '#e11d48',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px rgba(225,29,72,0.12)',
          whiteSpace: 'nowrap',
        }}>
          <span className="voice-wave-bar" style={{ animationDelay: '0s' }} />
          <span className="voice-wave-bar" style={{ animationDelay: '0.15s' }} />
          <span className="voice-wave-bar" style={{ animationDelay: '0.3s' }} />
          {segments[currentIndex].label}
        </div>
      )}

      <button
        onClick={handleToggle}
        title={isPlaying ? 'Stop narration' : "Hear Pooja's story"}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: isPlaying ? '#fff' : '#e11d48',
          border: isPlaying ? '2px solid #e11d48' : 'none',
          color: isPlaying ? '#e11d48' : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(225,29,72,0.3)',
          transition: 'all 0.2s',
        }}
      >
        {isPlaying ? <FiSquare size={20} /> : <FiVolume2 size={22} />}
      </button>

      {!isPlaying && (
        <span style={{ fontSize: '10px', color: '#9ca3af', letterSpacing: '0.5px' }}>
          Hear My Story
        </span>
      )}
    </div>
  )
}
