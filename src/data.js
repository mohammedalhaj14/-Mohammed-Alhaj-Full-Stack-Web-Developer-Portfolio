// Language-independent data (icons, links, numbers, tags).
// All translatable text lives in src/locale.js.
const base = import.meta.env.BASE_URL
// To add a separate Arabic CV, drop the file in /public and point `ar` at it.
export const CV = { en: `${base}Mohammad_Al_Haj_CV.pdf`, ar: `${base}Mohammad_Al_Haj_CV.pdf` }
export const EMAIL = 'mohammedalhaj14@gmail.com'
export const PHONE = '+96176724176'
export const GITHUB = 'https://github.com/mohammedalhaj14'

export const cubeFaces = [
  ['fa-brands fa-laravel', 'Laravel'], ['fa-brands fa-react', 'React'], ['fa-brands fa-node-js', 'Node.js'],
  ['fa-brands fa-php', 'PHP'], ['fa-solid fa-database', 'MySQL'], ['fa-brands fa-js', 'JavaScript'],
]
export const skills = [
  ['fa-brands fa-html5', 'HTML'], ['fa-brands fa-css3-alt', 'CSS'], ['fa-brands fa-js', 'JavaScript'],
  ['fa-brands fa-react', 'React'], ['fa-solid fa-n', 'Next.js'], ['fa-brands fa-node-js', 'Node.js'],
  ['fa-brands fa-php', 'PHP'], ['fa-brands fa-laravel', 'Laravel'], ['fa-brands fa-bootstrap', 'Bootstrap'],
  ['fa-solid fa-plug', 'REST API'], ['fa-solid fa-database', 'MySQL / MongoDB'],
  ['fa-brands fa-python', 'Python (OOP)'], ['fa-brands fa-git-alt', 'Git'],
]
export const statValues = ['17+', '5,000+', '32%', '2.1s']
export const jobRanges = ['08/2022 – 07/2026', '09/2018 – 06/2022']
export const eduYears = ['2019–2020', '2016–2018']
export const certYears = ['2025', '2024–2025', '2023', '2022', '2023', '2021']
// kind: 'src' | 'demo' | 'all' -> label comes from locale
export const projects = [
  { icon: 'fa-solid fa-cart-shopping', tags: ['React', 'PHP', 'Laravel', 'Stripe'], url: 'https://github.com/mohammedalhaj14/media-project-E-commerce-website', kind: 'src', cicon: 'fa-brands fa-github' },
  { icon: 'fa-solid fa-robot', tags: ['Laravel 12', 'Google Gemini', 'MySQL'], url: 'https://github.com/mohammedalhaj14/Book-Store---laravel', kind: 'src', cicon: 'fa-brands fa-github' },
  { icon: 'fa-solid fa-school', tags: ['Laravel', 'RBAC', 'MySQL'], url: 'https://github.com/mohammedalhaj14/Institution-Management-System-Project--LARAVEL', kind: 'src', cicon: 'fa-brands fa-github' },
  { icon: 'fa-solid fa-code', tags: ['Next.js 15', 'Tailwind'], url: 'https://code-net-five.vercel.app/', kind: 'demo', cicon: 'fa-solid fa-arrow-up-right-from-square' },
  { icon: 'fa-solid fa-clock', tags: ['HTML5', 'CSS3', 'JS ES6+'], url: 'https://mohammedalhaj14.github.io/-Ultimate-Time-Hub-Pro-Edition/', kind: 'demo', cicon: 'fa-solid fa-arrow-up-right-from-square' },
  { icon: 'fa-brands fa-github', tags: [], url: GITHUB, kind: 'all', cicon: 'fa-solid fa-arrow-right' },
]

// Smaller builds (shown in the "Also built" section). Text lives in locale.js -> more.items
export const otherProjects = [
  { tags: ['React', 'Vite', 'Bootstrap 5'], url: 'https://my-restaurant-menu-xi.vercel.app/' },
  { tags: ['React', 'Tailwind CSS', 'Vite'], url: 'https://mnaqish-oz.vercel.app/' },
  { tags: ['React', 'React Router', 'Tailwind CSS'], url: 'https://sports-products-landing-page.vercel.app/' },
  { tags: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://mohammedalhaj14.github.io/Modern-Business-SaaS-Landing-Page/' },
  { tags: ['HTML5', 'CSS3 Grid', 'JavaScript'], url: 'https://mohammedalhaj14.github.io/QUANTUM-UPLINK-landing-page/' },
  { tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery'], url: 'https://mohammedalhaj14.github.io/sport-website-template/' },
  { tags: ['HTML5', 'CSS3', 'JavaScript', 'Open-Meteo API'], url: 'https://mohammedalhaj14.github.io/Weather-App/' },
  { tags: ['HTML5', 'CSS3 Grid', 'JavaScript OOP'], url: 'https://mohammedalhaj14.github.io/glass-calculator/' },
  { tags: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://mohammedalhaj14.github.io/mathpro-engine/' },
]
