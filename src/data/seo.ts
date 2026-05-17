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
    description: `${site.tagline} Software house for web, mobile, desktop, frontend, backend, and UI/UX.`,
    path: '/',
  },
  work: {
    title: 'Work & Projects',
    description: `Case studies and selected projects from ${site.name}. Portfolio coming soon.`,
    path: '/work',
  },
  about: {
    title: 'About',
    description: `Learn about ${site.name} — our mission, lab culture, and how we build digital products.`,
    path: '/about',
  },
  team: {
    title: 'Team',
    description: `Meet the people behind ${site.name}. Team profiles coming soon.`,
    path: '/team',
  },
  process: {
    title: 'Process',
    description: `How ${site.name} partners with clients — discovery, design, build, and launch.`,
    path: '/process',
  },
  services: {
    title: 'Services',
    description: `Web apps, mobile, UI/UX, consulting, and MVP development from ${site.name}.`,
    path: '/services',
  },
  contact: {
    title: 'Contact',
    description: `Get in touch with ${site.name} to start your next project.`,
    path: '/contact',
  },
  legal: {
    title: 'Legal',
    description: `Privacy policy and terms of service for ${site.name}.`,
    path: '/legal',
    noIndex: true,
  },
} as const satisfies Record<string, PageSeoConfig>
