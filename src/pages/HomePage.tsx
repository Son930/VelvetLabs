import { Link } from 'react-router-dom'
import { ClassicDivider } from '../components/ClassicDivider'
import { FullBleed } from '../components/FullBleed'
import { HomeHero } from '../components/home/HomeHero'
import HomeHero2 from '../components/home/HomeHero2'
import { HeroPanel } from '../components/HeroPanel'
import { AnimatedItem, AnimatedSection, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { images } from '../data/images'
import { seo } from '../data/seo'

export function HomePage() {
  return (
    <>
      <PageSEO {...seo.home} />
      <div className="mx-auto max-w-full space-y-8 overflow-x-clip px-8 pb-16 sm:space-y-8 sm:pb-20">
        <HomeHero />
      </div>

      <ClassicDivider className="mx-auto max-w-md px-8" />

      <HomeHero2 />

      <ClassicDivider className="mx-auto max-w-md px-8" />

      <div className="mx-auto max-w-7xl space-y-8 overflow-x-clip px-8 sm:space-y-8">
        <AnimatedSection>
          <HeroPanel
            imageSrc={images.heroVelvet}
            imageAlt="Abstract glass florals"
            align="center"
            minHeight="min-h-[380px] sm:min-h-[480px]"
          >
            <p className="font-serif text-xl font-medium uppercase leading-snug tracking-[0.14em] text-white sm:text-2xl md:text-3xl">
              Redefining modern luxury
              <br />
              <span className="normal-case tracking-wide">with modern technology</span>
            </p>
          </HeroPanel>
        </AnimatedSection>
      </div>

      <FullBleed>
        <AnimatedSection className="py-12 sm:py-16">
          <HeroPanel
            imageSrc={images.blue}
            imageAlt="Blue background"
            align="center"
            fullWidth
            minHeight="min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]"
          >
            <div className="mx-auto max-w-2xl px-6 text-center">
              <p className="eyebrow eyebrow-light">What we build</p>
              <ClassicDivider light className="my-6" />
              <h2 className="font-serif text-4xl font-medium leading-[1.08] tracking-wide text-white sm:text-5xl md:text-6xl">
                Our services
              </h2>
              <p className="mx-auto mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-white/90">
                Web applications crafted with modern stacks — Laravel, React, Next.js,
                and interfaces worthy of the Velvet name.
              </p>
              <Link to="/services" className="btn-classic-light mt-10">
                View all services
              </Link>
            </div>
          </HeroPanel>
        </AnimatedSection>
      </FullBleed>

      <div className="mx-auto max-w-7xl overflow-x-clip px-8 pb-20 pt-8">
        <ClassicDivider className="mb-10" />
        <AnimatedStagger className="flex flex-wrap justify-center gap-8">
          <AnimatedItem>
            <Link to="/work" className="classic-link">
              View work
            </Link>
          </AnimatedItem>
          <AnimatedItem>
            <Link to="/process" className="classic-link">
              Our process
            </Link>
          </AnimatedItem>
          <AnimatedItem>
            <Link to="/contact" className="classic-link">
              Get in touch
            </Link>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </>
  )
}
