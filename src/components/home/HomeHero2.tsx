import { motion, useReducedMotion } from 'framer-motion'
import { ClassicDivider } from '../ClassicDivider'
import { images } from '../../data/images'
import {
  fadeUp,
  lineGrow,
  lineReveal,
  motionInitial,
  staggerSlow,
} from '../../lib/motion'

const lines = [
  'Less paper.',
  'Faster workflows.',
  'Software built for you.',
]

export default function HomeHero2() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* <img
        src={images.heroVelvet}
        alt=""
        className="pointer-events-none absolute top-8 right-0 hidden h-48 w-auto max-w-[40%] rounded-2xl object-cover opacity-[0.12] sm:block lg:h-56"
        aria-hidden
      /> */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(196,163,90,0.08),transparent_65%)]"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8"
        initial={motionInitial(reduceMotion)}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerSlow}
      >
        <motion.p variants={fadeUp} className="eyebrow">
          Velvet Labs
        </motion.p>

        <motion.div
          variants={lineGrow}
          style={{ transformOrigin: 'left center' }}
          className="hero2-gold-line mb-8 h-px w-full max-w-[12rem] bg-gradient-to-r from-gold via-gold/80 to-transparent sm:max-w-[16rem]"
          aria-hidden
        />

        <div className="space-y-1 sm:space-y-2">
          {lines.map((line) => (
            <motion.div key={line} className="overflow-hidden">
              <motion.h2
                variants={lineReveal}
                className="font-serif text-4xl font-medium leading-[1.08] tracking-wide text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem]"
              >
                {line}
              </motion.h2>
            </motion.div>
          ))}
        </div>

        <ClassicDivider className="my-10 max-w-md" />

        <motion.p variants={fadeUp} className="lead-classic max-w-lg">
          We design and deliver bespoke, affordable digital tools — not bloated
          enterprise suites — so your processes fit the way your business
          actually runs.
        </motion.p>
      </motion.div>
    </section>
  )
}
