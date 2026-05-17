import { useEffect } from 'react'
import { site } from '../data/site'
import type { PageSeoConfig } from '../data/seo'

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

type PageSEOProps = PageSeoConfig

export function PageSEO({ title, description, path, noIndex }: PageSEOProps) {
  const fullTitle =
    title === site.name ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`
  const url = `${site.url}${path}`
  const image = `${site.url}${site.defaultOgImage}`

  useEffect(() => {
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow')

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:locale', site.locale)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    setCanonical(url)
  }, [fullTitle, description, url, image, noIndex])

  return null
}
