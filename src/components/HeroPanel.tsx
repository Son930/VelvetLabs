import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, motionInitial, staggerContainer } from '../lib/motion'

type HeroPanelProps = {
  imageSrc: string
  imageAlt: string
  minHeight?: string
  children: ReactNode
  align?: 'bottom-left' | 'center'
  overlay?: 'light' | 'gradient'
  /** Edge-to-edge panel (no side radius) for full-bleed sections */
  fullWidth?: boolean
}

export function HeroPanel({
  imageSrc,
  imageAlt,
  minHeight = 'min-h-[420px] sm:min-h-[520px]',
  children,
  align = 'bottom-left',
  overlay = 'light',
  fullWidth = false,
}: HeroPanelProps) {
  const reduceMotion = useReducedMotion()

  const alignClass =
    align === 'center'
      ? 'items-center justify-center text-center'
      : 'items-end justify-start text-left'

  const overlayClass =
    overlay === 'gradient'
      ? 'bg-gradient-to-t from-black/65 via-black/25 to-black/10'
      : 'bg-black/10'

  return (
    <article
      className={`relative w-full overflow-hidden ${fullWidth ? 'rounded-none' : 'rounded-3xl'} ${minHeight} flex ${alignClass}`}
    >
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduceMotion ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      <motion.div
        className={`relative z-10 w-full p-8 sm:p-10 sm:pb-12 lg:p-12 lg:pb-14 ${align === 'center' ? 'max-w-3xl' : ''}`}
        initial={motionInitial(reduceMotion)}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </article>
  )
}
