import { useId, useMemo, useState, type FormEvent } from 'react'
import { getAllProjects } from '../../lib/project-extractor'
import { currentLocale } from '../../lib/locale'
import en from '../../locales/en.json'
import es from '../../locales/es.json'
import '../../index.css'

const STRINGS = {
  en: en.projectChat,
  es: es.projectChat,
}

const FORM_ENDPOINT = 'https://formspree.io/f/mbdergze'

interface ProjectSummary {
  idea?: string
  budget?: string
  current_development?: string
  timeframe?: string
  additional_comments?: string
}

interface BudgetRange {
  min: number | null
  max: number | null
  text: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

// Parses "$8k - $20k", "15000", "8.5k" etc. into a numeric USD range.
function parseBudget(input: string): BudgetRange {
  const text = input.trim()
  if (!text) return { min: null, max: null, text: '' }
  const cleaned = text.replace(/\$/g, '').replace(/,/g, '').toLowerCase()
  const expand = (s: string) => {
    const m = s.match(/^(\d+(?:\.\d+)?)(k)?$/)
    if (!m) return NaN
    const n = parseFloat(m[1])
    return m[2] ? Math.round(n * 1000) : Math.round(n)
  }
  const rangeMatch = cleaned.match(/(\d+(?:\.\d+)?k?)\s*[-–—]\s*(\d+(?:\.\d+)?k?)/)
  if (rangeMatch) {
    const a = expand(rangeMatch[1])
    const b = expand(rangeMatch[2])
    return { min: isNaN(a) ? null : a, max: isNaN(b) ? null : b, text }
  }
  const singleMatch = cleaned.match(/(\d+(?:\.\d+)?k?)/)
  if (singleMatch) {
    const v = expand(singleMatch[1])
    return { min: isNaN(v) ? null : v, max: isNaN(v) ? null : v, text }
  }
  return { min: null, max: null, text }
}

export default function ProjectChatWidget() {
  const locale = currentLocale()
  const t = STRINGS[locale]
  const ids = useId()
  const projects = useMemo(
    () => getAllProjects(locale).sort((a, b) => a.title.localeCompare(b.title)),
    [locale],
  )

  const [selected, setSelected] = useState('')
  const [summary, setSummary] = useState<ProjectSummary | null>(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const updateSummary = (patch: ProjectSummary) =>
    setSummary(prev => ({ ...prev, ...patch }))

  function onPick(id: string) {
    setSelected(id)
    const p = projects.find(x => x.id === id)
    if (!p) return
    setSummary({
      idea: p.idea || p.title,
      budget: p.budget,
      current_development: p.current_development,
      timeframe: p.timeframe,
    })
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!email) return setError(t.emailRequired)
    if (!summary) return setError(t.summaryRequired)
    const budget = parseBudget(summary.budget ?? '')
    if (!budget.min && !budget.max) return setError(t.budgetParseError)

    setStatus('sending')
    const payload = { summary: { ...summary, budget_normalized: budget }, contact: { email } }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('sent')
      // lets the parent (Packages) close the modal
      window.dispatchEvent(new CustomEvent('projectChat:sent'))
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error && err.message ? err.message : 'Submission failed')
    }
  }

  const submitLabel = status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send
  const submitDisabled = status === 'sending' || status === 'sent'
  const field = (name: string) => `${ids}-${name}`

  return (
    <form className="project-chat-widget font-mono text-sm" onSubmit={onSubmit}>
      <h3 className="text-center text-lg text-indigo-900 font-bold mb-3">{t.title}</h3>

      <div className="flex justify-center gap-3 mb-3">
        <label htmlFor={field('pick')} className="px-3 py-1 select-none">{t.pick}</label>
      </div>
      <div className="flex justify-center mb-3">
        <select
          id={field('pick')}
          value={selected}
          onChange={e => onPick(e.target.value)}
          className="px-3 py-2 rounded w-60 shadow-sm"
        >
          <option value="">{t.choose}</option>
          {projects.map(p => (
            <option value={p.id} key={p.id}>{p.title || p.id}</option>
          ))}
        </select>
      </div>

      {/* Form fields: Idea, Timeframe (required), Budget, Current Development, Additional Comments */}
      <div className="mb-3">
        <label htmlFor={field('idea')} className="block text-xs text-slate-500 mb-2">{t.placeholder}</label>
        <textarea
          id={field('idea')}
          value={summary?.idea ?? ''}
          onChange={e => updateSummary({ idea: e.target.value })}
          className="w-full p-2 rounded shadow h-24"
        />
      </div>

      <div className="mt-3">
        <label htmlFor={field('timeframe')} className="block text-xs text-slate-500 mb-2">
          {t.timeframeLabel} <span className="text-red-500">*</span>
        </label>
        <select
          id={field('timeframe')}
          value={summary?.timeframe ?? ''}
          onChange={e => updateSummary({ timeframe: e.target.value })}
          className="w-full p-2 rounded shadow"
        >
          <option value="">{t.choose}</option>
          {t.timeframeOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="mt-3">
        <label htmlFor={field('budget')} className="block text-xs text-slate-500 mb-2">{t.budgetLabel}</label>
        <input
          id={field('budget')}
          value={summary?.budget ?? ''}
          onChange={e => updateSummary({ budget: e.target.value })}
          placeholder="$0 - $10,000"
          className="w-full p-2 rounded shadow"
        />
      </div>

      <div className="mt-3">
        <label htmlFor={field('current')} className="block text-xs text-slate-500 mb-2">{t.currentDevLabel}</label>
        <textarea
          id={field('current')}
          value={summary?.current_development ?? ''}
          onChange={e => updateSummary({ current_development: e.target.value })}
          placeholder={t.currentDevHelp}
          className="w-full p-2 rounded shadow h-20"
        />
        <div className="text-xs text-slate-400 mt-1">{t.currentDevHelp}</div>
      </div>

      <div className="mt-3">
        <label htmlFor={field('comments')} className="block text-xs text-slate-500 mb-2">{t.additionalComments}</label>
        <textarea
          id={field('comments')}
          value={summary?.additional_comments ?? ''}
          onChange={e => updateSummary({ additional_comments: e.target.value })}
          className="w-full p-2 rounded shadow h-20"
        />
      </div>

      <div className="mt-3">
        <label htmlFor={field('email')} className="block text-xs text-slate-500 mb-2">{t.emailLabel}</label>
        <input
          id={field('email')}
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder}
          className="w-full p-2 rounded shadow"
        />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="submit"
          disabled={submitDisabled}
          className="px-3 py-2 rounded bg-indigo-900 text-white disabled:opacity-60"
        >
          {submitLabel}
        </button>
        {status === 'sent' && <span className="text-sm text-emerald-500">{t.success}</span>}
      </div>

      <div className="mt-2 text-xs text-slate-400">{t.privacy}</div>
      {error && <div role="alert" className="mt-2 text-sm text-red-500">{error}</div>}
    </form>
  )
}
