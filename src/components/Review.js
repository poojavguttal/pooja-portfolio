'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function StarIcon({ filled, hovered }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={filled || hovered ? '#D7E2EA' : 'none'} stroke="#D7E2EA" strokeWidth="1.5">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )
}

export default function Review() {
  const [open, setOpen]       = useState(false)
  const [rating, setRating]   = useState(0)
  const [hover, setHover]     = useState(0)
  const [name, setName]       = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus]   = useState('idle')

  const reset = () => { setRating(0); setHover(0); setName(''); setMessage(''); setStatus('idle') }
  const close = () => { setOpen(false); setTimeout(reset, 400) }

  const submit = async () => {
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: rating || null, name: name.trim() || 'Anonymous', message: message.trim() }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-widest"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0 0 24px rgba(182,0,168,0.45), 0 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid white',
          outlineOffset: '-3px',
          color: '#fff',
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span style={{ fontSize: '1rem' }}>★</span> Leave a Review
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div key="review-modal">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Centered modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[90vw] max-w-md pointer-events-auto"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="rounded-3xl p-8 flex flex-col gap-6"
                  style={{ background: '#111', border: '1px solid rgba(215,226,234,0.12)' }}
                >
                  {status === 'success' ? (
                    <div className="flex flex-col items-center gap-4 py-4 text-center">
                      <span style={{ fontSize: '2.5rem' }}>🙏</span>
                      <p className="font-semibold uppercase tracking-wide" style={{ color: '#D7E2EA', fontSize: '1rem' }}>
                        Thank you!
                      </p>
                      <p className="font-light" style={{ color: '#D7E2EA', opacity: 0.55, fontSize: '0.85rem' }}>
                        Your review means a lot to me.
                      </p>
                      <button
                        onClick={close}
                        className="mt-2 rounded-full px-6 py-2 text-xs font-medium uppercase tracking-widest"
                        style={{ border: '1px solid rgba(215,226,234,0.2)', color: '#D7E2EA' }}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="font-bold uppercase tracking-widest" style={{ fontSize: '0.85rem', color: '#D7E2EA' }}>
                            Leave a Review
                          </p>
                          <p className="font-light leading-relaxed" style={{ fontSize: '0.82rem', color: '#D7E2EA', opacity: 0.6 }}>
                            If you&apos;re a recruiter, hiring manager, or fellow engineer — I&apos;d love to hear from you. Your feedback genuinely helps me grow and improve.
                          </p>
                        </div>
                        <button onClick={close} style={{ color: '#D7E2EA', opacity: 0.4, fontSize: '1.2rem', lineHeight: 1, flexShrink: 0 }}>✕</button>
                      </div>

                      {/* Stars — optional */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map(s => (
                            <button
                              key={s}
                              onClick={() => setRating(rating === s ? 0 : s)}
                              onMouseEnter={() => setHover(s)}
                              onMouseLeave={() => setHover(0)}
                              style={{ transition: 'transform 0.15s', transform: (hover || rating) >= s ? 'scale(1.15)' : 'scale(1)' }}
                            >
                              <StarIcon filled={rating >= s} hovered={hover >= s} />
                            </button>
                          ))}
                        </div>
                        <span style={{ fontSize: '0.65rem', color: '#D7E2EA', opacity: 0.35 }}>optional</span>
                      </div>

                      {/* Name */}
                      <input
                        type="text"
                        placeholder="Your name (optional)"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full rounded-xl px-4 py-3 text-sm font-light outline-none"
                        style={{ background: 'rgba(215,226,234,0.06)', border: '1px solid rgba(215,226,234,0.12)', color: '#D7E2EA' }}
                      />

                      {/* Message */}
                      <textarea
                        placeholder="Share your thoughts..."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={3}
                        className="w-full rounded-xl px-4 py-3 text-sm font-light outline-none resize-none"
                        style={{ background: 'rgba(215,226,234,0.06)', border: '1px solid rgba(215,226,234,0.12)', color: '#D7E2EA' }}
                      />

                      {/* Submit */}
                      <button
                        onClick={submit}
                        disabled={status === 'loading'}
                        className="w-full rounded-full py-3 text-sm font-medium uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{
                          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                          boxShadow: '0px 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset',
                          outline: '2px solid white',
                          outlineOffset: '-3px',
                          color: '#fff',
                          cursor: 'pointer',
                        }}
                      >
                        {status === 'loading' ? 'Sending...' : 'Submit'}
                      </button>

                      {status === 'error' && (
                        <p className="text-center text-xs" style={{ color: '#f87171' }}>Something went wrong. Please try again.</p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
