"use client"

import { useSectionVisibility } from "@/hooks/use-section-visibility"

export function PromiseDay() {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm tracking-[0.2em] uppercase text-rose">
        Promise Day
      </p>
      <h2 className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        Intentions
      </h2>

      <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
        <p>
          I won{"'"}t promise you forever, Sneha. Not because I don{"'"}t want
          it, but because I want to give you something more honest than a word.
          I want to give you what I can hold in my hands, right now.
        </p>

        <p className="pb-2">So here is what I promise you:</p>

        <ul className="space-y-5 pl-1">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will listen to you &mdash; even when the words are difficult,
              especially when they are.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will be patient with the silences between us, and never rush you
              to fill them.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will show up for the small things &mdash; the texts, the calls,
              the ordinary evenings that hold us together.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will tell you the truth gently, and receive yours the same way.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will not take your softness for granted. I know how rare it is,
              and I will protect it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
            <span>
              I will grow &mdash; not just for myself, but for us. I will try
              to become someone worthy of the tenderness you give me.
            </span>
          </li>
        </ul>

        <p className="pt-4 text-muted-foreground italic">
          These are not grand declarations. They are quiet commitments. And I
          will return to them, again and again.
        </p>
      </div>
    </section>
  )
}
