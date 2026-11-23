import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/',
  '/portfolio/',
  '/cv/',
  '/contact/',
  '/blog/',
  '/blog/rebuilding-this-site/',
  '/services/fractional-engineering-leadership/',
  '/es/',
  '/es/portafolio/',
  '/es/cv/',
  '/es/contacto/',
  '/es/blog/',
  '/es/blog/rebuilding-this-site/',
  '/es/servicios/liderazgo-tecnico-temporal/',
  '/nope-404/',
];

for (const path of pages) {
  test(`no axe violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze();
    const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
    expect(summary).toEqual([]);
  });
}

test('skip link is the first tab stop and targets main (EN and ES)', async ({ page }) => {
  for (const [path, name] of [
    ['/', 'Skip to content'],
    ['/es/', 'Saltar al contenido'],
  ] as const) {
    await page.goto(path);
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name });
    await expect(skip).toBeFocused();
    await expect(skip).toHaveAttribute('href', '#main');
    await expect(page.locator('main#main')).toHaveCount(1);
  }
});

test('footer social links announce opening in a new tab', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'LinkedIn (opens in a new tab)' })).toBeVisible();
});

test('empty contact submit shows inline errors, focuses first field, and does not post (EN and ES)', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', (req) => {
    if (req.method() === 'POST' && req.url().includes('formspree.io')) posts.push(req.url());
  });
  for (const path of ['/contact/', '/es/contacto/']) {
    await page.goto(path);
    await page.locator('#contact-form button[type="submit"]').click();
    const invalid = page.locator('#contact-form [aria-invalid="true"]');
    await expect(invalid.first()).toBeFocused();
    await expect(invalid).toHaveCount(4);
    await expect(page.locator('#contact-form .field-error').first()).not.toBeEmpty();
  }
  expect(posts).toEqual([]);
});
