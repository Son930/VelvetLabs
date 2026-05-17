import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { fadeDown, fadeUp, motionInitial, staggerContainer } from '../../lib/motion'
import { navLinks, primaryNav } from '../../data/navigation'

const leftLinks = primaryNav.slice(0, 2)
const rightLinks = primaryNav.slice(2)

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'classic-link',
    isActive ? '!text-ink after:!w-full' : '',
  ].join(' ')

export function Navbar() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="border-b border-neutral-100/80 bg-white"
      initial={motionInitial(reduceMotion)}
      animate="visible"
      variants={fadeDown}
    >
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <motion.div
        className="relative mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-10 sm:py-12"
        variants={staggerContainer}
        initial={motionInitial(reduceMotion)}
        animate="visible"
      >
        <nav className="hidden items-center justify-start gap-10 md:flex">
          {leftLinks.map(({ label, path }) => (
            <motion.div key={path} variants={fadeUp}>
              <NavLink to={path} className={navLinkClass} end={path === '/'}>
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="col-span-3 flex justify-center md:col-span-1 md:col-start-2"
          variants={fadeUp}
        >
          <Link
            to="/"
            className="font-serif text-4xl font-medium leading-none tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-5xl"
            aria-label="Velvet Labs home"
          >
            V
          </Link>
        </motion.div>

        <nav className="hidden items-center justify-end gap-10 md:flex md:col-start-3">
          {rightLinks.map(({ label, path }) => (
            <motion.div key={path} variants={fadeUp}>
              <NavLink to={path} className={navLinkClass}>
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.button
          type="button"
          variants={fadeUp}
          className="classic-link absolute right-6 top-1/2 -translate-y-1/2 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-t border-neutral-100 px-6 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-5 py-6">
              {navLinks.map(({ label, path }, i) => (
                <motion.li
                  key={path}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.04 }}
                >
                  <NavLink
                    to={path}
                    className={navLinkClass}
                    end={path === '/'}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
