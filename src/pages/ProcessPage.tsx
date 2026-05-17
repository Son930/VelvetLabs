import { PlaceholderPage } from '../components/PlaceholderPage'
import { seo } from '../data/seo'

export function ProcessPage() {
  return (
    <PlaceholderPage
      seo={seo.process}
      title="Process"
      subtitle="How we partner from discovery through launch — details coming soon."
      sectionTitle="How we work"
    />
  )
}
