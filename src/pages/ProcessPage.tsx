import { PlaceholderPage } from '../components/PlaceholderPage'
import { seo } from '../data/seo'

export function ProcessPage() {
  return (
    <PlaceholderPage
      seo={seo.process}
      title="Process"
      subtitle="How we map paper workflows, agree scope, and deliver affordable bespoke software — step by step."
      sectionTitle="How we work"
    />
  )
}
