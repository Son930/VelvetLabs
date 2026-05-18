import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ClassicDivider } from '../ClassicDivider'
import { legalNav, primaryNav } from '../../data/navigation'
import { fadeUp, motionInitial, staggerContainer } from '../../lib/motion'
import { site, socialLinks } from '../../data/site'

function FooterLinkGroup({
  heading,
  links,
}: {
  heading: string
  links: readonly { label: string; path: string }[]
}) {
  return (
    <motion.div variants={fadeUp}>
      <p className="eyebrow mb-5">{heading}</p>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link to={path} className="classic-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer
      className="bg-surface transition-colors duration-300"
      initial={motionInitial(reduceMotion)}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      <ClassicDivider className="mx-auto max-w-6xl px-6 pt-14" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div variants={fadeUp} className="space-y-5 sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-3xl tracking-tight text-ink">V</p>
          <p className="lead-classic max-w-xs !text-base !not-italic">{site.tagline}</p>
          <div className="flex flex-wrap gap-5 pt-1">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="classic-link"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <FooterLinkGroup heading="Site" links={primaryNav} />
        <FooterLinkGroup heading="Legal" links={legalNav} />
      </div>

      <motion.p
        variants={fadeUp}
        className="border-t border-border pb-8 pt-6 text-center text-[10px] uppercase tracking-[0.28em] text-muted"
      >
        © {year} {site.name}
      </motion.p>
    </motion.footer>
  )
}
