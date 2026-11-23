---
title: "Rediseñando este sitio como un blog estático"
description: "Cómo y por qué reconstruí este sitio personal, de una aplicación React de una sola página a un sitio estático de Astro con un blog en Markdown."
pubDate: 2026-11-20
tags: ["astro", "web", "meta"]
draft: true
---

Este sitio era antes una aplicación de una sola página con React y Vite. No tenía blog, y cada página se renderizaba en el cliente
a partir de un store de Zustand. Lo reconstruí con [Astro](https://astro.build) porque el sitio es, sobre todo, contenido,
y los sitios de contenido funcionan mejor como HTML estático.

## Qué cambió

- **Salida estática.** `npm run build` escribe HTML, CSS y algunas imágenes en `dist/`. No hay un router del lado del cliente que pueda romper los enlaces directos.
- **Publicaciones en Markdown.** Cada publicación es un archivo en `src/content/blog/`. Los campos del frontmatter `title`,
  `description` y `pubDate` son obligatorios; `tags` y `draft` son opcionales.
- **RSS y sitemap.** `/rss.xml` y el sitemap se generan durante el build.

## Cómo escribir una publicación

Crea un archivo nuevo en `src/content/blog/`, por ejemplo `my-post.md`, y deja `draft: true` mientras la escribes.
Los borradores se excluyen del índice, del feed RSS y del sitemap. Elimina esa línea, o cámbiala a `false`, cuando la publicación esté lista.

```bash
npm run dev     # vista previa en http://localhost:4321
npm run build   # genera dist/ para subir
```
