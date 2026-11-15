# Portfolio

An Astro portfolio site with project case studies managed as Markdown content.

## Requirements

- Node.js 22.23.4 or newer
- npm

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the development server                |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |
| `npm run astro`   | Run Astro CLI commands such as `astro sync` |

## Adding projects

Create a Markdown file in `src/content/projects/` with the following frontmatter:

```yaml
---
title: "Project title"
description: "Short project summary."
tags: ["TypeScript", "Astro"]
githubUrl: "https://github.com/username/project"
featured: true
date: 2026-01-15
---

## Overview

Project case study content goes here.
```

The collection schema is defined in `src/content.config.ts`. Projects are listed on the
homepage and rendered at `/projects/<id>/`.

## Project media

Add an optional `media` block to show a screenshot or video near the top of a case study:

```yaml
media:
  type: image # or "video"
  src: /projects/example/demo.png
  alt: Short description of the media
  caption: Optional caption
```

Place local files under `public/` and use a root-relative path. External URLs also work.

## Deployment

The site is configured for a GitHub Pages project site. Before deploying, update
`astro.config.mjs`:

```js
site: 'https://your-username.github.io',
base: '/your-repository-name',
```

Then push to GitHub and set the repository's Pages source to **GitHub Actions**. The workflow
in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
