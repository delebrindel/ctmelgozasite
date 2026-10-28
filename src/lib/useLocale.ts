import { getCookie } from './cookies'
import { isSpanishPath, type Locale } from './locale'

const contentModules = import.meta.glob<unknown>('../../content/**/*.json', {
  import: 'default',
})

async function loadPage<T>(locale: Locale, page: string): Promise<T | null> {
  // prefer the requested page, fall back to the locale's home content
  for (const name of [page, 'home']) {
    const load = contentModules[`../../content/${locale}/${name}.json`]
    if (load) return (await load()) as T
  }
  return null
}

function requestedLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  if (isSpanishPath()) return 'es'
  // English stays the default; browser language is intentionally ignored
  return getCookie('site_lang') === 'es' ? 'es' : 'en'
}

export async function loadLocaleStrings<T = unknown>(page = 'home'): Promise<T | null> {
  return loadPage<T>(requestedLocale(), page)
}
