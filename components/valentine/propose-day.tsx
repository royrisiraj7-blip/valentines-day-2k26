"use client"

import { useSectionVisibility } from "@/hooks/use-section-visibility"

export function ProposeDay() {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm tracking-[0.2em] uppercase text-rose">
        Propose Day
      </p>
      <h2 className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        A Chosen Love
      </h2>

      <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        <p>
          I{"'"}m not writing this to ask you again. I already did &mdash; on
          November 19th &mdash; and you said yes. That evening still lives
          inside me. The nervousness. The way my voice almost cracked. The way
          your smile answered before your words did.
        </p>

        <p>
          This isn{"'"}t about the question anymore. It{"'"}s about what came
          after. It{"'"}s about the quiet certainty that settled between us.
          The kind that doesn{"'"}t need to shout. The kind that knows.
        </p>

        <p>
          I chose you, Sneha. Not in a single moment of courage, but in every
          small moment since &mdash; every morning I think of you first, every
          evening I want to hear your voice last.
        </p>

        <p>
          And you chose me back. That is still the most extraordinary thing
          anyone has ever done for me.
        </p>

        <p className="pt-4 text-muted-foreground italic">
          Thank you for saying yes. I will keep earning it &mdash; gently,
          honestly, and without rush.
        </p>
      </div>
    </section>
  )
}
