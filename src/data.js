// Language-independent data: links, numbers, stacks. All translatable text lives in locale.js.
const base = import.meta.env.BASE_URL

// To change the CV, replace the PDF in /public and keep the file name. Add a separate Arabic CV by pointing `ar` at it.
export const CV = { en: `${base}Mohammad_Al_Haj_CV.pdf`, ar: `${base}Mohammad_Al_Haj_CV.pdf` }
export const EMAIL = 'mohammedalhaj14@gmail.com'
export const PHONE_DISPLAY = '+961 76 724 176'
export const PHONE_TEL = '+96176724176'
export const WHATSAPP = 'https://wa.me/96176724176'
export const GITHUB = 'https://github.com/mohammedalhaj14'

export const statValues = ['17+', '5,000+', '32%', '2.1s']

export const skillGroups = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  backend: ['PHP', 'Laravel', 'Node.js', 'Python (OOP)', 'REST APIs'],
  data: ['MySQL', 'MongoDB'],
  integrations: ['Stripe', 'Google Gemini API', 'WhatsApp', 'Git'],
}

// `image`: 1600x1000 WebP preview in /public/screens (real screenshots in a browser frame; replace a file to update it).
// If `image` is null, a neutral placeholder is shown.
export const featured = [
  { id: 'media', mono: 'ME', host: 'media-shop.infinityfree.io', url: 'https://media-shop.infinityfree.io/', stack: ['PHP 8', 'JavaScript', 'Bootstrap 5', 'MySQL', 'Stripe API'], image: `${base}screens/media-ecommerce-preview.webp`, full: true },
  { id: 'bookbot', mono: 'BB', host: 'bookstore-demo.infinityfree.io', url: 'https://bookstore-demo.infinityfree.io/', stack: ['Laravel 12', 'Blade', 'Google Gemini API', 'Bootstrap 5', 'MySQL'], image: `${base}screens/bookbot-preview.webp`, full: true },
  { id: 'institution', mono: 'IM', host: 'institution-demo.infinityfree.me', url: 'https://institution-demo.infinityfree.me/', stack: ['Laravel', 'PHP', 'RBAC', 'Bootstrap 5', 'MySQL'], image: `${base}screens/institution-management-preview.webp`, full: true },
  { id: 'codenet', mono: 'CN', host: 'code-net-five.vercel.app', url: 'https://code-net-five.vercel.app/', stack: ['Next.js 15', 'Tailwind CSS', 'Formspree'], image: `${base}screens/codenet-tech-agency-preview.webp`, full: false },
  { id: 'menu', mono: 'RM', host: 'restaurant-menu-alpha-rouge.vercel.app', url: 'https://restaurant-menu-alpha-rouge.vercel.app/', stack: ['React', 'Vite', 'Bootstrap 5'], image: `${base}screens/restaurant-menu-preview.webp`, full: false },
]

// Names and descriptions are in locale.js (projects.other.items), matched by index.
export const otherProjects = [
  { url: 'https://mnaqish-oz.vercel.app/', stack: 'React · Tailwind CSS · Vite' },
  { url: 'https://sports-products-landing-page.vercel.app/', stack: 'React · React Router · Tailwind CSS' },
  { url: 'https://mohammedalhaj14.github.io/Modern-Business-SaaS-Landing-Page/', stack: 'HTML5 · CSS3 · JavaScript' },
  { url: 'https://mohammedalhaj14.github.io/QUANTUM-UPLINK-landing-page/', stack: 'HTML5 · CSS3 Grid · JavaScript' },
  { url: 'https://mohammedalhaj14.github.io/sport-website-template/', stack: 'HTML5 · CSS3 · Bootstrap 5 · jQuery' },
  { url: 'https://mohammedalhaj14.github.io/Weather-App/', stack: 'HTML5 · CSS3 · JavaScript · Open-Meteo API' },
  { url: 'https://mohammedalhaj14.github.io/glass-calculator/', stack: 'HTML5 · CSS3 Grid · JavaScript OOP' },
  { url: 'https://mohammedalhaj14.github.io/-Ultimate-Time-Hub-Pro-Edition/', stack: 'HTML5 · CSS3 · JavaScript · Web Audio API' },
  { url: 'https://mohammedalhaj14.github.io/mathpro-engine/', stack: 'HTML5 · CSS3 · JavaScript' },
]

export const jobRanges = ['08/2022 – 07/2026', '09/2018 – 06/2022']
export const eduYears = ['2019–2020', '2016–2018']
export const certYears = ['2025', '2024–2025', '2023', '2022', '2023', '2021']
