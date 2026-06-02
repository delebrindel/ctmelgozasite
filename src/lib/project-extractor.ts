let rawProjects: any[] = []
try {
  // bundle is generated at build time; guard import for dev
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  rawProjects = require('../content-bundle/projects.json')
} catch (e) {
  rawProjects = []
}

type LocaleMap = { [k: string]: any }

function normalizeText(s?: string) {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim()
}

function simpleScore(a: string, b: string) {
  if (!a || !b) return 0
  a = normalizeText(a)
  b = normalizeText(b)
  if (a === b) return 1
  if (b.includes(a) || a.includes(b)) return 0.8
  const tokens = a.split(' ')
  const matches = tokens.filter(t => b.includes(t)).length
  return Math.min(0.8, matches / Math.max(1, tokens.length))
}

function localizedFields(item: { id: string; locales?: LocaleMap }, locale = 'en') {
  const loc = (item.locales && (item.locales[locale] || item.locales['en'])) || Object.values(item.locales || {})[0] || {}
  return {
    id: item.id,
    title: loc.title || '',
    idea: loc.idea || '',
    budget: loc.budget || '',
    current_development: loc.current_development || '',
    timeframe: loc.timeframe || '',
  }
}

export function extractSummaryFromText(text: string, locale = 'en') {
  const q = normalizeText(text)
  let best: { p: any; score: number } | null = null
  for (const item of rawProjects as any[]) {
    const p = localizedFields(item, locale)
    const combined = [p.title, p.idea, p.current_development].filter(Boolean).join(' ')
    const score = simpleScore(q, combined)
    if (!best || score > best.score) best = { p, score }
  }
  if (!best || best.score < 0.15) {
    return { summary: null, confidence: best ? best.score : 0 }
  }
  const s = best.p
  return {
    summary: {
      idea: s.idea || s.title || '',
      budget: s.budget || '',
      current_development: s.current_development || '',
      timeframe: s.timeframe || '',
    },
    matchedProjectId: s.id,
    confidence: best.score,
  }
}

export function getAllProjects(locale = 'en') {
  return (rawProjects as any[]).map(p => localizedFields(p, locale))
}

export default { extractSummaryFromText, getAllProjects }
