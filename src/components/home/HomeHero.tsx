import { Link } from 'react-router-dom'
import { ClassicDivider } from '../ClassicDivider'
import { images } from '../../data/images'
import { AnimatedItem, AnimatedReveal } from '../motion/Animated'
import { HeroWithRibbon } from '../HeroWithRibbon'

export function HomeHero() {
  return (
    <HeroWithRibbon
      imageSrc={images.heroGold}
      imageAlt="Abstract golden flowing forms"
      align="bottom-left"
      minHeight="min-h-[640px] sm:min-h-[760px] lg:min-h-[820px]"
      overlay="gradient"
    >
      <AnimatedReveal className="flex w-full flex-col flex-wrap justify-center items-left p-32">
 
        <AnimatedItem className="max-w-xl space-y-7 w-full">
          <p className="eyebrow eyebrow-light">Software house</p>
          <ClassicDivider light className="max-w-[10rem]" />
          <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Velvet Labs
          </h1>
          <p className="max-w-md font-serif text-base italic leading-relaxed text-white/90 sm:text-lg">
            We design and build modern luxury software — end to end, with calm
            precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="btn-classic-light">
              Start a project
            </Link>
            <Link to="/services" className="classic-link classic-link-light">
              Our services
            </Link>
          </div>
        </AnimatedItem>
      </AnimatedReveal>
    </HeroWithRibbon>
  )
}
