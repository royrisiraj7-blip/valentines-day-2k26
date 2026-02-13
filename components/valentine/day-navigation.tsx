"use client"

interface DayNavigationProps {
  activeDay: string
  onDayChange: (day: string) => void
}

const days = [
  { id: "rose", label: "Rose Day" },
  { id: "propose", label: "Propose Day" },
  { id: "chocolate", label: "Chocolate Day" },
  { id: "teddy", label: "Teddy Day" },
  { id: "promise", label: "Promise Day" },
  { id: "valentines", label: "Valentine's Day" },
]

export function DayNavigation({ activeDay, onDayChange }: DayNavigationProps) {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm" aria-label="Valentine's Week days">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-1 px-2 py-2 md:gap-1.5 md:px-4 md:py-3">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => onDayChange(day.id)}
            className={`whitespace-nowrap rounded-full px-2.5 py-1 font-sans text-[11px] transition-all duration-300 md:px-3.5 md:py-1.5 md:text-sm ${
              activeDay === day.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
