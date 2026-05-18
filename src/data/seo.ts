import { site } from './site'

export type PageSeoConfig = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}

export const seo = {
  home: {
    title: site.name,
    description: `${site.tagline} We replace paper-heavy workflows with affordable, custom software for growing businesses.`,
    path: '/',
  },
  contact: {
    title: 'Contact',
    description: `Tell ${site.name} which paper processes slow you down. We'll reply with sensible next steps.`,
    path: '/contact',
  },
  legal: {
    title: 'Legal',
    description: `Privacy policy and terms of service for ${site.name}.`,
    path: '/legal',
    noIndex: true,
  },
} as const satisfies Record<string, PageSeoConfig>
