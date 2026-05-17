import { seo } from '../data/seo'
import { PlaceholderPage } from '../components/PlaceholderPage'

export function WorkPage() {
  return (
    <PlaceholderPage
      seo={seo.work}
      title="Work & Projects"
      subtitle="Selected case studies and shipped products will live here."
      sectionTitle="Projects"
    />
  )
}
