import { PlaceholderPage } from '../components/PlaceholderPage'
import { seo } from '../data/seo'

export function TeamPage() {
  return (
    <PlaceholderPage
      seo={seo.team}
      title="Team"
      subtitle="The people behind Velvet Labs — profiles and roles coming soon."
      sectionTitle="Our team"
    />
  )
}
