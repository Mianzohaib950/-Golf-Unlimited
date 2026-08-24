import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const CATEGORIES = ['All', 'Residential', 'Driving Range', 'HOA', 'Specialty']

const images = [
  { id: 1, src: '/images/golf-nets/gallery/gallery-01.jpg', category: 'Residential' },
  { id: 2, src: '/images/golf-nets/gallery/gallery-02.jpeg', category: 'Residential' },
  { id: 3, src: '/images/golf-nets/gallery/gallery-03.jpg', category: 'Driving Range' },
  { id: 4, src: '/images/golf-nets/gallery/gallery-04.jpg', category: 'Driving Range' },
  { id: 5, src: '/images/golf-nets/gallery/gallery-05.jpg', category: 'Residential' },
  { id: 6, src: '/images/golf-nets/gallery/gallery-06.jpg', category: 'HOA' },
  { id: 7, src: '/images/golf-nets/gallery/gallery-07.jpg', category: 'Residential' },
  { id: 8, src: '/images/golf-nets/gallery/gallery-08.jpg', category: 'HOA' },
  { id: 9, src: '/images/golf-nets/gallery/gallery-09.jpg', category: 'Residential' },
  { id: 10, src: '/images/golf-nets/homeowners/residential-net.jpg', category: 'Residential' },
  { id: 11, src: '/images/golf-nets/driving-range/cart-path.jpg', category: 'Driving Range' },
  { id: 12, src: '/images/golf-nets/other-nets/service-09.jpeg', category: 'Specialty' },
]

const PAGE_SIZE = 9

export default function Gallery({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState<typeof images[0] | null>(null)

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice(0, page * PAGE_SIZE)

  const filterChange = (cat: string) => { setActiveCategory(cat); setPage(1) }

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '56px', borderBottom: '1px solid rgba(26,26,24,0.08)', maxWidth: '1280px', margin: '0 auto', padding: '120px 40px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>Project Gallery</p>
            <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
              Gallery
            </h1>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>
            View our available project images and call us to learn more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 40px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => filterChange(cat)}
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '8px 18px',
              border: '1px solid',
              borderColor: activeCategory === cat ? '#1A1A18' : 'rgba(26,26,24,0.18)',
              backgroundColor: activeCategory === cat ? '#1A1A18' : 'transparent',
              color: activeCategory === cat ? '#F8F7F4' : 'rgba(26,26,24,0.5)',
              transition: 'all 0.15s',
            }}
          >
            {cat}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'rgba(26,26,24,0.35)', alignSelf: 'center' }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        <div style={{ columns: '3', columnGap: '12px' }}>
          {visible.map(img => (
            <div
              key={img.id}
              onClick={() => setModal(img)}
              style={{ breakInside: 'avoid', marginBottom: '12px', cursor: 'zoom-in', overflow: 'hidden', position: 'relative', display: 'block' }}
            >
              <img
                src={img.src}
                alt="Golf Nets Unlimited gallery"
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && page < totalPages && <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '48px' }}><button onClick={() => setPage(page + 1)} style={{ padding: '12px 24px', border: '1px solid rgba(26,26,24,0.25)', color: '#1A1A18', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>+ Show More</button></div>}
      </section>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(10,16,11,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>
            <img src={modal.src} alt="Golf Nets Unlimited gallery" style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ padding: '20px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 300, color: '#fff' }}>Gallery</p>
              <button onClick={() => setModal(null)} style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#fff')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
      <section style={{ textAlign: 'center', padding: '0 40px 96px' }}><button onClick={() => navigate('contact')} style={{ padding: '14px 28px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Call Us to Learn More</button><p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'rgba(26,26,24,0.5)' }}>Find out more</p></section>
    </div>
  )
}
