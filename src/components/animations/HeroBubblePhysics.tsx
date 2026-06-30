'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useAnimationFrame, MotionValue } from 'framer-motion'
import {
  Code, Globe, Smartphone, Cloud, Database, Server,
  Cpu, Box, Monitor, Layout, Rocket, Shield,
  Settings, Users, Zap, Briefcase, Activity, Layers,
  Wifi, Command
} from 'lucide-react'

const COLORS = [
  '#FF6B00', // Orange
  '#0B2F5B', // Navy
  '#6EC1FF', // Sky Blue
  '#BFA7FF', // Purple
  '#FFFFFF', // White
]

const ICONS = [
  Code, Globe, Smartphone, Cloud, Database, Server,
  Cpu, Box, Monitor, Layout, Rocket, Shield,
  Settings, Users, Zap, Briefcase, Activity, Layers,
  Wifi, Command
]

type BubbleApi = {
  id: number
  radius: number
  x: MotionValue<number>
  y: MotionValue<number>
  vx: number
  vy: number
  isDragging: boolean
  mass: number
  color: string
  icon: any
}

function generateBubbles(count: number, containerWidth: number, containerHeight: number, mobileMode = false) {
  const bubbles: Partial<BubbleApi>[] = []
  for (let i = 0; i < count; i++) {
    const rand = Math.random()
    let radius = 20

    if (mobileMode) {
      // Mobile: only small and mid-sized bubbles (max radius 38 = 76px diameter)
      if (rand > 0.45) radius = 20 + Math.random() * 18  // Medium: 40–76px diameter (r=20-38)
      else radius = 10 + Math.random() * 10               // Small: 20–40px diameter (r=10-20)
    } else {

      if (rand > 0.85) radius = 40 + Math.random() * 45  // Large: 80-170px diameter (r=40-85)
      else if (rand > 0.4) radius = 22.5 + Math.random() * 22.5 // Medium: 45-90px diameter (r=22.5-45)
      else radius = 12 + Math.random() * 10               // Small: 24-44px diameter (r=12-22)
    }

    const padding = radius + 10
    const startX = padding + Math.random() * (containerWidth - padding * 2)
    const startY = padding + Math.random() * (containerHeight - padding * 2)

    bubbles.push({
      id: i,
      radius,
      // Slightly increased initial velocity for a balanced movement speed
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 1.1,
      isDragging: false,
      mass: radius,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
    })
  }
  return bubbles
}

// Distance helper
const dist = (x1: number, y1: number, x2: number, y2: number) => Math.hypot(x2 - x1, y2 - y1)

export default function HeroBubblePhysics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<BubbleApi[]>([])
  const [bubbleConfigs, setBubbleConfigs] = useState<Partial<BubbleApi>[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const speedMultiplier = useRef(1)

  // Initialize bubbles based on screen size
  useEffect(() => {
    if (!containerRef.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    const isMobile = width < 768
    // Mobile: 11 small/mid bubbles only. Desktop: 15 with full range including large.
    const count = isMobile ? 11 : 15
    setBubbleConfigs(generateBubbles(count, width, height, isMobile))
  }, [])

  // Smooth hover acceleration
  useAnimationFrame(() => {
    const targetSpeed = isHovered ? 2.0 : 0.75 // Balanced general movement speed
    speedMultiplier.current += (targetSpeed - speedMultiplier.current) * 0.05

    if (!containerRef.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    const bubbles = engineRef.current

    // Physics Loop
    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i]
      if (b.isDragging) continue

      let curX = b.x.get()
      let curY = b.y.get()

      // Apply velocity
      curX += b.vx * speedMultiplier.current
      curY += b.vy * speedMultiplier.current

      // Boundary collision
      if (curX - b.radius < 0) {
        curX = b.radius
        b.vx *= -1
      } else if (curX + b.radius > width) {
        curX = width - b.radius
        b.vx *= -1
      }

      if (curY - b.radius < 0) {
        curY = b.radius
        b.vy *= -1
      } else if (curY + b.radius > height) {
        curY = height - b.radius
        b.vy *= -1
      }

      b.x.set(curX)
      b.y.set(curY)
    }

    // Circle-circle collision resolution
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const b1 = bubbles[i]
        const b2 = bubbles[j]

        const x1 = b1.x.get()
        const y1 = b1.y.get()
        const x2 = b2.x.get()
        const y2 = b2.y.get()

        const distance = dist(x1, y1, x2, y2)
        const minDistance = b1.radius + b2.radius

        if (distance < minDistance) {
          // Resolve overlap
          const overlap = minDistance - distance
          const nx = (x2 - x1) / distance
          const ny = (y2 - y1) / distance

          // Push apart
          if (!b1.isDragging && !b2.isDragging) {
            b1.x.set(x1 - nx * (overlap / 2))
            b1.y.set(y1 - ny * (overlap / 2))
            b2.x.set(x2 + nx * (overlap / 2))
            b2.y.set(y2 + ny * (overlap / 2))
          } else if (b1.isDragging && !b2.isDragging) {
            b2.x.set(x2 + nx * overlap)
            b2.y.set(y2 + ny * overlap)
          } else if (!b1.isDragging && b2.isDragging) {
            b1.x.set(x1 - nx * overlap)
            b1.y.set(y1 - ny * overlap)
          }

          // Elastic collision math
          const kx = b1.vx - b2.vx
          const ky = b1.vy - b2.vy
          const p = (2.0 * (nx * kx + ny * ky)) / (b1.mass + b2.mass)

          if (!b1.isDragging) {
            b1.vx -= p * b2.mass * nx
            b1.vy -= p * b2.mass * ny
          }
          if (!b2.isDragging) {
            b2.vx += p * b1.mass * nx
            b2.vy += p * b1.mass * ny
          }
        }
      }
    }
  })

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden max-md:z-[60] z-0 max-md:pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-hidden="true"
    >
      {bubbleConfigs.map((config) => (
        <BubbleNode
          key={config.id}
          config={config}
          containerRef={containerRef}
          onRegister={(api) => {
            engineRef.current = [...engineRef.current.filter((b) => b.id !== api.id), api]
          }}
        />
      ))}
    </div>
  )
}

