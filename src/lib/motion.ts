import type { Transition, Variants } from 'framer-motion'

export const easeLuxury = [0.22, 1, 0.36, 1] as const

export const defaultViewport = { once: true, amount: 0.2 } as const

export const defaultTransition: Transition = {
  duration: 0.75,
  ease: easeLuxury,
}

export function motionInitial(reduceMotion: boolean | null) {
  return reduceMotion ? 'visible' : 'hidden'
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeLuxury },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeLuxury },
  },
}

export const lineReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.85, ease: easeLuxury },
  },
}

export const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: easeLuxury },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
}

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeLuxury },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.3, ease: easeLuxury },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: easeLuxury },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: easeLuxury },
  },
}
