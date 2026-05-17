import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'

const values = [
  'Craft over shortcuts — we care about the details users feel.',
  'Transparent collaboration — you always know where things stand.',
  'Pragmatic engineering — the right tool for the problem, not hype.',
  'Continuous learning — our lab mindset keeps us sharp and curious.',
]

export function AboutPage() {
  return (
    <>
      <PageSEO {...seo.about} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="About"
          subtitle="We're a software house lab — a small team that builds digital products with intention, clarity, and room to grow."
        />

        <ClassicDivider className="mb-12 max-w-md" />

        <AnimatedStagger className="grid gap-8 lg:grid-cols-2">
          <AnimatedItem>
            <section className="classic-card p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">Our mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Velvet Labs exists to help founders and teams ship software that earns
                trust. We combine product thinking, solid engineering, and a calm
                delivery rhythm so you can focus on what matters — your users and your
                business.
              </p>
            </section>
          </AnimatedItem>

          <AnimatedItem>
            <section className="classic-card p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">Lab culture</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                We treat every engagement like a lab experiment: hypothesize, build,
                measure, refine. That means prototypes when useful, honest feedback
                early, and codebases your team can own long after we hand off.
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
