import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const CATEGORIES = ['All', 'Residential', 'Driving Range', 'HOA', 'Specialty']

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop&auto=format', category: 'Driving Range', title: 'Mountain View Range — Full Perimeter', location: 'Scottsdale, AZ' },
  { id: 2, src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=1000&fit=crop&auto=format', category: 'Residential', title: 'Lakeside Estate — Perimeter Barrier', location: 'Naples, FL' },
  { id: 3, src: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=600&fit=crop&auto=format', category: 'Driving Range', title: 'Desert Ridge Practice Facility', location: 'Phoenix, AZ' },
  { id: 4, src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=900&fit=crop&auto=format', category: 'HOA', title: 'Pinehurst Community — Phase 1', location: 'Charlotte, NC' },
  { id: 5, src: 'https://images.unsplash.com/photo-1611374243147-44a702c2d44c?w=800&h=600&fit=crop&auto=format', category: 'Residential', title: 'Fairway Court — Fence-Top System', location: 'Jupiter, FL' },
  { id: 6, src: 'https://images.unsplash.com/photo-1592578629295-73a86d9df25d?w=800&h=700&fit=crop&auto=format', category: 'HOA', title: 'Ironwood Estates — Full Community', location: 'Tucson, AZ' },
  { id: 7, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&auto=format', category: 'Specialty', title: 'Multi-Sport Complex — Baseball', location: 'Atlanta, GA' },
  { id: 8, src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=900&fit=crop&auto=format', category: 'Specialty', title: 'Skybridge Safety System', location: 'Denver, CO' },
  { id: 9, src: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop&auto=format', category: 'Residential', title: 'Golf View Heights — Overhead Catch', location: 'Hilton Head, SC' },
  { id: 10, src: 'https://images.unsplash.com/photo-1573402563668-0dbc67c5cbe0?w=800&h=700&fit=crop&auto=format', category: 'Specialty', title: 'Avian Sanctuary — Enclosure', location: 'San Diego, CA' },
  { id: 11, src: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop&auto=format', category: 'Specialty', title: 'Vineyard Bird Protection', location: 'Napa, CA' },
  { id: 12, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=800&fit=crop&auto=format', category: 'Specialty', title: 'Indoor Practice Center — Dividers', location: 'Seattle, WA' },
]

const PAGE_SIZE = 9

export default function Gallery({ navigate: _navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState<typeof images[0] | null>(null)

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const filterChange = (cat: string) => { setActiveCategory(cat); setPage(1) }

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '56px', borderBottom: '1px solid rgba(26,26,24,0.08)', maxWidth: '1280px', margin: '0 auto', padding: '120px 40px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>Project Gallery</p>
            <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
              Completed installations
            </h1>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>
            A selection of residential, commercial, and specialty netting projects installed across the Southeast and Southwest United States.
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
                alt={img.title}
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.7) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = '0')}
              >
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{img.title}</p>
                  <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)' }}>{img.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', paddingTop: '48px' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                style={{
                  width: '36px',
                  height: '36px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  border: '1px solid',
                  borderColor: p === page ? '#1A1A18' : 'rgba(26,26,24,0.18)',
                  backgroundColor: p === page ? '#1A1A18' : 'transparent',
                  color: p === page ? '#F8F7F4' : 'rgba(26,26,24,0.5)',
                  transition: 'all 0.15s',
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(10,16,11,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>
            <img src={modal.src.replace('w=800', 'w=1200')} alt={modal.title} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ padding: '20px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>{modal.category}</p>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 300, color: '#fff', marginBottom: '4px' }}>{modal.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{modal.location}</p>
              </div>
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
    </div>
  )
}
