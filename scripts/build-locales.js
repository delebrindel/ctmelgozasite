const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');
const OUT_ES = path.join(DIST, 'es');

function loadJson(rel){
  try { return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', rel), 'utf8')) }
  catch (e) { return null }
}

function ensureDir(dir){ if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }) }

async function build(){
  const enHome = loadJson('content/en/home.json') || {};
  const esHome = loadJson('content/es/home.json') || {};
  const enAbout = loadJson('content/en/about.json') || {};
  const esAbout = loadJson('content/es/about.json') || {};

  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) { console.error('dist/index.html not found — run build first'); process.exit(1) }
  const html = fs.readFileSync(indexPath,'utf8');

  // English: ensure tokens replaced with english copy (use existing defaults if tokens missing)
  let enHtml = html.replace('<!--LOCALE:TITLE-->', `<title>${(enHome.hero && enHome.hero.h1) ? enHome.hero.h1 : 'Cristobal Torres | Software Engineer'}</title>`)
    .replace('<!--LOCALE:DESCRIPTION-->', `<meta name="description" content="${(enHome.hero && enHome.hero.sub) ? enHome.hero.sub : 'I provide bespoke solutions tailored to company needs.'}" />`)
    .replace('<!--LOCALE:HERO-->', '')

  const esHtml = enHtml.replace((enHome.hero && enHome.hero.h1) ? enHome.hero.h1 : 'Cristobal Torres | Software Engineer', (esHome.hero && esHome.hero.h1) ? esHome.hero.h1 : 'Cristóbal Torres | Ingeniero de Software')
    .replace((enHome.hero && enHome.hero.sub) ? enHome.hero.sub : 'I provide bespoke solutions tailored to company needs.', (esHome.hero && esHome.hero.sub) ? esHome.hero.sub : 'Ofrezco soluciones a medida para empresas.')

  // Insert hreflang links
  const hreflang = `\n<link rel="alternate" hreflang="en" href="/" />\n<link rel="alternate" hreflang="es" href="/es/" />\n`;
  enHtml = enHtml.replace('</head>', hreflang + '</head>');
  let esHtmlFinal = esHtml.replace('</head>', hreflang.replace('/es/','/') + '</head>');

  // Write es output
  ensureDir(OUT_ES);
  fs.writeFileSync(path.join(OUT_ES,'index.html'), esHtmlFinal, 'utf8');
  fs.writeFileSync(path.join(DIST,'index.html'), enHtml, 'utf8');

  console.log('Built localized pages: /dist/index.html and /dist/es/index.html');
}

build().catch(e=>{ console.error(e); process.exit(1) })
