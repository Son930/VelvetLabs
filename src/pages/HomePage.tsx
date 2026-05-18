import { Link } from 'react-router-dom'
import { ClassicDivider } from '../components/ClassicDivider'
import {
  IconDigitalCheck,
  IconHandshake,
  IconPaperStack,
  IconWorkflow,
} from '../components/decor/BrandIcons'
import { FullBleed } from '../components/FullBleed'
import { GridRevealSection } from '../components/home/GridRevealSection'
import { HomeHero } from '../components/home/HomeHero'
import HomeHero2 from '../components/home/HomeHero2'
import { HeroPanel } from '../components/HeroPanel'
import { AnimatedItem, AnimatedSection, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { images } from '../data/images'
import { seo } from '../data/seo'
import { site } from '../data/site'

const benefitIcons = [IconPaperStack, IconWorkflow, IconDigitalCheck, IconHandshake] as const

const benefits = [
  {
    title: 'Paperless by design',
    description:
      'Forms, sign-offs, and records move into clear digital workflows — less printing, filing, and hunting through folders.',
  },
  {
    title: 'Built around you',
    description:
      'We scope and build software around your real processes, not a one-size template that forces you to change how you work.',
  },
  {
    title: 'Affordable delivery',
    description:
      'Focused bespoke builds without enterprise-suite pricing — sensible scope, transparent delivery, software you can grow with.',
  },
  {
    title: 'Built, hosted & managed',
    description:
      'We build, host, and manage your software with ongoing support — you use it daily while Velvet Labs stays the operator.',
  },
]

const capabilities = [
  {
    title: 'Process digitisation',
    description:
      'Map paper-heavy workflows and replace them with clear digital steps — fewer forms, fewer errors, faster approvals.',
  },
  {
    title: 'Bespoke web applications',
    description:
      'Dashboards, internal tools, and customer-facing apps built around your business — modern full-stack delivery.',
  },
  {
    title: 'Workflow automation',
    description:
      'Notifications, integrations, and rules that remove manual handoffs between teams and systems.',
  },
] as const

const values = [
  'Paperless where it counts — we target the workflows that waste the most time and paper.',
  'Bespoke, not boxed — software shaped around how your team actually operates.',
  'Honest scope — affordable delivery without hiding cost in bloated platforms.',
  'Managed partnership — we host, operate, and support your software so your team can focus on using it.',
] as const

const processSteps = [
  { step: '01', label: 'Map', detail: 'We document how work flows today — forms, handoffs, and bottlenecks.' },
  { step: '02', label: 'Scope', detail: 'Focused scope and milestones you can follow before build starts.' },
  { step: '03', label: 'Build', detail: 'Design and delivery of bespoke software, hosted and managed by us.' },
  { step: '04', label: 'Support', detail: 'Ongoing hosting, refinements, and support as your processes evolve.' },
] as const

export function HomePage() {
  return (
    <>
      <PageSEO {...seo.home} />

      <FullBleed>
        <HomeHero />
      </FullBleed>

      <div className="mx-auto max-w-7xl px-8">
        <ClassicDivider className="mx-auto max-w-md py-10 sm:py-12" />
      </div>

      <HomeHero2 />

      <GridRevealSection className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <AnimatedStagger className="text-center">
            <AnimatedItem>
              <p className="eyebrow">What we build</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink sm:text-4xl">
                Capabilities for paperless operations
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Affordable, custom software to replace the paper processes that slow your
                business — designed and delivered end to end.
              </p>
            </AnimatedItem>
          </AnimatedStagger>

          <ClassicDivider className="mx-auto my-10 max-w-md" />

          <AnimatedStagger className="grid gap-6 md:grid-cols-3">
            {capabilities.map(({ title, description }) => (
              <AnimatedItem key={title}>
                <article className="classic-card h-full p-8">
                  <p className="eyebrow mb-4">Capability</p>
                  <h3 className="font-serif text-xl text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </GridRevealSection>

      <div className="mx-auto max-w-7xl px-8">
        <ClassicDivider className="mx-auto max-w-md py-10 sm:py-12" />
      </div>

      <section className="mx-auto max-w-7xl px-8 py-10 sm:py-12">
        <AnimatedSection>
          <article className="classic-card mx-auto max-w-4xl p-8 sm:p-10">
            <p className="eyebrow">Our experience</p>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-ink sm:text-3xl">
              A team that has delivered at scale
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {site.foundingTeamExperience}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {site.foundingTeamExperienceShort} We start by understanding your workflow as it
              is today, then design and build software around it — not the other way around.
            </p>
          </article>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-4 sm:pb-8">
        <AnimatedStagger slow>
          <AnimatedItem>
            <h2 className="text-center font-serif text-2xl font-medium tracking-wide text-ink sm:text-3xl">
              What we believe
            </h2>
          </AnimatedItem>
          <ul className="mx-auto mt-10 max-w-3xl space-y-4">
            {values.map((item) => (
              <AnimatedItem key={item}>
                <li className="border-l-2 border-gold/60 py-1 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                  {item}
                </li>
              </AnimatedItem>
            ))}
          </ul>
        </AnimatedStagger>
      </section>

      <div className="mx-auto max-w-7xl px-8">
        <ClassicDivider className="mx-auto max-w-md py-10 sm:py-12" />
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-8 pb-4 sm:space-y-12">
        <AnimatedSection>
          <HeroPanel
            imageSrc={images.warehouse}
            imageAlt="Warehouse operations with paperwork and manual processes"
            align="bottom-left"
            overlay="gradient"
            minHeight="min-h-[380px] sm:min-h-[460px]"
          >
            <p className="eyebrow eyebrow-light mb-4">The problem</p>
            <h2 className="font-serif text-3xl font-medium leading-snug tracking-wide text-white sm:text-4xl md:text-[2.5rem]">
              Paper processes slow everyone down
            </h2>
            <p className="mt-4 max-w-lg font-serif text-base italic leading-relaxed text-white/90 sm:text-lg">
              Duplicate data entry, lost files, slow approvals, and errors that slip
              through — while cupboards fill with paper nobody wants to manage.
            </p>
          </HeroPanel>
        </AnimatedSection>

        <AnimatedSection className="grid items-stretch gap-8 lg:grid-cols-[1fr_minmax(0,0.9fr)] lg:gap-10">
          <HeroPanel
            imageSrc={images.referenceMockup}
            imageAlt="Digital product mockup replacing paper workflows"
            align="center"
            overlay="gradient"
            minHeight="min-h-[340px] sm:min-h-[420px]"
          >
            <p className="eyebrow eyebrow-light mb-4">Our approach</p>
            <h2 className="font-serif text-3xl font-medium leading-snug tracking-wide text-white sm:text-4xl">
              Bespoke software that fits your business
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-serif text-base italic leading-relaxed text-white/90 sm:text-lg">
              Web apps, dashboards, and workflows designed for how you operate —
              delivered affordably, without forcing you into a generic platform.
            </p>
            <Link to="/contact" className="btn-classic-light mt-8">
              Discuss your workflow
            </Link>
          </HeroPanel>

          <aside className="relative hidden overflow-hidden rounded-3xl border border-border bg-cream lg:block">
            <img
              src={images.blue}
              alt=""
              className="absolute -right-8 -bottom-8 h-[70%] w-auto max-w-none opacity-90"
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <p className="eyebrow">From paper to product</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ink">
                We map your workflow, agree scope, then design and build — with milestones
                you can follow.
              </p>
              <img
                src={images.decorFlow}
                alt=""
                className="pointer-events-none mt-8 h-24 w-auto opacity-40"
                aria-hidden
              />
            </div>
          </aside>
        </AnimatedSection>
      </div>

      <section className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
        <AnimatedStagger className="text-center">
          <AnimatedItem>
            <p className="eyebrow">How we help</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink sm:text-4xl">
              From paper chaos to calm digital work
            </h2>
          </AnimatedItem>
        </AnimatedStagger>

        <ClassicDivider className="mx-auto my-10 max-w-md" />

        <AnimatedStagger className="grid gap-6 sm:grid-cols-2">
          {benefits.map(({ title, description }, index) => {
            const Icon = benefitIcons[index]
            return (
              <AnimatedItem key={title}>
                <article className="classic-card h-full p-8">
                  <Icon className="mb-5 text-gold" />
                  <h3 className="font-serif text-xl text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </AnimatedItem>
            )
          })}
        </AnimatedStagger>

        <AnimatedSection className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-cream p-8 sm:p-10">
          <img
            src={images.decorRibbon}
            alt=""
            className="pointer-events-none absolute -top-6 -right-4 h-32 w-auto opacity-25 sm:h-40"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-muted">
              We map your current workflow, agree a focused scope, then design and
              build — with clear milestones, hosting, and ongoing support managed by
              Velvet Labs.
            </p>
            <Link to="/contact" className="classic-link mt-6 inline-block">
              Talk through your process
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-8 sm:pb-12">
        <AnimatedStagger className="text-center">
          <AnimatedItem>
            <p className="eyebrow">How we work</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-ink sm:text-3xl">
              A clear path from paper to product
            </h2>
          </AnimatedItem>
        </AnimatedStagger>
        <AnimatedStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ step, label, detail }) => (
            <AnimatedItem key={step}>
              <article className="classic-card h-full p-6">
                <p className="font-serif text-2xl text-gold">{step}</p>
                <h3 className="mt-2 font-serif text-lg text-ink">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </section>

      <FullBleed>
        <AnimatedSection className="py-12 sm:py-16">
          <HeroPanel
            imageSrc={images.heroGold}
            imageAlt="Warm abstract background"
            align="center"
            fullWidth
            overlay="gradient"
            minHeight="min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]"
          >
            <div className="mx-auto max-w-2xl px-6 text-center">
              <p className="eyebrow eyebrow-light">Ready to start?</p>
              <ClassicDivider light className="my-6" />
              <h2 className="font-serif text-4xl font-medium leading-[1.08] tracking-wide text-white sm:text-5xl md:text-6xl">
                Tell us what still runs on paper
              </h2>
              <p className="mx-auto mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-white/90">
                A short conversation is enough to see whether bespoke software
                is the right fit — no pressure, no enterprise sales pitch.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="btn-classic-light">
                  Get in touch
                </Link>
                <Link to="/legal" className="classic-link classic-link-light">
                  Privacy & terms
                </Link>
              </div>
            </div>
          </HeroPanel>
        </AnimatedSection>
      </FullBleed>

      <div className="mx-auto max-w-7xl px-8 pb-20 pt-8">
        <ClassicDivider className="mb-10" />
        <AnimatedStagger className="flex flex-wrap justify-center gap-8">
          <AnimatedItem>
            <Link to="/contact" className="classic-link">
              Get in touch
            </Link>
          </AnimatedItem>
          <AnimatedItem>
            <Link to="/legal" className="classic-link">
              Legal
            </Link>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </>
  )
}
