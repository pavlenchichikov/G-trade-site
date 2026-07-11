# Atratus Landing

A bilingual (RU / EN) one-page landing site for **Atratus**, a multi-asset
machine-learning trading-signal engine. Built as a portfolio piece and the
project's public page.

- Repo it showcases: https://github.com/pavlenchichikov/G-Trade

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Lightweight custom i18n (RU / EN, persisted to `localStorage`)
- Static build; no backend

## Develop

```bash
npm install
npm run dev        # local dev server (default http://localhost:5173)
```

## Build

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the built dist/ locally
```

## Deploy

The build uses a relative base (`base: "./"` in `vite.config.ts`), so `dist/`
works on GitHub Pages project pages, Netlify, Cloudflare Pages, or any static
host without extra configuration.

### GitHub Pages (automated)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
One-time setup: in the GitHub repo, open **Settings**, then **Pages**, and set
**Source** to **GitHub Actions**. After the next push the site is served at
`https://<user>.github.io/<repo>/`.

## Structure

```
src/
  App.tsx            section composition
  i18n.tsx           language context + persistence
  config.ts          links and public-asset helper
  hooks/             useInView (reveal-on-scroll)
  strings/           en.ts / ru.ts copy (typed by types.ts)
  components/        Nav, Hero, Metrics, Features, HowItWorks,
                     Research, Universe, Screenshots, TechStack, Footer, ...
public/              banner + product screenshots
```

Copy is drawn from the Atratus README so the site stays consistent with the
repository.
