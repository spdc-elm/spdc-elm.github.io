# Personal site

A small personal homepage built with [Astro](https://astro.build), starting from the [Astro Academia](https://github.com/maiobarbero/astro_academia) template and reworked with a tmux-inspired terminal UI.

## Pages

- `/` — home
- `/blogs` — blog index
- `/projects` — projects and research

## Development

```sh
npm install
npm run dev
```

Build the static site with `npm run build`. Update the placeholder identity and deployment URL in [`src/settings.ts`](src/settings.ts). Content is managed through Markdown files:

- `src/content/about.md` — rendered by the home page
- `src/content/blogs/*.md` — future blog posts
- `src/data/projects.ts` — project and research entries, with a `cn`/`en`-ready data shape
