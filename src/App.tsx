import { lazy, Suspense, useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { canonicalUrl, DEFAULT_OG_IMAGE, pageFromPath, pageMeta, pagePaths, type Page } from './seo'

const Homeowners = lazy(() => import('./pages/Homeowners'))
const DrivingRange = lazy(() => import('./pages/DrivingRange'))
const HOA = lazy(() => import('./pages/HOA'))
const OtherNets = lazy(() => import('./pages/OtherNets'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))

export type { Page }

export const getPagePath = (page: Page) => pagePaths[page]

function setMetaTag(selector: string, attr: 'content' | 'href', value: string) {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

const currentPage = () => pageFromPath(window.location.pathname, import.meta.env.BASE_URL)

export default function App({ initialPage }: { initialPage?: Page }) {
  const [page, setPage] = useState<Page>(() => initialPage ?? currentPage())

  const navigate = (p: Page) => {
    setPage(p)
    const path = pagePaths[p]
    if (window.location.pathname !== path) {
      window.history.pushState({ page: p }, '', path)
    }
  }

  useEffect(() => {
    const onPopState = () => setPage(currentPage())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const meta = pageMeta[page]
    const canonical = canonicalUrl(page)
    const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE
    document.title = meta.title
    setMetaTag('meta[name="description"]', 'content', meta.description)
    setMetaTag('meta[name="keywords"]', 'content', meta.keywords)
    setMetaTag('link[rel="canonical"]', 'href', canonical)
    setMetaTag('meta[name="robots"]', 'content', page === 'not-found' ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMetaTag('meta[property="og:title"]', 'content', meta.title)
    setMetaTag('meta[property="og:description"]', 'content', meta.description)
    setMetaTag('meta[property="og:url"]', 'content', canonical)
    setMetaTag('meta[property="og:image"]', 'content', ogImage)
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title)
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description)
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage)
  }, [page])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#F8F7F4' }}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav currentPage={page} navigate={navigate} />
      <main id="main-content" tabIndex={-1} style={{ display: 'block', minHeight: page === 'home' ? '100vh' : '72vh', outline: 'none' }}>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'not-found' && <NotFound navigate={navigate} />}
        <Suspense fallback={<PageLoadingShell page={page} />}>
          {page === 'homeowners' && <Homeowners navigate={navigate} />}
          {page === 'driving-range' && <DrivingRange navigate={navigate} />}
          {page === 'hoa' && <HOA navigate={navigate} />}
          {page === 'other-nets' && <OtherNets navigate={navigate} />}
          {page === 'gallery' && <Gallery navigate={navigate} />}
          {page === 'about' && <About navigate={navigate} />}
          {page === 'faq' && <FAQ navigate={navigate} />}
          {page === 'contact' && <Contact navigate={navigate} />}
        </Suspense>
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

function PageLoadingShell({ page }: { page: Page }) {
  const isPlainPage = page === 'gallery' || page === 'about' || page === 'faq' || page === 'contact'

  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: isPlainPage ? '56vh' : '72vh',
        paddingTop: isPlainPage ? '150px' : 0,
        backgroundColor: '#F8F7F4',
      }}
    />
  )
}
