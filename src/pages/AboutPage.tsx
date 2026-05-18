import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedSection, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'
import { site } from '../data/site'

const values = [
  'Paperless where it counts — we target the workflows that waste the most time and paper.',
  'Bespoke, not boxed — software shaped around how your team actually operates.',
  'Honest scope — affordable delivery without hiding cost in bloated platforms.',
  'Managed partnership — we host, operate, and support your software so your team can focus on using it.',
]

export function AboutPage() {
  return (
    <>
      <PageSEO {...seo.about} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="About"
          subtitle="Velvet Labs is a small studio that helps businesses leave paper-heavy processes behind — with affordable, custom-built software."
        />

        <ClassicDivider className="mb-12 max-w-md" />

        <AnimatedSection>
          <section className="classic-card mb-12 p-8 sm:p-10">
            <h2 className="font-serif text-2xl text-ink">Our team</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {site.foundingTeamExperienceShort}
            </p>
          </section>
        </AnimatedSection>

        <AnimatedStagger className="grid gap-8 lg:grid-cols-2">
          <AnimatedItem>
            <section className="classic-card p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">Our mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Too many teams still run on forms, spreadsheets, and filing
                cabinets — losing hours to duplicate entry and mistakes. We exist
                to replace those paper-based processes with calm, clear digital
                tools your people will actually use.
              </p>
            </section>
          </AnimatedItem>

          <AnimatedItem>
            <section className="classic-card p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">How we work</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                We start by understanding your workflow as it is today, then
                design and build software around it — not the other way around.
                Velvet Labs builds, hosts, and manages the product with ongoing
                support; your team uses it day to day while we remain the operator.
              </p>
            </section>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="mt-12" slow>
          <AnimatedItem>
            <h2 className="font-serif text-2xl text-ink">What we believe</h2>
          </AnimatedItem>
          <ul className="mt-8 space-y-4">
            {values.map((item) => (
              <AnimatedItem key={item}>
                <li className="border-l-2 border-gold/60 py-1 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                  {item}
                </li>
              </AnimatedItem>
            ))}
          </ul>
        </AnimatedStagger>
      </div>
    </>
  )
}
