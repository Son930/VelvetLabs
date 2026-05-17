import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'

const services = [
  {
    title: 'Web applications',
    description:
      'React, Next.js, and modern full-stack apps — dashboards, SaaS, and internal tools.',
  },
  {
    title: 'Mobile experiences',
    description:
      'Cross-platform and native-friendly flows that feel fast on every device.',
  },
  {
    title: 'UI / UX design',
    description:
      'Wireframes, design systems, and interfaces that match your brand and users.',
  },
  {
    title: 'Product consulting',
    description:
      'Scope definition, technical audits, and roadmap support before you commit to build.',
  },
  {
    title: 'MVP development',
    description:
      'Focused builds to validate ideas quickly — without cutting corners on foundations.',
  },
  {
    title: 'Maintenance & scale',
    description:
      'Performance tuning, refactors, and team enablement as your product matures.',
  },
]

export function ServicesPage() {
  return (
    <>
      <PageSEO {...seo.services} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="Services"
          subtitle="End-to-end support for teams that need design, engineering, and delivery under one roof."
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
