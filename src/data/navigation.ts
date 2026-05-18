export const primaryNav = [
  { label: 'Home', path: '/' },
  { label: 'Contact', path: '/contact' },
  { label: 'Legal', path: '/legal' },
] as const

export const legalNav = [
  { label: 'Privacy', path: '/legal#privacy' },
  { label: 'Terms', path: '/legal#terms' },
] as const

/** All routes for mobile menu */
export const navLinks = [...primaryNav] as const
