import { useState, useEffect } from 'react'
import { getAllProjects } from '../../lib/project-extractor'
import '../../index.css'

export default function ProjectChatWidget() {
  const isEs = typeof window !== 'undefined' && window.location.pathname.startsWith('/es')
  const locale = isEs ? 'es' : 'en'
  const [projects, setProjects] = useState<any[]>(() => {
    const p = getAllProjects(locale)
    return p.sort((a:any,b:any)=> (a.title||'').localeCompare(b.title||''))
  })
  // single mode: pick (describe is now the freeform idea field)
  const mode = 'pick'
  const [selected, setSelected] = useState('')
  const [text, setText] = useState('')
  const [summary, setSummary] = useState<any>(null)
  const [email, setEmail] = useState('')

  function onPick(id: string) {
    setSelected(id)
    const p: any = projects.find((x: any) => x.id === id)
    setSummary({
      idea: p.idea || p.title,
      budget: p.budget || '',
      current_development: p.current_development || '',
      timeframe: p.timeframe || '',
    })
  }

  // removed analysis function for v1 (idea is the freeform textarea)

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [strings, setStrings] = useState<any | null>(null)
  // async load locale JSON to avoid require() lint warnings
  useEffect(() => {
    let mounted = true
    import(`../../locales/${locale}.json`).then(m => {
      if (mounted) setStrings(m.projectChat)
    }).catch(() => {
      if (mounted) setStrings(null)
    })
    return () => { mounted = false }
  }, [locale])

  // ensure projects are loaded even if bundle wasn't available at module init
  useEffect(() => {
    let mounted = true
    // try dynamic import of the bundle as a fallback
    import('../../content-bundle/projects.json').then(m => {
      if (!mounted) return
      const raw = (m as any).default || m
      const mapped = (raw as any[]).map(item => {
        const loc = (item.locales && (item.locales[locale] || item.locales['en'])) || Object.values(item.locales || {})[0] || {}
        return { id: item.id, title: loc.title || '', idea: loc.idea || '', budget: loc.budget || '', current_development: loc.current_development || '', timeframe: loc.timeframe || '' }
      })
      mapped.sort((a:any,b:any)=> (a.title||'').localeCompare(b.title||''))
      setProjects(mapped)
    }).catch(() => {
      // ignore — keep existing projects (possibly empty)
    })
    return () => { mounted = false }
  }, [locale])

  async function onSubmit() {
    setError(null)
    if (!email) return setError(isEs ? 'Por favor proporciona un correo' : 'Please provide an email')
    if (!summary) return setError(isEs ? 'Selecciona un proyecto o describe tu idea primero' : 'Please pick a project or describe your idea first')
    // validate budget parse
    const normalizedBudget = parseBudget(summary?.budget || '')
    if (!normalizedBudget.min && !normalizedBudget.max) {
      return setError(strings?.budgetParseError ?? (isEs ? 'Por favor proporciona un presupuesto numérico en USD (ej. $8k - $20k o 15000)' : 'Please provide a numeric budget in USD (e.g. $8k - $20k or 15000)'))
    }
    setStatus('sending')
    const payload = { summary: { ...summary, budget_normalized: normalizedBudget }, contact: { email } }
    // Formspree endpoint provided by owner
    const endpoint = 'https://formspree.io/f/mbdergze'
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('sent')
    } catch (e: any) {
      setStatus('error')
      setError(e?.message || 'Submission failed')
    }
  }

  // Simple budget parser: returns { min:number|null, max:number|null, text }
  function parseBudget(input: string) {
    const text = (input || '').toString().trim()
    if (!text) return { min: null, max: null, text: '' }
    // remove currency symbols and common separators
    const cleaned = text.replace(/\$/g, '').replace(/,/g, '').toLowerCase()
    // handle shorthand k (e.g., 8k)
    const expand = (s: string) => {
      const m = s.match(/^(\d+(?:\.\d+)?)(k)?$/)
      if (!m) return NaN
      const n = parseFloat(m[1])
      return m[2] ? Math.round(n * 1000) : Math.round(n)
    }
    // ranges with dash
    const rangeMatch = cleaned.match(/(\d+(?:\.\d+)?k?)\s*[-–—]\s*(\d+(?:\.\d+)?k?)/)
    if (rangeMatch) {
      const a = expand(rangeMatch[1])
      const b = expand(rangeMatch[2])
      return { min: isNaN(a) ? null : a, max: isNaN(b) ? null : b, text }
    }
    // single number
    const singleMatch = cleaned.match(/(\d+(?:\.\d+)?k?)/)
    if (singleMatch) {
      const v = expand(singleMatch[1])
      return { min: isNaN(v) ? null : v, max: isNaN(v) ? null : v, text }
    }
    return { min: null, max: null, text }
  }

  return (
    <div className="project-chat-widget font-mono text-sm">
      <h3 className="text-center text-lg text-indigo-900 font-bold mb-3">{strings?.title ?? (isEs ? 'Cuéntame sobre tu proyecto' : 'Tell us about your project')}</h3>
      <div className="flex justify-center gap-3 mb-3">
        <div className="px-3 py-1 select-none" aria-hidden>{strings?.pick ?? (isEs ? 'Plantillas de proyectos' : 'Project templates')}</div>
      </div>

      {mode === 'pick' && (
        <div className="flex justify-center mb-3">
          <select value={selected} onChange={e => onPick(e.target.value)} className="px-3 py-2 rounded w-60 shadow-sm">
            <option value="">{strings?.choose ?? (isEs ? '-- elegir --' : '-- choose --')}</option>
            {projects.map((p: any) => (
              <option value={p.id} key={p.id}>{p.title || p.id}</option>
            ))}
          </select>
        </div>
      )}

      {/* describe mode removed — idea field below is the freeform description */}

      {/* Form fields in requested order: Idea, Timeframe (required), Budget, Current Development, Additional Comments */}
      <div className="mb-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.placeholder ?? (isEs ? 'Describe tu proyecto en unas pocas frases' : 'Describe your project in a few sentences')}</label>
        <textarea value={summary?.idea || text} onChange={e => { setSummary({...summary, idea: e.target.value}); setText(e.target.value)}} className="w-full p-2 rounded shadow h-24" />
      </div>

      <div className="mt-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.timeframeLabel ?? (isEs ? 'Plazo' : 'Timeframe')} <span className="text-red-500">*</span></label>
        <select value={summary?.timeframe || ''} onChange={e => setSummary({...summary, timeframe: e.target.value})} className="w-full p-2 rounded shadow">
          <option value="">{strings?.choose ?? (isEs ? '-- elegir --' : '-- choose --')}</option>
          {(strings?.timeframeOptions || []).map((opt: string, i: number) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="mt-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.budgetLabel ?? (isEs ? 'Presupuesto (USD)' : 'Budget (USD)')}</label>
        <input value={summary?.budget || ''} onChange={e => setSummary({...summary, budget: e.target.value})} placeholder="$0 - $10,000" className="w-full p-2 rounded shadow" />
      </div>

      <div className="mt-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.currentDevLabel ?? (isEs ? 'Desarrollo actual' : 'Current development')}</label>
        <textarea value={summary?.current_development || ''} onChange={e => setSummary({...summary, current_development: e.target.value})} placeholder={strings?.currentDevHelp ?? (isEs ? 'Si ya tienes algún avance en el proyecto, por favor cuéntamelo' : 'If you already have any advance on the project, please let me know')} className="w-full p-2 rounded shadow h-20" />
        <div className="text-xs text-slate-400 mt-1">{strings?.currentDevHelp ?? (isEs ? 'Si ya tienes algún avance en el proyecto, por favor cuéntamelo' : 'If you already have any advance on the project, please let me know')}</div>
      </div>

      <div className="mt-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.additionalComments ?? (isEs ? 'Comentarios adicionales' : 'Additional comments')}</label>
        <textarea value={summary?.additional_comments || ''} onChange={e => setSummary({...summary, additional_comments: e.target.value})} className="w-full p-2 rounded shadow h-20" />
      </div>

      <div className="mt-3">
        <label className="block text-xs text-slate-500 mb-2">{strings?.emailPlaceholder ?? (isEs ? 'Tu correo' : 'Your email')}</label>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder={strings?.emailPlaceholder ?? (isEs ? 'tu@empresa.com' : 'you@company.com')} className="w-full p-2 rounded shadow" />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button onClick={onSubmit} disabled={status==='sending' || status==='sent'} className="px-3 py-2 rounded bg-indigo-900 text-white disabled:opacity-60">
          {status==='sending' ? (strings?.sending ?? (isEs ? 'Enviando…' : 'Sending…')) : status==='sent' ? (strings?.sent ?? (isEs ? 'Enviado' : 'Sent')) : (strings?.send ?? (isEs ? 'Enviar al propietario' : 'Send to owner'))}
        </button>
      {status==='sent' && <span className="text-sm text-emerald-500">{isEs ? 'Gracias — recibimos tu solicitud.' : 'Thanks — we received your request.'}</span>}
      {/* dispatch event so parent can close modal */}
      {status==='sent' && typeof window !== 'undefined' && window.dispatchEvent && window.dispatchEvent(new CustomEvent('projectChat:sent'))}
      </div>

      <div className="mt-2 text-xs text-slate-400">{isEs ? 'Usamos esto solo para contactarte sobre tu proyecto. Sin spam. Puedes eliminar tu lead después.' : 'We only use this to contact you about your project. No spam. You can delete your lead later.'}</div>
      {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
    </div>
  )
}
