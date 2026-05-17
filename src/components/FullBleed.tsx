import type { ReactNode } from 'react'

type FullBleedProps = {
  children: ReactNode
  className?: string
}

/** Breaks out of a centered max-width parent to span the full viewport width. */
export function FullBleed({ children, className = '' }: FullBleedProps) {
  return (
    <section
      className={`relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 ${className}`.trim()}
    >
      {children}
    </section>
  )
}
