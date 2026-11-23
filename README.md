# Mohammad Al Haj — Full-Stack Web Developer

Full-stack developer (Laravel, React, Next.js, Node.js) with 8 years of remote work and 17+ commercial projects across e-commerce, SaaS and education. Available for remote work.

**Portfolio:** https://mohammed-alhaj-full-stack-web-devel-one.vercel.app/ (English) · https://mohammed-alhaj-full-stack-web-devel-one.vercel.app/ar/ (العربية)

## Results

- 17+ commercial projects across e-commerce, SaaS and education
- Systems built to support 5,000+ concurrent users
- 32% conversion improvement on a delivered project
- Load times optimized to 2.1 seconds

## Featured projects

### Media E-Commerce Platform
**Problem:** a digital marketplace needed real authentication, live inventory and a payment flow that could not fail silently.
**What I built:** storefront and admin logic in PHP 8 with session-based auth and cart state, with Stripe wired directly into checkout so payment status is never assumed on the client.
**Stack:** PHP 8, JavaScript, Bootstrap 5, MySQL, Stripe API
**Live demo:** https://media-shop.infinityfree.io/ · **Source:** https://github.com/mohammedalhaj14/media-project-E-commerce-website

### BookBot — AI Bookstore
**Problem:** an online bookstore wanted product recommendations without hand-built rules, plus separate customer and admin workflows on one codebase.
**What I built:** a Laravel 12 app with a dual-role permission system, and an AI clerk on the Google Gemini API that reads session history to suggest relevant books.
**Stack:** Laravel 12, Blade, Google Gemini API, Bootstrap 5, MySQL
**Live demo:** https://bookstore-demo.infinityfree.io/ · **Source:** https://github.com/mohammedalhaj14/Book-Store---laravel

### Institution Management System
**Problem:** educational institutions needed one system to manage students, staff, courses and attendance without mixing up who can see or edit what.
**What I built:** an app structured around role-based access from the start; admin, staff and student each get a scoped view, with full CRUD across students, staff, courses and attendance.
**Stack:** Laravel, PHP, Bootstrap 5, MySQL
**Live demo:** https://institution-demo.infinityfree.me/ · **Source:** https://github.com/mohammedalhaj14/Institution-Management-System-Project--LARAVEL

### More featured work
- **CodeNet Tech Agency**: service showcase and academy platform for a software agency. Next.js 15, Tailwind CSS, Formspree. [Live](https://code-net-five.vercel.app/)
- **Restaurant Menu App**: digital menu with category filtering, a cart and WhatsApp ordering. React, Vite, Bootstrap 5. [Live](https://restaurant-menu-alpha-rouge.vercel.app/)

## Other projects

| Project | What it is | Stack | Link |
| --- | --- | --- | --- |
| MNAQISH.OZ — Lebanese Bakery | Brand-led site with a homepage slider and full menu system | React, Tailwind CSS, Vite | [Live](https://mnaqish-oz.vercel.app/) |
| NITROGEAR — Sports Store | Athlete-focused storefront with dynamic filtering and a product catalog | React, React Router, Tailwind CSS | [Live](https://sports-products-landing-page.vercel.app/) |
| Nexus — SaaS Landing | Conversion-focused landing page with WhatsApp lead delivery | HTML5, CSS3, JavaScript | [Live](https://mohammedalhaj14.github.io/Modern-Business-SaaS-Landing-Page/) |
| NEXUS.OS — Quantum Terminal | Enterprise landing concept with a matrix data-rain background | HTML5, CSS3 Grid, JavaScript | [Live](https://mohammedalhaj14.github.io/QUANTUM-UPLINK-landing-page/) |
| Fitex — Fitness Club | Responsive fitness club site with animations and sliders | HTML5, CSS3, Bootstrap 5, jQuery | [Live](https://mohammedalhaj14.github.io/sport-website-template/) |
| Weather App | Real-time weather by city search | HTML5, CSS3, JavaScript, Open-Meteo API | [Live](https://mohammedalhaj14.github.io/Weather-App/) |
| Glass Calculator | Glassmorphism calculator with themes and history | HTML5, CSS3 Grid, JavaScript OOP | [Live](https://mohammedalhaj14.github.io/glass-calculator/) |
| Time Hub Pro | Clock, countdown timer and tally counter | HTML5, CSS3, JavaScript, Web Audio API | [Live](https://mohammedalhaj14.github.io/-Ultimate-Time-Hub-Pro-Edition/) |
| MathPro Engine | Timed math quiz with a 30-second pressure mode | HTML5, CSS3, JavaScript | [Live](https://mohammedalhaj14.github.io/mathpro-engine/) |

## Skills

- **Frontend:** HTML, CSS, JavaScript, React, Next.js, Bootstrap, Tailwind CSS
- **Backend:** PHP, Laravel, Node.js, Python (OOP), REST APIs
- **Databases:** MySQL, MongoDB
- **Integrations and tools:** Stripe, Google Gemini API, WhatsApp, Git

## Experience

- **Full-Stack Web Developer, TripoCode** (08/2022 – 07/2026, remote)
- **Full-Stack Web Developer, Top Coder** (09/2018 – 06/2022, remote)

## Education

- Teaching Diploma in Computer Science, University of Balamand (2019–2020)
- Bachelor in Computer Science, University of Balamand (2016–2018)
- Certificates: OOP in Python (2025), Back-End Web Development (2024–2025), JavaScript & Algorithms (2023), Responsive Web Design (2022), Digital Marketing (2023), Android App Development, MIT App Inventor (2021)

## About this repository

The portfolio is a React 18 + Vite site in English and Arabic (right-to-left), with no runtime dependencies beyond React.

### Run locally

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

The build runs three steps: the client bundle, a server bundle, then `scripts/prerender.mjs`. The script renders the page to static HTML for each language (`dist/index.html` and `dist/ar/index.html`), so crawlers and link previews see real content, and the browser then hydrates it. It also writes `dist/sitemap.xml` and `dist/robots.txt`. `npm run build:client` builds only the client bundle.

### Structure

```
site.config.js        site URL used for canonical links, Open Graph, sitemap
scripts/prerender.mjs static pre-rendering, sitemap, robots.txt
public/               CV (PDF), portrait, favicon, share image (og-image.png)
src/
  components/         Header, Hero, About, Projects, Experience, Services, Credentials, Contact, Footer
  data.js             links, stacks, numbers (language independent)
  locale.js           all English and Arabic text
  i18n.jsx            language provider (switching, <html lang/dir>, title, canonical)
  index.css           design tokens and all styles
```

### Editing content

- **Text and translations:** `src/locale.js` (keep the `en` and `ar` objects identical in shape)
- **Links, stacks, figures:** `src/data.js`
- **Colors, type, spacing:** the tokens at the top of `src/index.css`
- **Project previews:** 1600×1000 WebP images in `public/screens/` (real screenshots in a browser frame). To update one, replace the file and keep its name. Two previews are not single direct screenshots: CodeNet (a composite of two screenshots) and Restaurant Menu (a promotional case-study cover). Their image alt text says so.
- **CV:** replace `public/Mohammad_Al_Haj_CV.pdf` and keep the file name
- **Domain:** change `SITE_URL` in `site.config.js` and rebuild

### Deploy

Vercel detects Vite automatically: build command `npm run build`, output directory `dist`. Any static host works the same way.

## Contact

- Email: [mohammedalhaj14@gmail.com](mailto:mohammedalhaj14@gmail.com)
- WhatsApp: +961 76 724 176
- GitHub: [@mohammedalhaj14](https://github.com/mohammedalhaj14)
