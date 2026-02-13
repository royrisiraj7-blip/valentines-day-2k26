"use client"

import React from "react"

import { useState } from "react"
import { HeroSection } from "@/components/valentine/hero-section"
import { DayNavigation } from "@/components/valentine/day-navigation"
import { RoseDay } from "@/components/valentine/rose-day"
import { ProposeDay } from "@/components/valentine/propose-day"
import { ChocolateDay } from "@/components/valentine/chocolate-day"
import { TeddyDay } from "@/components/valentine/teddy-day"
import { PromiseDay } from "@/components/valentine/promise-day"
import { ValentinesDay } from "@/components/valentine/valentines-day"
import { SecretSection } from "@/components/valentine/secret-section"
import { Footer } from "@/components/valentine/footer"
import { FloatingHearts } from "@/components/valentine/floating-hearts"

const dayComponents: Record<string, React.ComponentType> = {
  rose: RoseDay,
  propose: ProposeDay,
  chocolate: ChocolateDay,
  teddy: TeddyDay,
  promise: PromiseDay,
  valentines: ValentinesDay,
}

export default function Page() {
  const [activeDay, setActiveDay] = useState("rose")

  const ActiveDayComponent = dayComponents[activeDay]

  return (
    <main className="relative min-h-screen">
      <FloatingHearts />
      <HeroSection />

      <DayNavigation activeDay={activeDay} onDayChange={setActiveDay} />

      <div className="min-h-[60vh]">
        <ActiveDayComponent key={activeDay} />
      </div>

      <div className="border-t border-border">
        <SecretSection />
      </div>

      <Footer />
    </main>
  )
}
