'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed rounded-full blur-3xl opacity-40 transition-opacity duration-300"
      style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
        left: `${position.x - 200}px`,
        top: `${position.y - 200}px`,
        filter: 'blur(40px)',
      }}
    />
  )
}
