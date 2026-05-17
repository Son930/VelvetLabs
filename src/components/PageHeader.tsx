import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, lineGrow, motionInitial, staggerSlow } from '../lib/motion'

type PageHeaderProps = {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="mb-12 space-y-4 border-b border-neutral-100 pb-10"
      initial={motionInitial(reduceMotion)}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerSlow}
    >
      <motion.p variants={fadeUp} className="eyebrow">
        Velvet Labs
      </motion.p>
      <motion.div
        variants={lineGrow}
        style={{ transformOrigin: 'left center' }}
        className="h-px w-16 bg-gradient-to-r from-gold to-transparent"
        aria-hidden
      />
      <motion.h1
        variants={fadeUp}
        className="font-serif text-4xl font-medium text-ink sm:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p variants={fadeUp} className="lead-classic max-w-2xl">
        {subtitle}
      </motion.p>
    </motion.header>
  )
}
