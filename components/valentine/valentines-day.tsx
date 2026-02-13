"use client"

import { useSectionVisibility } from "@/hooks/use-section-visibility"

export function ValentinesDay() {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm tracking-[0.2em] uppercase text-rose">
        Valentine{"'"}s Day
      </p>
      <h2 className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Presence
      </h2>

      <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        <p>
          I don{"'"}t have a grand gesture today, Sneha. No skywriting or
          surprise trips or a hundred red balloons. What I have is simpler, and
          I hope it{"'"}s enough.
        </p>

        <p>
          I have mornings where the first thought that surfaces is you.
          I have evenings where your voice is the thing that lets the day feel
          complete. I have the quiet knowledge that somewhere in this world,
          someone exists who chose me &mdash; and I chose her back.
        </p>

        <p>
          Love, for me, is not in the extraordinary. It{"'"}s in the way you
          ask if I{"'"}ve eaten. In the way I remember to tell you something
          funny because I know it would make you smile. In the way we{"'"}re
          building something out of ordinary moments, stacked together with
          care.
        </p>

        <p>
          Today, I don{"'"}t need the world. I just need this &mdash; you,
          reading these words, knowing they were written with all the honesty I
          have.
        </p>

        <p className="pt-4 text-center font-serif text-xl text-foreground italic md:text-2xl">
          You are my favourite kind of day.
        </p>
      </div>
    </section>
  )
}
