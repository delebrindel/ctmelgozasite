# ctmelgozasite

Personal site for Cristóbal Torres, built with [Astro](https://astro.build). Static output, Markdown blog, RSS feed.

## Stack

- Astro (static site generation)
- Markdown content collections for blog posts
- `@astrojs/rss` and `@astrojs/sitemap`

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves dist/ locally
npm run test:a11y  # builds, then axe checks on all public pages (first run: npx playwright install chromium)
```

Requires Node `>= 22.12` (Astro 7).

## Project layout

- `src/data/site.ts` — profile, experience, skills, projects, and packages content
- `src/content/blog/*.md` — blog posts
- `src/content.config.ts` — blog frontmatter schema
- `src/pages/` — routes: `/`, `/portfolio/`, `/cv/`, `/blog/`, `/blog/<slug>/`, `/rss.xml`
- `public/` — static files (`cv.pdf`, `profile.jpg`, social icons)

## Writing a blog post

Create `src/content/blog/<slug>.md`:

```md
---
title: "Post title"
description: "One-sentence summary used in lists and meta tags."
pubDate: 2026-11-20
tags: ["topic"]
draft: false
---

Post body in Markdown.
```

Set `draft: true` to keep a post out of the index, RSS feed, and sitemap until it is ready.

## Deploying to Hostinger

The site is static, so any Hostinger plan with file hosting works.

1. Build: `npm run build`. The output is in `dist/`.
2. Upload the contents of `dist/` to the web root of your domain (`public_html/` on Hostinger). Use hPanel's File Manager or an FTP client.
3. Redeploy after each change by building and uploading again.

The site URL is set in `astro.config.mjs` (`site`) and `src/data/site.ts` (`url`). Change both if the domain changes.

## Contact

- GitHub: https://github.com/delebrindel
- LinkedIn: https://www.linkedin.com/in/ctmelgoza/
