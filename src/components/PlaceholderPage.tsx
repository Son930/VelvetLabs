import type { PageSeoConfig } from '../data/seo'
import { PageHeader } from './PageHeader'
import { PageSEO } from './PageSEO'
import { PlaceholderSection } from './PlaceholderSection'

type PlaceholderPageProps = {
  seo: PageSeoConfig
  title: string
  subtitle: string
  sectionTitle?: string
}

export function PlaceholderPage({
  seo: seoConfig,
  title,
  subtitle,
  sectionTitle,
}: PlaceholderPageProps) {
  return (
    <>
      <PageSEO {...seoConfig} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader title={title} subtitle={subtitle} />
        <PlaceholderSection title={sectionTitle ?? title} />
      </div>
    </>
  )
}
