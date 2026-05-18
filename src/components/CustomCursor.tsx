import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TEXT_CURSOR_SELECTOR =
  'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]'

function prefersCustomCursor(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(pointer: coarse)').matches
  )
}

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [overText, setOverText] = useState(false)

  useEffect(() => {
    const fineMq = window.matchMedia('(pointer: fine)')
    const coarseMq = window.matchMedia('(pointer: coarse)')

    const syncEnabled = () => {
      setEnabled(
        fineMq.matches && !coarseMq.matches && !window.matchMedia('(hover: none)').matches,
      )
    }

    syncEnabled()
    fineMq.addEventListener('change', syncEnabled)
    coarseMq.addEventListener('change', syncEnabled)
    window.matchMedia('(hover: none)').addEventListener('change', syncEnabled)

    return () => {
      fineMq.removeEventListener('change', syncEnabled)
      coarseMq.removeEventListener('change', syncEnabled)
      window.matchMedia('(hover: none)').removeEventListener('change', syncEnabled)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion || !enabled || !prefersCustomCursor()) return

    document.documentElement.classList.add('velvet-custom-cursor')

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)

      const target = document.elementFromPoint(event.clientX, event.clientY)
      setOverText(Boolean(target?.closest(TEXT_CURSOR_SELECTOR)))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.classList.remove('velvet-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [reduceMotion, enabled])

  if (reduceMotion || !enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[10000] mix-blend-difference"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) rotate(-12deg) scaleY(-1)`,
        opacity: visible && !overText ? 1 : 0,
        willChange: 'transform',
      }}
    >
      <span className="block font-serif text-[26px] font-medium leading-none text-white select-none">
        V
      </span>
    </div>
  )
}
