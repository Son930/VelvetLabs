import { Link } from 'react-router-dom'
import { ClassicDivider } from '../ClassicDivider'
import { images } from '../../data/images'
import { AnimatedItem, AnimatedReveal } from '../motion/Animated'
import { VideoHero } from './VideoHero'

export function HomeHero() {
  return (
    <VideoHero
      videoSrc={images.heroVideo}
      fallbackSrc={images.heroVideoFallback}
      posterSrc={images.warehouse}
      align="bottom-left"
    >
      <AnimatedReveal className="flex w-full flex-col">
        <AnimatedItem className="max-w-xl space-y-7">
          <p className="eyebrow eyebrow-light">Bespoke software studio</p>
          <ClassicDivider light className="max-w-[10rem]" />
          <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Velvet Labs
          </h1>
          <p className="max-w-md font-serif text-base italic leading-relaxed text-white/90 sm:text-lg">
            We replace paper-heavy business processes with affordable software
            tailored to how you work — so your team spends less time on forms
            and more time on what matters.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="btn-classic-light">
              Start going paperless
            </Link>
            <Link to="/services" className="classic-link classic-link-light">
              What we build
            </Link>
          </div>
        </AnimatedItem>
      </AnimatedReveal>
    </VideoHero>
  )
}
