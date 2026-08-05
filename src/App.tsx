import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Homeowners from './pages/Homeowners'
import DrivingRange from './pages/DrivingRange'
import HOA from './pages/HOA'
import OtherNets from './pages/OtherNets'
import Gallery from './pages/Gallery'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

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

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => setPage(p)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#F8F7F4' }}>
      <Nav currentPage={page} navigate={navigate} />
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'homeowners' && <Homeowners navigate={navigate} />}
      {page === 'driving-range' && <DrivingRange navigate={navigate} />}
      {page === 'hoa' && <HOA navigate={navigate} />}
      {page === 'other-nets' && <OtherNets navigate={navigate} />}
      {page === 'gallery' && <Gallery navigate={navigate} />}
      {page === 'about' && <About navigate={navigate} />}
      {page === 'faq' && <FAQ navigate={navigate} />}
      {page === 'contact' && <Contact navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  )
}
