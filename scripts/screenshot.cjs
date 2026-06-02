// Puppeteer screenshot script using CommonJS (.cjs) to work with "type": "module" repos.
// Usage:
// 1) Serve the built site: `npx http-server ./dist -p 5174`
// 2) Install puppeteer if needed: `npm i -D puppeteer`
// 3) Run: `node scripts/screenshot.cjs`

const puppeteer = require('puppeteer');
const fs = require('fs');
const OUT = './screenshots';
const URL = process.env.URL || 'http://localhost:5174';

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  console.log('Opening', URL);
  try {
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.error('Failed to load URL:', e.message);
    process.exit(1);
  }

  // Hero (viewport)
  await page.screenshot({ path: `${OUT}/hero-desktop.png`, fullPage: false });
  console.log('Wrote', `${OUT}/hero-desktop.png`);

  // Packages section (scroll and capture)
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/packages.png`, fullPage: false });
  console.log('Wrote', `${OUT}/packages.png`);

  // Full page
  await page.screenshot({ path: `${OUT}/fullpage.png`, fullPage: true });
  console.log('Wrote', `${OUT}/fullpage.png`);

  await browser.close();
  console.log('Done. Screenshots in', OUT);
})();
