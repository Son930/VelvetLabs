import type { ReactNode } from 'react'

type FullBleedProps = {
  children: ReactNode
  className?: string
}

/** Full viewport width without `w-screen` (avoids scrollbar overflow). */
export function FullBleed({ children, className = '' }: FullBleedProps) {
  return (
    <section className={`relative w-full ${className}`.trim()}>{children}</section>
  )
}
