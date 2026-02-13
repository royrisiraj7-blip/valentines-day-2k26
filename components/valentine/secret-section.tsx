"use client"

import React from "react"

import { useState } from "react"
import { Lock, Unlock } from "lucide-react"

export function SecretSection() {
  const [password, setPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase().trim() === "perfect") {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-20 md:py-28">
      <div className="rounded-lg border border-border bg-card p-8 md:p-12">
        {!unlocked ? (
          <div className="text-center">
            <Lock
              className="mx-auto mb-6 text-muted-foreground"
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mb-2 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
              What{"'"}s Next
            </h2>
            <p className="mb-8 font-sans text-sm text-muted-foreground">
              You know the key. The first song I ever sang for you.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
              <label htmlFor="secret-password" className="sr-only">
                Password
              </label>
              <input
                id="secret-password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type it here..."
                className={`w-full rounded-lg border bg-background px-4 py-3 text-center font-sans text-sm text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                  error ? "border-destructive" : "border-input"
                }`}
                autoComplete="off"
              />
              {error && (
                <p className="mt-3 font-sans text-sm text-muted-foreground">
                  That{"'"}s not it. Think of the song.
                </p>
              )}
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-primary px-6 py-3 font-sans text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Unlock
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in-up text-center">
            <Unlock
              className="mx-auto mb-6 text-rose"
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mb-10 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
              What{"'"}s Next
            </h2>

            <div className="space-y-6 text-left font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
              <p>
                What{"'"}s next isn{"'"}t anything big or dramatic.
              </p>
              <p>
                It{"'"}s walks, conversations, and small plans we can actually
                keep.
              </p>
              <p>
                It{"'"}s choosing each other on ordinary days, on quiet days,
                and on the days when everything feels a little heavier than
                usual.
              </p>
              <p>
                It{"'"}s talking through misunderstandings instead of letting
                them grow, listening even when it{"'"}s uncomfortable, and
                learning how to be better for each other.
              </p>
              <p>
                It{"'"}s staying &mdash; not just when things are easy, but when
                they{"'"}re messy, emotional, and uncertain.
              </p>
              <p>
                It{"'"}s knowing that even on the worst days, we{"'"}re not
                against each other &mdash; we{"'"}re on the same side, figuring
                it out together, one step at a time.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
