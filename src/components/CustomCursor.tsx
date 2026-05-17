import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TEXT_CURSOR_SELECTOR =
  'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]'

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [overText, setOverText] = useState(false)

  useEffect(() => {
    if (reduceMotion) return

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
  }, [reduceMotion])

  if (reduceMotion) return null

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
