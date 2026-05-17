type ClassicDividerProps = {
  className?: string
  light?: boolean
}

export function ClassicDivider({ className = '', light = false }: ClassicDividerProps) {
  const line = light
    ? 'via-white/25 to-white/40'
    : 'via-neutral-200 to-gold/40'
  const gem = light ? 'bg-white/60' : 'bg-gold'

  return (
    <div
      className={`flex items-center gap-5 ${className}`.trim()}
      aria-hidden
    >
      <span className={`h-px flex-1 bg-gradient-to-r from-transparent ${line}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${gem}`} />
      <span className={`h-px flex-1 bg-gradient-to-l from-transparent ${line}`} />
    </div>
  )
}
