"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20">
      <div
        className={`max-w-lg text-center transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-8 text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Valentine{"'"}s Week
        </p>

        <h1 className="mb-6 font-serif text-4xl leading-snug tracking-tight text-foreground md:text-5xl md:leading-snug">
          Hi, Sneha.
        </h1>

        <div className="mx-auto max-w-sm space-y-2">
          <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
            This is my way of celebrating you.
          </p>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
            And the love we share.
          </p>
        </div>

        <div className="mt-16">
          <svg
            className="mx-auto text-rose opacity-40"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
