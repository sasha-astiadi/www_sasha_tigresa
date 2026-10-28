# Sasha Tigresa — Official Website

The official website of **Sasha Tigresa**, Indonesian-German DJ and electronic
music producer — Afro House, melodic and percussive electronic music.

Built with **Next.js 14** (App Router, static export), **Tailwind CSS**,
**Framer Motion** and `next/font` (Anton). Deployed as a static site to
GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & Deploy

```bash
npm run build    # static export → out/
npm run deploy   # publishes out/ via gh-pages
```

## Pages

| Route      | Content                                          |
| ---------- | ------------------------------------------------ |
| `/`        | Hero — full-screen photo, Anton title, film grain|
| `/about`   | Two-column bio with scrollable text              |
| `/music`   | Release covers with Listen / Download hover links|
| `/videos`  | DJ Sets — YouTube set thumbnails                 |
| `/contact` | Social links, booking mailto, presskit download  |

## Brand

- Accent red: `text-red-600/90`, hover `text-red-500`
- Display font: Anton (`--font-anton`, utility `font-anton`)
- Global film-grain overlay: `src/components/BgNoise.jsx` (in root layout,
  `z-30`, `pointer-events-none`)
- Bottom fixed nav: `src/components/Header.jsx`

## Media conventions

- Images live under `public/images/<page>/`
- Video thumbnails for `/videos` come from
  `https://i.ytimg.com/vi/{id}/maxresdefault.jpg`
- Aspect ratios use the `@tailwindcss/aspect-ratio` plugin syntax
  (`aspect-w-16 aspect-h-9`) — core `aspect-square`/`aspect-video` classes
  do not exist in this config.
