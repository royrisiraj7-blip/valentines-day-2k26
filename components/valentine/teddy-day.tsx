"use client"

import { useState, useCallback, useRef, useEffect } from "react"

interface HeartParticle {
  id: number
  x: number
  y: number
  size: number
  angle: number
  distance: number
}

function TeddySvg({ isHugging, isHovered }: { isHugging: boolean; isHovered: boolean }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="A teddy bear holding a heart"
    >
      {/* Left ear */}
      <circle cx="62" cy="52" r="26" fill="hsl(25 30% 65%)" />
      <circle cx="62" cy="52" r="16" fill="hsl(25 35% 75%)" />
      {/* Right ear */}
      <circle cx="138" cy="52" r="26" fill="hsl(25 30% 65%)" />
      <circle cx="138" cy="52" r="16" fill="hsl(25 35% 75%)" />
      {/* Head */}
      <circle cx="100" cy="80" r="46" fill="hsl(25 30% 68%)" />
      {/* Body */}
      <ellipse cx="100" cy="155" rx="52" ry="55" fill="hsl(25 30% 68%)" />
      {/* Belly */}
      <ellipse cx="100" cy="160" rx="34" ry="38" fill="hsl(25 35% 78%)" />
      {/* Left arm */}
      <ellipse
        cx="52" cy="140" rx="18" ry="32"
        fill="hsl(25 30% 65%)"
        transform={`rotate(${isHugging ? 30 : 20}, 52, 140)`}
        style={{ transition: "transform 0.5s ease" }}
      />
      {/* Right arm */}
      <ellipse
        cx="148" cy="140" rx="18" ry="32"
        fill="hsl(25 30% 65%)"
        transform={`rotate(${isHugging ? -30 : -20}, 148, 140)`}
        style={{ transition: "transform 0.5s ease" }}
      />
      {/* Left foot */}
      <ellipse cx="76" cy="205" rx="20" ry="14" fill="hsl(25 30% 62%)" />
      <ellipse cx="76" cy="207" rx="12" ry="8" fill="hsl(25 35% 75%)" />
      {/* Right foot */}
      <ellipse cx="124" cy="205" rx="20" ry="14" fill="hsl(25 30% 62%)" />
      <ellipse cx="124" cy="207" rx="12" ry="8" fill="hsl(25 35% 75%)" />
      {/* Muzzle */}
      <ellipse cx="100" cy="90" rx="18" ry="14" fill="hsl(25 35% 78%)" />
      {/* Nose */}
      <ellipse cx="100" cy="85" rx="5" ry="3.5" fill="hsl(20 20% 30%)" />
      {/* Mouth - replaced by hover-aware version below */}
      {/* Eyes */}
      <circle cx="86" cy="72" r="4" fill="hsl(20 20% 20%)" />
      <circle cx="114" cy="72" r="4" fill="hsl(20 20% 20%)" />
      {/* Eye shine */}
      <circle cx="87.5" cy="70.5" r="1.5" fill="white" opacity="0.8" />
      <circle cx="115.5" cy="70.5" r="1.5" fill="white" opacity="0.8" />
      {/* Blush - visible on hover */}
      <circle
        cx="78" cy="84" r="9"
        fill="hsl(350 60% 70%)"
        opacity={isHovered || isHugging ? 0.65 : 0}
        style={{ transition: "opacity 0.5s ease" }}
      />
      <circle
        cx="78" cy="84" r="5"
        fill="hsl(350 65% 65%)"
        opacity={isHovered || isHugging ? 0.4 : 0}
        style={{ transition: "opacity 0.5s ease" }}
      />
      <circle
        cx="122" cy="84" r="9"
        fill="hsl(350 60% 70%)"
        opacity={isHovered || isHugging ? 0.65 : 0}
        style={{ transition: "opacity 0.5s ease" }}
      />
      <circle
        cx="122" cy="84" r="5"
        fill="hsl(350 65% 65%)"
        opacity={isHovered || isHugging ? 0.4 : 0}
        style={{ transition: "opacity 0.5s ease" }}
      />
      {/* Smile widens on hover */}
      <path
        d={isHovered || isHugging ? "M 93 91 Q 100 100 107 91" : "M 95 91 Q 100 97 105 91"}
        stroke="hsl(20 20% 30%)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        style={{ transition: "d 0.4s ease" }}
      />
      {/* Heart the teddy is holding */}
      <g transform="translate(100, 148)" style={{ transform: `translate(100px, 148px) scale(${isHugging ? 1.15 : 1})`, transition: "transform 0.5s ease" }}>
        <path
          d="M 0 8 C -2 -2, -14 -6, -14 4 C -14 12, 0 20, 0 20 C 0 20, 14 12, 14 4 C 14 -6, 2 -2, 0 8 Z"
          fill="hsl(350 55% 58%)"
        />
      </g>
    </svg>
  )
}

