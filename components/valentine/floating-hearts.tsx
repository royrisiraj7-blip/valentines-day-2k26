"use client"

import { useMemo } from "react"

interface Heart {
  id: number
  left: string
  size: number
  delay: string
  duration: string
  opacity: number
}

export function FloatingHearts() {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 5.5 + (i % 3) * 2.1) % 100}%`,
      size: 10 + (i % 5) * 4,
      delay: `${(i * 1.7) % 12}s`,
      duration: `${18 + (i % 7) * 4}s`,
      opacity: 0.045 + (i % 4) * 0.015,
    }))
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: heart.left,
            bottom: "-5%",
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
          viewBox="0 0 24 24"
          fill="hsl(350 45% 65%)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  )
}
