import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion'
import type { ReactNode } from 'react'
import {
  defaultViewport,
  fadeUp,
  lineReveal,
  motionInitial,
  pageTransition,
  staggerContainer,
  staggerSlow,
} from '../../lib/motion'

type AnimatedProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  variants?: Variants
  delay?: number
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  ...rest
}: AnimatedProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={motionInitial(reduceMotion)}
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedStagger({
  children,
  className,
  slow = false,
  ...rest
}: AnimatedProps & { slow?: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={motionInitial(reduceMotion)}
      whileInView="visible"
      viewport={defaultViewport}
      variants={slow ? staggerSlow : staggerContainer}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className,
  variants = fadeUp,
  ...rest
}: AnimatedProps) {
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  )
}

/** Mount animation for hero / above-the-fold content */
export function AnimatedReveal({
  children,
  className,
  slow = false,
}: {
  children: ReactNode
  className?: string
  slow?: boolean
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={motionInitial(reduceMotion)}
      animate="visible"
      variants={slow ? staggerSlow : staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedPage({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="overflow-x-clip"
      initial={motionInitial(reduceMotion)}
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  )
}

/** Clip-reveal text line (classic editorial) */
export function AnimatedLine({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={motionInitial(reduceMotion)}
        whileInView="visible"
        viewport={defaultViewport}
        variants={lineReveal}
      >
        {children}
      </motion.div>
    </div>
  )
}
