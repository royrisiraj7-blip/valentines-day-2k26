"use client"

import { useSectionVisibility } from "@/hooks/use-section-visibility"

export function ChocolateDay() {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm tracking-[0.2em] uppercase text-rose">
        Chocolate Day
      </p>
      <h2 className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Sweetness
      </h2>

      <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        <p>
          Not everything has to be heavy and poetic. Sometimes love is also
          silly, warm, and a little bit melty in the middle. Like chocolate.
          Like you when you{"'"}re sleepy. Like the way you laugh when you
          try not to.
        </p>

        <p>
          You are the kind of sweetness that doesn{"'"}t overwhelm. You settle
          in softly &mdash; the way the first sip of hot chocolate feels on a
          cold evening. Not dramatic, but deeply comforting. The kind of sweet
          that makes you close your eyes and just... breathe.
        </p>

        <p>
          I know a real piece of chocolate would have been better in your hands
          right now. And there will be one &mdash; I promise. Something sweet,
          something slow, something meant to be enjoyed the way I enjoy
          being with you.
        </p>

        <p className="pt-4 text-muted-foreground italic">
          This one is sweet, comforting, and meant to be enjoyed slowly &mdash;
          just like you.
        </p>
      </div>
    </section>
  )
}
