import { getCookie } from './cookies';

export async function loadLocaleStrings(page = 'home'): Promise<any> {
  // Use Vite's import.meta.glob to ensure JSON files are available in dev and build.
  // This returns an object mapping file paths to importer functions. Use the `query` option for json imports.
  const modules = import.meta.glob('../../content/**/(*).json', { query: '?json' }) as Record<string, () => Promise<any>>;

  const resolveFor = async (locale: 'en' | 'es') => {
    // prefer exact page, fallback to home
    const pagePath = `../../content/${locale}/${page}.json`;
    const homePath = `../../content/${locale}/home.json`;
    const tryImport = async (p: string) => {
      if (modules[p]) { const m = await modules[p](); return m.default || m }
      if (modules[p + '?json']) { const m = await modules[p + '?json'](); return m.default || m }
      return null;
    }

    const pageResult = await tryImport(pagePath);
    if (pageResult) return pageResult;
    const homeResult = await tryImport(homePath);
    if (homeResult) return homeResult;
    return null;
  }

  if (typeof window === 'undefined') {
    return await resolveFor('en');
  }

  const path = window.location.pathname;
  // NOTE: removed verbose debug logging; keep lightweight comment for future diagnostics

  if (path.startsWith('/es')) return await resolveFor('es');
  const c = getCookie('site_lang');
  if (c === 'es') return await resolveFor('es');
  if (c === 'en') return await resolveFor('en');
  const nav = navigator.language && navigator.language.split('-')[0];
  if (nav === 'es') return await resolveFor('es');
  return await resolveFor('en');
}
