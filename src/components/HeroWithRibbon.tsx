import type { ReactNode } from 'react'
import { AbstractRibbon } from './AbstractRibbon'
import { HeroPanel } from './HeroPanel'

type HeroWithRibbonProps = {
  imageSrc: string
  imageAlt: string
  children: ReactNode
  align?: 'bottom-left' | 'center'
  minHeight?: string
  overlay?: 'light' | 'gradient'
}

export function HeroWithRibbon({
  imageSrc,
  imageAlt,
  children,
  align = 'bottom-left',
  minHeight,
  overlay,
}: HeroWithRibbonProps) {
  return (
    <div className="relative overflow-visible">
      <HeroPanel
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        align={align}
        minHeight={minHeight}
        overlay={overlay}
      >
        {children}
      </HeroPanel>

      <AbstractRibbon className="absolute -right-6 bottom-[12%] z-20 h-[min(55vw,320px)] w-[min(42vw,260px)] animate-ribbon-drift sm:-right-10 sm:bottom-[8%] sm:h-[380px] sm:w-[300px] md:-right-14 md:h-[440px] md:w-[340px]" />
    </div>
  )
}
