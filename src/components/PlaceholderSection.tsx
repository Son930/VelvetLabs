import { AnimatedSection } from './motion/Animated'

type PlaceholderSectionProps = {
  title: string
  id?: string
}

export function PlaceholderSection({ title, id }: PlaceholderSectionProps) {
  return (
    <AnimatedSection id={id} className="scroll-mt-24">
      <section className="classic-panel-placeholder px-6 py-16 sm:px-10 sm:py-20">
        <p className="eyebrow mb-3">Coming soon</p>
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">{title}</h2>
        <p className="lead-classic mt-4 !text-sm sm:!text-base">
          Content in preparation — check back shortly.
        </p>
      </section>
    </AnimatedSection>
  )
}
