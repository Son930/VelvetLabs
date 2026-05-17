export const primaryNav = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
] as const

export const companyNav = [
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Process', path: '/process' },
] as const

export const legalNav = [
  { label: 'Privacy', path: '/legal#privacy' },
  { label: 'Terms', path: '/legal#terms' },
] as const

/** All routes for mobile menu & footer */
export const navLinks = [
  ...primaryNav,
  ...companyNav,
  { label: 'Legal', path: '/legal' },
] as const
