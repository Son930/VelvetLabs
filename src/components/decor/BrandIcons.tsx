type IconProps = {
  className?: string
}

export function IconPaperStack({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="10" y="8" width="26" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14h18M14 20h18M14 26h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect
        x="14"
        y="12"
        width="26"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
    </svg>
  )
}

export function IconDigitalCheck({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 24l6 6 12-14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconWorkflow({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="36" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 22h12l6-8M26 26l6 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconHandshake({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 28l8-6 6 4 10-10 8 6v10H8V28z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 22l4 4M28 18l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
