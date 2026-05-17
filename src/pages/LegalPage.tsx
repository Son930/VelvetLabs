import { PageHeader } from '../components/PageHeader'
import { PageSEO } from '../components/PageSEO'
import { PlaceholderSection } from '../components/PlaceholderSection'
import { seo } from '../data/seo'

export function LegalPage() {
  return (
    <>
      <PageSEO {...seo.legal} />
      <div className="mx-auto max-w-6xl space-y-8 px-6 pb-20">
        <PageHeader
          title="Legal"
          subtitle="Privacy and terms documents for Velvet Labs. Placeholder sections until counsel review."
        />
        <PlaceholderSection title="Privacy Policy" id="privacy" />
        <PlaceholderSection title="Terms of Service" id="terms" />
      </div>
    </>
  )
}
