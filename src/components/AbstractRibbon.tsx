type AbstractRibbonProps = {
  className?: string
}

/**
 * Open SVG paths — reads as a 3D gold ribbon crossing the hero edge.
 */
export function AbstractRibbon({ className = '' }: AbstractRibbonProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id="ribbon-gold-a" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#fff4d6" />
          <stop offset="40%" stopColor="#e8c96a" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
        <linearGradient id="ribbon-gold-b" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#f5e6b8" />
          <stop offset="100%" stopColor="#6b5420" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Depth strand — behind */}
      <path
        d="M 200 40 C 280 80, 320 160, 300 260 C 285 340, 220 400, 140 460"
        stroke="url(#ribbon-gold-b)"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Main ribbon sweep: starts inside (top), exits bottom-right */}
      <path
        d="M 220 24 C 300 70, 340 150, 318 248 C 298 340, 232 410, 168 468"
        stroke="url(#ribbon-gold-a)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* Thin highlight */}
      <path
        d="M 228 32 C 292 72, 328 138, 308 236 C 290 322, 238 388, 180 440"
        stroke="#fffef5"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Secondary abstract line branching out */}
      <path
        d="M 248 120 Q 300 180, 272 240 T 320 360"
        stroke="url(#ribbon-gold-a)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path
        d="M 180 200 Q 120 280, 88 360 Q 72 400, 48 440"
        stroke="url(#ribbon-gold-b)"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
