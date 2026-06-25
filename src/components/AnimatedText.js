'use client'
import { motion } from 'framer-motion'

export default function AnimatedText({ text, className = '', style = {} }) {
  const words = text.split(' ')

  return (
    <p className={className} style={style}>
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            initial={{ opacity: 0.15 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}
