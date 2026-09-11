import { lazy, Suspense, useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

const Homeowners = lazy(() => import('./pages/Homeowners'))
const DrivingRange = lazy(() => import('./pages/DrivingRange'))
const HOA = lazy(() => import('./pages/HOA'))
const OtherNets = lazy(() => import('./pages/OtherNets'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))

export type Page =
  | 'home'
  | 'homeowners'
  | 'driving-range'
  | 'hoa'
  | 'other-nets'
  | 'gallery'
  | 'about'
  | 'faq'
  | 'contact'

const pagePaths: Record<Page, string> = {
  home: '/',
  homeowners: '/homeowners',
  'driving-range': '/driving-range',
  hoa: '/hoa',
  'other-nets': '/other-nets',
  gallery: '/gallery',
  about: '/about',
  faq: '/faq',
  contact: '/contact',
}

const pageMeta: Record<Page, { title: string; description: string; keywords: string }> = {
  home: {
    title: 'Golf Nets Unlimited | Golf Ball Deterrent Netting Systems',
    description: 'Premium golf ball containment and netting systems for homeowners, driving ranges, HOAs, and commercial facilities.',
    keywords: 'golf nets, golf netting, golf ball deterrent netting, golf protection netting, residential golf nets, HOA golf netting, driving range netting, golf course netting, Nets Unlimited',
  },
  homeowners: {
    title: 'Residential Golf Ball Deterrent Netting | Golf Nets Unlimited',
    description: 'Custom residential golf netting systems that protect homes, patios, windows, and families from errant golf balls.',
    keywords: 'residential golf nets, home golf netting, golf ball protection, patio netting, window protection netting, golf course home protection',
  },
  'driving-range': {
    title: 'Driving Range & Golf Course Netting | Golf Nets Unlimited',
    description: 'Professional driving range, tee box, cart path, and golf course protection netting designed and installed by Nets Unlimited.',
    keywords: 'driving range netting, golf course netting, tee box netting, cart path netting, practice netting, golf range safety nets',
  },
  hoa: {
    title: 'HOA Golf Protection Netting | Golf Nets Unlimited',
    description: 'Golf ball deterrent netting solutions for HOAs, golf-course communities, and property managers.',
    keywords: 'HOA golf netting, community golf protection, property manager golf nets, golf course community netting, homeowner association netting',
  },
  'other-nets': {
    title: 'Sport, Pet, Shade & Decorative Netting | Golf Nets Unlimited',
    description: 'Custom sport containment, pet protection, shade structure, handrail, bridge, tunnel, and decorative netting solutions.',
    keywords: 'sport containment netting, pet protection netting, shade netting, decorative netting, handrail netting, bridge netting, custom nets',
  },
  gallery: {
    title: 'Golf Netting Project Gallery | Golf Nets Unlimited',
    description: 'View completed Golf Nets Unlimited projects including residential, HOA, golf course, and specialty netting installations.',
    keywords: 'golf netting gallery, golf nets projects, residential netting photos, driving range netting photos, golf protection netting examples',
  },
  about: {
    title: 'About Golf Nets Unlimited | Nets Unlimited, Inc.',
    description: 'Learn about Golf Nets Unlimited, a division of Nets Unlimited, Inc., specializing in custom golf ball deterrent netting systems.',
    keywords: 'about Golf Nets Unlimited, Nets Unlimited Inc, licensed netting contractor, golf netting company, custom netting contractor',
  },
  faq: {
    title: 'Golf Netting FAQs | Golf Nets Unlimited',
    description: 'Answers to common questions about golf ball deterrent netting systems, installation, materials, and project planning.',
    keywords: 'golf netting FAQ, golf ball deterrent questions, golf net installation, golf net materials, residential golf net questions',
  },
  contact: {
    title: 'Contact Golf Nets Unlimited | Get a Quote',
    description: 'Contact Golf Nets Unlimited to discuss a custom golf ball deterrent netting system for your home, HOA, course, or range.',
    keywords: 'contact Golf Nets Unlimited, golf netting quote, golf net installation estimate, Phoenix golf netting, Nets Unlimited contact',
  },
}

export const getPagePath = (page: Page) => pagePaths[page]

function pageFromPath(pathname: string): Page {
  const match = Object.entries(pagePaths).find(([, path]) => path === pathname)
  return (match?.[0] as Page | undefined) ?? 'home'
}

function setMetaTag(selector: string, attr: 'content' | 'href', value: string) {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

function getCanonicalBase() {
  return window.location.hostname === 'localhost'
    ? window.location.origin
    : 'https://golfnetsunlimited.com'
}

export default function App() {
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname))

  const navigate = (p: Page) => {
    setPage(p)
    const path = pagePaths[p]
    if (window.location.pathname !== path) {
      window.history.pushState({ page: p }, '', path)
    }
  }

  useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const meta = pageMeta[page]
    const canonical = `${getCanonicalBase()}${pagePaths[page]}`
    document.title = meta.title
    setMetaTag('meta[name="description"]', 'content', meta.description)
    setMetaTag('meta[name="keywords"]', 'content', meta.keywords)
    setMetaTag('meta[name="publisher"]', 'content', 'Nets Unlimited, Inc.')
    setMetaTag('link[rel="canonical"]', 'href', canonical)
    setMetaTag('meta[property="og:title"]', 'content', meta.title)
    setMetaTag('meta[property="og:description"]', 'content', meta.description)
    setMetaTag('meta[property="og:url"]', 'content', canonical)
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title)
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description)
  }, [page])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#F8F7F4' }}>
      <Nav currentPage={page} navigate={navigate} />
      {page === 'home' && <Home navigate={navigate} />}
      <Suspense fallback={null}>
        {page === 'homeowners' && <Homeowners navigate={navigate} />}
        {page === 'driving-range' && <DrivingRange navigate={navigate} />}
        {page === 'hoa' && <HOA navigate={navigate} />}
        {page === 'other-nets' && <OtherNets navigate={navigate} />}
        {page === 'gallery' && <Gallery navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'faq' && <FAQ navigate={navigate} />}
        {page === 'contact' && <Contact navigate={navigate} />}
      </Suspense>
      <Footer navigate={navigate} />
    </div>
  )
}