function HeartBurst({ particles }: { particles: HeartParticle[] }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-heart-burst"
          style={{
            left: `calc(50% + ${Math.cos(p.angle) * p.distance}px)`,
            top: `calc(45% + ${Math.sin(p.angle) * p.distance}px)`,
            fontSize: `${p.size}px`,
            animationDelay: `${Math.random() * 0.15}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(350 55% 62%)" width="1em" height="1em">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

const noteLines = [
  "Sneha,",
  "If I could, I\u2019d be the one you reach for when the world gets too loud.",
  "Not a grand gesture. Not something borrowed from a movie.",
  "Just arms that know exactly how to hold you \u2014 not too tight, not too loose. Just enough for you to exhale.",
  "You carry so much, so quietly. And I know you don\u2019t always say when you need comfort.",
  "But I notice. I always notice.",
  "So here\u2019s what this teddy is, really \u2014 it\u2019s a stand-in. A placeholder. For all the hugs I owe you, the ones I\u2019ll give you, and the ones I\u2019m saving for when you least expect them.",
  "Hold it close when you miss me. I promise the real thing is even better.",
]

export function TeddyDay() {
  const [opened, setOpened] = useState(false)
  const [isHugging, setIsHugging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<HeartParticle[]>([])
  const [visibleLines, setVisibleLines] = useState(0)
  const particleIdRef = useRef(0)
  const shakeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!opened) return
    const timers: NodeJS.Timeout[] = []
    noteLines.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((v) => Math.max(v, i + 1))
        }, 600 + i * 700)
      )
    })
    return () => timers.forEach(clearTimeout)
  }, [opened])

  const handleHug = useCallback(() => {
    setIsHugging(true)

    // Screen shake
    if (shakeRef.current) {
      shakeRef.current.classList.add("animate-screen-shake")
      setTimeout(() => {
        shakeRef.current?.classList.remove("animate-screen-shake")
      }, 500)
    }

    // Spawn heart particles
    const newParticles: HeartParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: particleIdRef.current++,
      x: 0,
      y: 0,
      size: 14 + Math.random() * 14,
      angle: (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.4,
      distance: 40 + Math.random() * 60,
    }))
    setParticles((prev) => [...prev, ...newParticles])

    setTimeout(() => setIsHugging(false), 800)
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)))
    }, 1200)
  }, [])

  if (!opened) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20">
        <div className="animate-fade-in-up flex flex-col items-center">
          <div className="mb-6 w-40 animate-teddy-breathe md:w-52">
            <TeddySvg isHugging={false} isHovered={false} />
          </div>
          <h2 className="mb-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            {"For you"} <span className="text-primary" aria-hidden="true">&#10084;</span>
          </h2>
          <p className="mb-8 text-center font-sans text-base text-muted-foreground md:text-lg">
            A little something soft, just for you.
          </p>
          <button
            onClick={() => setOpened(true)}
            className="rounded-full bg-primary px-8 py-3 font-sans text-sm text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-md active:scale-95"
          >
            Open my hug
          </button>
        </div>
      </section>
    )
  }

  return (
    <section ref={shakeRef} className="mx-auto max-w-xl px-6 py-16 md:py-24">
      <p className="mb-2 animate-fade-in-up text-sm tracking-[0.2em] uppercase text-rose">
        Teddy Day
      </p>
      <h2 className="mb-10 animate-fade-in-up-delay-1 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Comfort
      </h2>

      {/* Interactive teddy */}
      <div className="relative mb-12 flex justify-center">
        <button
          onClick={handleHug}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-44 cursor-pointer transition-transform duration-300 focus:outline-none md:w-56"
          aria-label="Click the teddy for a hug"
          type="button"
        >
          <div className="animate-teddy-breathe">
            <TeddySvg isHugging={isHugging} isHovered={isHovered} />
          </div>
          <HeartBurst particles={particles} />
        </button>
        <p className="absolute -bottom-6 text-center text-xs text-muted-foreground italic">
          tap the teddy
        </p>
      </div>

      {/* Note - line by line */}
      <div className="space-y-5 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        {noteLines.map((line, i) => (
          <p
            key={i}
            className={`transition-all duration-700 ease-out ${
              i < visibleLines
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } ${i === 0 ? "font-serif text-lg text-foreground md:text-xl" : ""}`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Ending line */}
      <p
        className={`mt-12 text-center font-serif text-lg text-muted-foreground italic transition-all delay-500 duration-1000 md:text-xl ${
          visibleLines >= noteLines.length
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        Whenever you need comfort, come back here. I{"'"}ll be waiting.
      </p>
    </section>
  )
}
