---
title: "Rebuilding this site as a static blog"
description: "How and why I rebuilt this personal site from a React single-page app into a static Astro site with a Markdown blog."
pubDate: 2026-11-20
tags: ["astro", "web", "meta"]
---

This site used to be a React and Vite single-page app. It had no blog, and every page was client-rendered
from a Zustand store. I rebuilt it with [Astro](https://astro.build) because the site is mostly content,
and content sites work better as static HTML.

## What changed

- **Static output.** `npm run build` writes plain HTML, CSS, and a few images into `dist/`. There is no
  client-side router to break deep links.
- **Markdown posts.** Each post is a file in `src/content/blog/`. The frontmatter fields `title`,
  `description`, and `pubDate` are required; `tags` and `draft` are optional.
- **RSS and sitemap.** `/rss.xml` and the sitemap are generated at build time.

## Writing a post

Create a new file in `src/content/blog/`, for example `my-post.md`, and set `draft: true` while you are
still writing it. Drafts are excluded from the index, the RSS feed, and the sitemap. Remove the line, or set
it to `false`, when the post is ready.

```bash
npm run dev     # preview at http://localhost:4321
npm run build   # produce dist/ for upload
```
