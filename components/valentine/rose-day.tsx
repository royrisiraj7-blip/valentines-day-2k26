"use client"

import { useSectionVisibility } from "@/hooks/use-section-visibility"

export function RoseDay() {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm tracking-[0.2em] uppercase text-rose">
        Rose Day
      </p>
      <h2 className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Admiration
      </h2>

      <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        <p>
          There is a softness in the way you exist, Sneha. Not just in how you
          look &mdash; though you are beautiful in every quiet, unassuming way
          &mdash; but in how you carry yourself. In the gentle way you listen.
          In the warmth of your pauses. In the care you place into things most
          people would rush past.
        </p>

        <p>
          I notice the way your eyes hold a thought before you speak it.
          I notice how your presence feels like a room filling with light
          &mdash; not all at once, but slowly, until everything is warm.
        </p>

        <p>
          You don{"'"}t need to be loud to be felt. You don{"'"}t need to try
          to be loved. You just are. And that &mdash; the quiet, honest,
          effortless way you are &mdash; is what I admire most.
        </p>

        <p className="pt-4 text-muted-foreground italic">
          This rose is not for a moment. It{"'"}s for the way you make every
          moment more tender.
        </p>
      </div>
    </section>
  )
}
