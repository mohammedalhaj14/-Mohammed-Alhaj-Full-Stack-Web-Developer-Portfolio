// Flagship work — deep-dive case studies.
// Add a `demo` field once these are deployed; for now they link to source.
export const caseStudies = [
  {
    id: 'ecommerce',
    title: 'Media E-Commerce Platform',
    tag: 'E-commerce',
    problem:
      'A digital marketplace needed real authentication, live inventory and a payment flow that could not fail silently.',
    approach:
      'Built the storefront and admin logic in PHP 8 with session-based auth and cart state, then wired Stripe directly into the checkout so payment status is never assumed client-side.',
    features: [
      'Secure user authentication and session management',
      'Real-time cart system backed by PHP sessions',
      'Stripe API integration for payment processing',
      'Responsive storefront built with Bootstrap 5',
    ],
    stack: ['PHP 8', 'JavaScript ES6+', 'Bootstrap 5', 'MySQL', 'Stripe API'],
    repo: 'https://github.com/mohammedalhaj14/media-project-E-commerce-website',
    demo: null,
    image: 'https://raw.githubusercontent.com/mohammedalhaj14/media-project-E-commerce-website/main/images/moviePage.png',
  },
  {
    id: 'bookbot',
    title: 'BookBot — AI Bookstore System',
    tag: 'AI / Full-Stack',
    problem:
      'An online bookstore wanted product recommendations without hand-built rules, plus separate customer and admin workflows on one codebase.',
    approach:
      'Built on Laravel 12 with a dual-role permission system, then connected an AI clerk through the Google Gemini 3 Flash API that reads session history to make relevant suggestions.',
    features: [
      'AI clerk powered by Google Gemini 3 Flash',
      'Full CRUD catalog management',
      'Dual-role system for customers and admins',
      'Session-based conversation history for the AI clerk',
    ],
    stack: ['Laravel 12', 'Blade Templates', 'Google Gemini 3', 'Bootstrap 5', 'MySQL 8.0+'],
    repo: 'https://github.com/mohammedalhaj14/Book-Store---laravel',
    demo: null,
    image: 'https://raw.githubusercontent.com/mohammedalhaj14/Book-Store---laravel/main/public/images/customer%20account.png',
  },
  {
    id: 'institution',
    title: 'Institution Management System',
    tag: 'Enterprise / Laravel',
    problem:
      'Educational institutions needed one system to manage students, staff, courses and attendance without mixing up who can see or edit what.',
    approach:
      'Structured the whole app around role-based access from the start — admin, staff and student each get a scoped view — with full CRUD across students, staff, courses and attendance records.',
    features: [
      'Role-based access for admin, staff and students',
      'Student and staff CRUD operations',
      'Course and class management',
      'Attendance tracking system',
    ],
    stack: ['Laravel', 'PHP', 'Bootstrap 5', 'MySQL'],
    repo: 'https://github.com/mohammedalhaj14/Institution-Management-System-Project--LARAVEL',
    demo: null,
    // This repo's /public/images folder only has stock/decorative photos, not an
    // actual app screenshot. Swap this for a real dashboard screenshot when you have one.
    image: 'https://raw.githubusercontent.com/mohammedalhaj14/Institution-Management-System-Project--LARAVEL/main/public/images/technology%20IT.jfif',
  },
]

// Secondary builds — landing pages, storefront templates and small tools.
export const otherProjects = [
  {
    title: 'CodeNet — Tech Agency',
    description: 'Service showcase and academy platform for a software agency, built for speed.',
    stack: ['Next.js 15', 'Tailwind CSS', 'Formspree'],
    demo: 'https://code-net-five.vercel.app/',
  },
  {
    title: 'Restaurant Menu App',
    description: 'Digital menu with category filtering, cart and WhatsApp ordering.',
    stack: ['React', 'Vite', 'Bootstrap 5'],
    demo: 'https://my-restaurant-menu-xi.vercel.app/',
  },
  {
    title: 'MNAQISH.OZ — Lebanese Bakery',
    description: 'Brand-led site for a bakery, with a homepage slider and full menu system.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    demo: 'https://mnaqish-oz.vercel.app/',
  },
  {
    title: 'NITROGEAR — Sports Store',
    description: 'Dark, athlete-focused storefront with dynamic filtering and product catalog.',
    stack: ['React', 'React Router', 'Tailwind CSS'],
    demo: 'https://sports-products-landing-page.vercel.app/',
  },
  {
    title: 'Nexus — SaaS Landing',
    description: 'Conversion-focused landing page with WhatsApp lead delivery.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://mohammedalhaj14.github.io/Modern-Business-SaaS-Landing-Page/',
  },
  {
    title: 'NEXUS.OS — Quantum Terminal',
    description: 'Enterprise landing concept with a matrix data-rain background and CLI-style nav.',
    stack: ['HTML5', 'CSS3 Grid', 'JavaScript'],
    demo: 'https://mohammedalhaj14.github.io/QUANTUM-UPLINK-landing-page/',
  },
  {
    title: 'Fitex — Fitness Club',
    description: 'Responsive fitness club site with smooth animations and interactive sliders.',
    stack: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery'],
    demo: 'https://mohammedalhaj14.github.io/sport-website-template/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather by city search, no API key required for the user.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Open-Meteo API'],
    demo: 'https://mohammedalhaj14.github.io/Weather-App/',
  },
  {
    title: 'Glass Calculator',
    description: 'Glassmorphism calculator with light/dark themes and history tracking.',
    stack: ['HTML5', 'CSS3 Grid', 'JavaScript OOP'],
    demo: 'https://mohammedalhaj14.github.io/glass-calculator/',
  },
  {
    title: 'Ultimate Time Hub Pro',
    description: 'Clock, countdown timer and tally counter in one dashboard.',
    stack: ['HTML5', 'CSS3 clamp()', 'JavaScript', 'Web Audio API'],
    demo: 'https://mohammedalhaj14.github.io/-Ultimate-Time-Hub-Pro-Edition/',
  },
  {
    title: 'MathPro Engine',
    description: 'Timed math quiz engine with a 30-second pressure mode and instant feedback.',
    stack: ['HTML5', 'CSS3 Flexbox', 'JavaScript'],
    demo: 'https://mohammedalhaj14.github.io/mathpro-engine/',
  },
]

export const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js',
  'PHP', 'Laravel', 'Python', 'MySQL', 'Node.js',
]

// The four core roles this portfolio is built to prove — shown as a lit strip.
export const coreStack = ['Next.js', 'Node.js', 'React', 'Laravel']
