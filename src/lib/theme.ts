export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'velvet-theme'

export function getStoredTheme(): Theme | null {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === 'dark' || value === 'light') return value
  return null
}

/** Default is dark per product direction. */
export function getTheme(): Theme {
  return getStoredTheme() ?? 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  localStorage.setItem(STORAGE_KEY, theme)

  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff')
}

export function initTheme() {
  applyTheme(getTheme())
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  return next
}
