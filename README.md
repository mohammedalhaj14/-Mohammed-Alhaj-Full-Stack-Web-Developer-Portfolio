# Mohammed Alhaj — Full-Stack Web Developer Portfolio

**Live demo:** https://mohammed-alhaj-full-stack-web-devel.vercel.app

A personal portfolio built with React and Vite. It showcases three
flagship case studies — a Media E-Commerce Platform, BookBot (an AI-assisted
bookstore), and an Institution Management System — plus a grid of smaller
builds: landing pages, storefront templates and standalone tools.

## Tech stack

- React 18
- Vite
- Plain CSS (custom properties for theming, no framework)

## Project structure

```
src/
  components/    Nav, Hero, About, CaseStudies, Projects, Contact, Footer
  data/          projects.js — all project content in one place
  index.css      design tokens + all styles
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

Deployed on Vercel. Vercel auto-detects the Vite framework preset — no config
needed beyond the default build command (`npm run build`) and output
directory (`dist`). Every push to `main` redeploys automatically once the
repo is connected.

## Editing content

- **Project text, links, tech tags** — `src/data/projects.js`
- **Section copy** — directly inside each file in `src/components/`
- **Colors, type, spacing** — CSS custom properties at the top of `src/index.css`

## Contact

- Email: mohammedalhaj14@gmail.com
- WhatsApp: +961 76 724 176
- GitHub: [@mohammedalhaj14](https://github.com/mohammedalhaj14)