function BubbleNode({
  config,
  containerRef,
  onRegister,
}: {
  config: Partial<BubbleApi>
  containerRef: React.RefObject<HTMLDivElement | null>
  onRegister: (api: BubbleApi) => void
}) {
  // Use config to randomly position at start based on container
  // Skew startY toward the top using Math.pow(Math.random(), 1.5) so more bubbles appear at the top
  const startX = useRef((config.radius || 0) + Math.random() * ((containerRef.current?.clientWidth || 500) - (config.radius || 0) * 2))
  const startY = useRef((config.radius || 0) + Math.pow(Math.random(), 1.5) * ((containerRef.current?.clientHeight || 500) - (config.radius || 0) * 2))

  const x = useMotionValue(startX.current)
  const y = useMotionValue(startY.current)

  const apiRef = useRef<BubbleApi>({
    id: config.id as number,
    radius: config.radius as number,
    vx: config.vx as number,
    vy: config.vy as number,
    isDragging: false,
    mass: config.mass as number,
    color: config.color as string,
    icon: config.icon,
    x,
    y,
  })

  useEffect(() => {
    onRegister(apiRef.current)
  }, [onRegister])

  const diameter = apiRef.current.radius * 2

  // Determine blend mode & styling
  const isWhite = apiRef.current.color === '#FFFFFF'

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.1}
      dragMomentum={false}
      style={{
        x,
        y,
        width: diameter,
        height: diameter,
        position: 'absolute',
        top: -apiRef.current.radius,
        left: -apiRef.current.radius,
        borderRadius: '50%',
        touchAction: 'none',
      }}
      onDragStart={() => {
        apiRef.current.isDragging = true
      }}
      onDragEnd={(e, info) => {
        apiRef.current.isDragging = false
        // Update physics velocity based on drag momentum
        apiRef.current.vx = Math.min(Math.max(info.velocity.x / 100, -5), 5)
        apiRef.current.vy = Math.min(Math.max(info.velocity.y / 100, -5), 5)
      }}
      className="cursor-grab active:cursor-grabbing will-change-transform group pointer-events-auto"
    >
      <div
        className="w-full h-full rounded-full transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-2 text-center"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${apiRef.current.color}40 0%, ${apiRef.current.color}10 70%, transparent 100%)`,
          boxShadow: `
            inset 0 0 20px ${apiRef.current.color}20,
            inset 10px 0 40px ${apiRef.current.color}15,
            inset -10px 0 40px ${apiRef.current.color}15,
            inset 0 -10px 40px ${apiRef.current.color}15,
            0 8px 32px rgba(0, 0, 0, 0.05)
          `,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: `1px solid ${isWhite ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)'}`,
          opacity: 0.85,
          mixBlendMode: isWhite ? 'normal' : 'multiply',
        }}
      >
        <span
          className="pointer-events-none select-none z-10 flex items-center justify-center"
          style={{
            color: isWhite ? '#111111' : '#ffffff',
            opacity: apiRef.current.radius < 18 ? 0.8 : 1, // slightly fade on tiny bubbles
            filter: isWhite ? 'none' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
          }}
        >
          {config.icon && (
            <config.icon
              size={apiRef.current.radius * 0.9}
              strokeWidth={apiRef.current.radius < 18 ? 2.5 : 2}
            />
          )}
        </span>

        {/* Inner brilliant highlight for glassy feel */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '10%',
            left: '15%',
            width: '35%',
            height: '25%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)',
            transform: 'rotate(-45deg)',
          }}
        />
      </div>
    </motion.div>
  )
}
