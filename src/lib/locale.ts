export type Locale = 'en' | 'es'

export function isSpanishPath(): boolean {
  return typeof window !== 'undefined' && window.location.pathname.startsWith('/es')
}

export function currentLocale(): Locale {
  return isSpanishPath() ? 'es' : 'en'
}
