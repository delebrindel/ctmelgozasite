import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { blogPath, postLocale, postSlug, t, type Locale } from '../i18n';

export async function feedResponse(locale: Locale, context: APIContext) {
  const { site, ui } = t(locale);
  const posts = (await getCollection('blog', (entry) => !entry.data.draft && postLocale(entry.id) === locale)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${site.name} — ${ui.blog.feedTitle}`,
    description: ui.blog.feedDescription,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: blogPath(locale, postSlug(post.id)),
    })),
  });
}
