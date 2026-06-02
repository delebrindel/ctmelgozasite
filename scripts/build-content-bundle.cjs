const fs = require('fs')
const path = require('path')

const contentDirs = [path.join(__dirname, '..', 'content', 'en'), path.join(__dirname, '..', 'content', 'es')]
const merged = {}

for (const dir of contentDirs) {
  if (!fs.existsSync(dir)) continue
  const locale = path.basename(dir)
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))
    const items = Array.isArray(data) ? data : [data]
    for (const item of items) {
      if (!item || !item.id) continue
      if (!merged[item.id]) merged[item.id] = { id: item.id, locales: {} }
      merged[item.id].locales[locale] = item
    }
  }
}

const out = Object.values(merged)
const dest = path.join(__dirname, '..', 'src', 'content-bundle')
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
fs.writeFileSync(path.join(dest, 'projects.json'), JSON.stringify(out, null, 2), 'utf8')
console.log('Wrote', out.length, 'items to src/content-bundle/projects.json')
