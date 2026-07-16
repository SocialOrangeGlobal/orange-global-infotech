'use client'

import { useEffect, useRef, useState } from 'react'
import React from 'react'

export default function RobotViewer() {
  const viewerRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Dynamically load Google model-viewer web component (avoids bundler issues)
    if (!document.querySelector('script[data-model-viewer]')) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js'
      script.setAttribute('data-model-viewer', 'true')
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return

    const handleProgress = (event: any) => {
      setProgress(Math.round(event.detail.totalProgress * 100))
    }

    viewer.addEventListener('progress', handleProgress)
    return () => viewer.removeEventListener('progress', handleProgress)
  }, [])

  // Use React.createElement to avoid JSX TypeScript type errors for custom web components
  return React.createElement(
    'model-viewer',
    {
      ref: viewerRef,
      src: '/model/strange_shapes.glb',
      alt: 'Orange Global Infotech AI Robot',
      // ── User Interaction (Horizontal Rotation Only) ───────────────────────
      'camera-controls': true,
      'disable-zoom': true, // disables scroll-to-zoom
      'disable-pan': true,  // disables moving it from its place
      'disable-tap': true, // disables tap interaction on mobile
      'min-camera-orbit': 'auto 72deg auto', // locks vertical rotation
      'max-camera-orbit': 'auto 72deg auto', // locks vertical rotation
      // ── Auto-rotate only ─────────────────────────────────────────────────
      'auto-rotate': true,
      'auto-rotate-delay': '0',
      'rotation-per-second': '12deg',
      // ── Scene settings ────────────────────────────────────────────────────
      'shadow-intensity': '1.2',
      'shadow-softness': '1',
      'exposure': '1.15',
      'environment-image': 'neutral',
      'camera-orbit': '0deg 72deg 175%',
      'field-of-view': '26deg',
      'loading': 'eager',
      'reveal': 'auto',
      style: {
        width: '100%',
        height: '100%',
        background: 'transparent',
        '--poster-color': 'transparent',
        '--progress-bar-color': 'transparent',
        '--progress-mask': 'none',
        cursor: 'grab',
        transform: 'scale(0.85)',
      } as React.CSSProperties,
    },
    // Custom Loading Spinner (shown while model is downloading)
    React.createElement(
      'div',
      {
        slot: 'poster',
        className: 'absolute inset-0 flex flex-col items-center justify-center bg-transparent z-50',
      },
      React.createElement(
        'div',
        { className: 'flex flex-col items-center gap-3' },
        // Progress Bar Track
        React.createElement(
          'div',
          { className: 'w-48 h-1.5 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm shadow-inner' },
          // Progress Bar Fill
          React.createElement('div', {
            className: 'h-full bg-[#111111] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(0,0,0,0.4)]',
            style: { width: `${progress}%` },
          })
        ),
        // Percentage Text
        React.createElement(
          'span',
          { className: 'text-[11px] font-bold text-gray-800 font-mono tracking-widest uppercase' },
          `Loading ${progress}%`
        )
      )
    )
  )
}
