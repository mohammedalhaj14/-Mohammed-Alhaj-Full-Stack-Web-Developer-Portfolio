# Mohammad Al Haj — Full-Stack Web Developer

Full-stack developer (Laravel, React, Next.js, Node.js) with 17+ commercial projects delivered across e-commerce, SaaS and education. Working remotely since 2018 and **available for remote work**.

**Portfolio:** https://mohammed-alhaj-full-stack-web-devel-one.vercel.app/
**Languages:** English and Arabic (العربية), with a one-click switch in the navbar.
**CV:** download it from the portfolio, or from `public/Mohammad_Al_Haj_CV.pdf` in this repo.

## Results

- 17+ commercial projects across e-commerce, SaaS and education
- Systems built to support 5,000+ concurrent users
- 32% conversion improvement on a delivered project
- Load times optimized to 2.1 seconds

## Flagship projects

### Media E-Commerce Platform
**Problem:** a digital marketplace needed real authentication, live inventory and a payment flow that could not fail silently.
**Approach:** built the storefront and admin logic in PHP 8 with session-based auth and cart state, then wired Stripe directly into checkout so payment status is never assumed on the client.

- Secure user authentication and session management
- Real-time cart system backed by PHP sessions
- Stripe API integration for payment processing
- Responsive storefront built with Bootstrap 5

**Stack:** PHP 8, JavaScript ES6+, Bootstrap 5, MySQL, Stripe API
**Source:** https://github.com/mohammedalhaj14/media-project-E-commerce-website

### BookBot — AI Bookstore System
**Problem:** an online bookstore wanted product recommendations without hand-built rules, plus separate customer and admin workflows on one codebase.
**Approach:** built on Laravel 12 with a dual-role permission system, then connected an AI clerk through the Google Gemini API that reads session history to make relevant suggestions.

- AI clerk powered by Google Gemini
- Full CRUD catalog management
- Dual-role system for customers and admins
- Session-based conversation history for the AI clerk

**Stack:** Laravel 12, Blade, Google Gemini, Bootstrap 5, MySQL 8.0+
**Source:** https://github.com/mohammedalhaj14/Book-Store---laravel

### Institution Management System
**Problem:** educational institutions needed one system to manage students, staff, courses and attendance without mixing up who can see or edit what.
**Approach:** structured the whole app around role-based access from the start. Admin, staff and student each get a scoped view, with full CRUD across students, staff, courses and attendance records.

- Role-based access for admin, staff and students
- Student and staff CRUD operations
- Course and class management
- Attendance tracking system

**Stack:** Laravel, PHP, Bootstrap 5, MySQL
**Source:** https://github.com/mohammedalhaj14/Institution-Management-System-Project--LARAVEL

## More projects

