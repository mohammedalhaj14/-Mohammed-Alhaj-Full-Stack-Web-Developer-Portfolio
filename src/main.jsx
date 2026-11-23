import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const initialLang = /\/ar\/?$/.test(window.location.pathname) ? 'ar' : 'en'
const app = <App initialLang={initialLang} />

// The production build ships pre-rendered HTML, so hydrate it. In `npm run dev` the root is empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
