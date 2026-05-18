import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'

const services = [
  {
    title: 'Process digitisation',
    description:
      'Map paper-heavy workflows and replace them with clear digital steps — fewer forms, fewer errors, faster approvals.',
  },
  {
    title: 'Bespoke web applications',
    description:
      'Dashboards, internal tools, and customer-facing apps built around your business — React, Next.js, and modern full-stack delivery.',
  },
  {
    title: 'Workflow automation',
    description:
      'Notifications, integrations, and rules that remove manual handoffs between teams and systems.',
  },
  {
    title: 'Paper-to-digital migration',
    description:
      'Structured move from spreadsheets and filing cabinets to a single source of truth your staff can trust.',
  },
  {
    title: 'Discovery & scoping',
    description:
      'Honest assessment of what bespoke software should solve first — before you commit to build.',
  },
  {
    title: 'Support & iteration',
    description:
      'Hosting, refinements, training, and maintenance as your processes evolve — Velvet Labs stays your managed operator.',
  },
]

export function ServicesPage() {
  return (
    <>
      <PageSEO {...seo.services} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="Services"
          subtitle="Affordable, custom software to replace the paper processes that slow your business — designed and delivered end to end."
        />

        <ClassicDivider className="mb-12 max-w-md" />

        <AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }) => (
            <AnimatedItem key={title}>
              <article className="classic-card h-full p-8">
                <p className="eyebrow mb-4">Service</p>
                <h2 className="font-serif text-xl text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </>
  )
}
