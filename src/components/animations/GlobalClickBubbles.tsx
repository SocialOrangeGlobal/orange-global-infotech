'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Bubble = {
  id: string
  x: number
  y: number
  size: number
  color: string
  angle: number
  distance: number
  duration: number
  keyword: string
}

const KEYWORDS = ['<Code />', '{ API }', 'Cloud', 'Data', 'React', 'Scale', 'Next.js', 'UI/UX', 'Mobile', 'AI', 'Security']

const COLORS = [
  '#FF6B00', // Orange
  '#0B2F5B', // Navy
  '#6EC1FF', // Sky Blue
  '#BFA7FF', // Purple
]

export default function GlobalClickBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  const handleClick = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    
    // Spawn 4 to 8 bubbles on click
    const numBubbles = Math.floor(Math.random() * 5) + 4
    
    const newBubbles: Bubble[] = Array.from({ length: numBubbles }).map(() => {
      const size = Math.random() * 8 + 12 // 12px to 20px font size
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const keyword = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)]
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 100 + 50 // 50px to 150px
      const duration = Math.random() * 2 + 1.5 // 1.5s to 3.5s

      return {
        id: Math.random().toString(36).substring(2, 9),
        x: clientX,
        y: clientY,
        size,
        color,
        angle,
        distance,
        duration,
        keyword
      }
    })

    setBubbles(prev => [...prev, ...newBubbles])

    // Clean up bubbles after they finish animating
    const maxDuration = Math.max(...newBubbles.map(b => b.duration))
    setTimeout(() => {
      setBubbles(prev => prev.filter(b => !newBubbles.find(nb => nb.id === b.id)))
    }, maxDuration * 1000 + 100)
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [handleClick])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            initial={{ 
              opacity: 0.8, 
              scale: 0.5,
              x: bubble.x - 20, 
              y: bubble.y - 10 
            }}
            animate={{ 
              opacity: 0, 
              scale: 1,
              x: bubble.x - 20 + Math.cos(bubble.angle) * bubble.distance, 
              y: bubble.y - 10 + Math.sin(bubble.angle) * bubble.distance 
            }}
            transition={{ 
              duration: bubble.duration, 
              ease: "easeOut" 
            }}
            className="absolute font-mono font-bold whitespace-nowrap pointer-events-none"
            style={{
              color: bubble.color,
              fontSize: bubble.size,
              textShadow: `0 0 12px ${bubble.color}`
            }}
          >
            {bubble.keyword}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
