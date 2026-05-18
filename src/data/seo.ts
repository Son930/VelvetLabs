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
  work: {
    title: 'Work & Projects',
    description: `See how ${site.name} has helped businesses go paperless with bespoke digital tools. Case studies coming soon.`,
    path: '/work',
  },
  about: {
    title: 'About',
    description: `Why ${site.name} builds affordable bespoke software — and how we help teams leave paper processes behind.`,
    path: '/about',
  },
  team: {
    title: 'Team',
    description: `The people behind ${site.name} — a small studio focused on paperless, custom-fit software.`,
    path: '/team',
  },
  process: {
    title: 'Process',
    description: `How ${site.name} maps your paper workflows, designs bespoke tools, and delivers managed software with ongoing support.`,
    path: '/process',
  },
  services: {
    title: 'Services',
    description: `Process digitisation, bespoke web apps, and workflow automation from ${site.name} — without enterprise-suite prices.`,
    path: '/services',
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