| Project | What it is | Stack | Link |
| --- | --- | --- | --- |
| CodeNet — Tech Agency | Service showcase and academy platform for a software agency | Next.js 15, Tailwind CSS, Formspree | [Live](https://code-net-five.vercel.app/) |
| Restaurant Menu App | Digital menu with category filtering, cart and WhatsApp ordering | React, Vite, Bootstrap 5 | [Live](https://my-restaurant-menu-xi.vercel.app/) |
| MNAQISH.OZ — Lebanese Bakery | Brand-led site with a homepage slider and full menu system | React, Tailwind CSS, Vite | [Live](https://mnaqish-oz.vercel.app/) |
| NITROGEAR — Sports Store | Athlete-focused storefront with dynamic filtering and product catalog | React, React Router, Tailwind CSS | [Live](https://sports-products-landing-page.vercel.app/) |
| Nexus — SaaS Landing | Conversion-focused landing page with WhatsApp lead delivery | HTML5, CSS3, JavaScript | [Live](https://mohammedalhaj14.github.io/Modern-Business-SaaS-Landing-Page/) |
| NEXUS.OS — Quantum Terminal | Enterprise landing concept with a matrix data-rain background | HTML5, CSS3 Grid, JavaScript | [Live](https://mohammedalhaj14.github.io/QUANTUM-UPLINK-landing-page/) |
| Fitex — Fitness Club | Responsive fitness club site with animations and sliders | HTML5, CSS3, Bootstrap 5, jQuery | [Live](https://mohammedalhaj14.github.io/sport-website-template/) |
| Weather App | Real-time weather by city search, no API key needed | HTML5, CSS3, JavaScript, Open-Meteo API | [Live](https://mohammedalhaj14.github.io/Weather-App/) |
| Glass Calculator | Glassmorphism calculator with light/dark themes and history | HTML5, CSS3 Grid, JavaScript OOP | [Live](https://mohammedalhaj14.github.io/glass-calculator/) |
| Ultimate Time Hub Pro | Clock, countdown timer and tally counter in one dashboard | HTML5, CSS3, JavaScript, Web Audio API | [Live](https://mohammedalhaj14.github.io/-Ultimate-Time-Hub-Pro-Edition/) |
| MathPro Engine | Timed math quiz engine with a 30-second pressure mode | HTML5, CSS3, JavaScript | [Live](https://mohammedalhaj14.github.io/mathpro-engine/) |

## Skills

- **Frontend:** HTML5, CSS3, JavaScript, React, Next.js, Bootstrap, Tailwind CSS
- **Backend:** PHP, Laravel, Node.js, Python (OOP), REST APIs
- **Data:** MySQL, MongoDB
- **Integrations:** Stripe, Google Gemini, WhatsApp
- **Tools:** Git, Vite, Vercel

## Experience

- **Full-Stack Web Developer, TripoCode** (08/2022 – 07/2026, remote): full-stack web applications, scalable APIs, secure systems and database-driven platforms, from development to deployment.
- **Full-Stack Web Developer, Top Coder** (09/2018 – 06/2022, remote): React, Laravel, PHP, MySQL and JavaScript apps with role-based management systems, API integrations and Stripe payments.

## Education and certificates

- Teaching Diploma in Computer Science, University of Balamand (2019–2020)
- Bachelor in Computer Science, University of Balamand (2016–2018)
- OOP in Python (2025) and Back-End Web Development (2024–2025), Barbish Institution
- JavaScript & Algorithms (2023) and Responsive Web Design (2022), freeCodeCamp
- Digital Marketing (2023), Barbish Institution
- Android App Development, MIT App Inventor (2021), DOT Lebanon

## About this repo

The portfolio site itself is built with React and Vite, in English and Arabic.

- **Language switch:** a button in the navbar toggles between English and Arabic. English is always the default. The page fades smoothly and flips to a right-to-left layout for Arabic.
- **Arabic typography:** Cairo for headings and Tajawal for body text, paired with Bricolage Grotesque and Manrope for English.

Run it locally:

```bash
npm install
npm run dev
```

Where things live:

- `src/locale.js`: all English and Arabic text (edit translations here)
- `src/data.js`: links, icons, tags, numbers and the CV file paths
- `src/App.jsx`: the sections and the language switch logic
- `public/`: the CV PDF and the profile photo

To add a separate Arabic CV, put the file in `public/` and point `CV.ar` in `src/data.js` at it.

## نبذة بالعربية

محمد الحاج، مطوّر ويب Full-Stack (Laravel وReact وNext.js وNode.js) بخبرة تزيد على 8 سنوات وأكثر من 17 مشروعاً تجارياً في التجارة الإلكترونية وSaaS والتعليم. أعمل عن بُعد ومتاح لفرص جديدة. الموقع متوفر بالعربية والإنجليزية مع تبديل سلس بين اللغتين.

## Contact

- Email: [mohammedalhaj14@gmail.com](mailto:mohammedalhaj14@gmail.com)
- WhatsApp: +961 76 724 176
- GitHub: [@mohammedalhaj14](https://github.com/mohammedalhaj14)
