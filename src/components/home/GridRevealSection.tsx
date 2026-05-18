import { useReducedMotion } from 'framer-motion'
import { useCallback, useRef, type PointerEvent, type ReactNode } from 'react'

type GridRevealSectionProps = {
  children: ReactNode
  className?: string
}

const GRID_BG = {
  backgroundImage: `
    linear-gradient(to right, rgb(196 163 90 / 0.35) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(196 163 90 / 0.35) 1px, transparent 1px)
  `,
  backgroundSize: '56px 56px',
} as const

function prefersFinePointer(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(pointer: coarse)').matches
  )
}

export function GridRevealSection({ children, className = '' }: GridRevealSectionProps) {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (reduceMotion || !prefersFinePointer() || !gridRef.current) return

      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const mask = `radial-gradient(circle 220px at ${x}px ${y}px, black 0%, transparent 100%)`
      gridRef.current.style.maskImage = mask
      gridRef.current.style.webkitMaskImage = mask
    },
    [reduceMotion],
  )

  const onPointerLeave = useCallback(() => {
    if (!gridRef.current) return
    gridRef.current.style.maskImage = ''
    gridRef.current.style.webkitMaskImage = ''
  }, [])

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className={`group relative overflow-hidden bg-cream ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        ref={gridRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] transition-opacity duration-500 ease-out md:opacity-[0.05] md:group-hover:opacity-[0.38]"
        style={GRID_BG}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
