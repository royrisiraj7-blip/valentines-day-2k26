export function Footer() {
  return (
    <footer className="px-6 py-16 text-center">
      <div className="mx-auto max-w-sm">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-border" aria-hidden="true" />
          <svg
            className="text-rose opacity-50"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="h-px w-12 bg-border" aria-hidden="true" />
        </div>
        <p className="font-sans text-sm text-muted-foreground">
          Written with all my heart, for yours.
        </p>
      </div>
    </footer>
  )
}
