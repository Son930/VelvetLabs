import { seo } from '../data/seo'
import { PlaceholderPage } from '../components/PlaceholderPage'

export function WorkPage() {
  return (
    <PlaceholderPage
      seo={seo.work}
      title="Work & Projects"
      subtitle="Examples of businesses we've helped go paperless with bespoke software — case studies coming soon."
      sectionTitle="Projects"
    />
  )
}
