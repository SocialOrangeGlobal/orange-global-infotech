'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (typeof window === 'undefined') return null

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          body, a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        }
      `}} />

      {/* Instant Custom Mouse Arrow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 0.9 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0
        }}
        style={{
          width: 28,
          height: 28,
          filter: 'drop-shadow(0px 4px 8px rgba(255, 107, 0, 0.5))',
          transformOrigin: 'top left'
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L18.5 10.5L11.5 12.5L8 21L4 2Z" fill="#FF6B00" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Floating Tech Label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block font-mono text-[10px] tracking-widest font-bold whitespace-nowrap"
        animate={{
          x: mousePosition.x + 16,
          y: mousePosition.y + 16,
          opacity: isVisible ? (isHovering ? 0 : 0.8) : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
        style={{
          color: '#FF6B00',
          textShadow: '0 0 8px rgba(255, 107, 0, 0.6)'
        }}
      >
        [ ORANGE GLOBAL ]
      </motion.div>
    </>
  )
}
