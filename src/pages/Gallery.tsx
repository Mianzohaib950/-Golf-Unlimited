import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const images = [
  '/images/golf-nets/gallery/gallery-01.jpg',
  '/images/golf-nets/gallery/gallery-02.jpeg',
  '/images/golf-nets/gallery/gallery-03.jpg',
  '/images/golf-nets/gallery/gallery-04.jpg',
  '/images/golf-nets/gallery/gallery-05.jpg',
  '/images/golf-nets/gallery/gallery-06.jpg',
  '/images/golf-nets/gallery/gallery-07.jpg',
  '/images/golf-nets/gallery/gallery-08.jpg',
  '/images/golf-nets/gallery/gallery-09.jpg',
  '/images/golf-nets/homeowners/residential-net.jpg',
  '/images/golf-nets/driving-range/cart-path.jpg',
  '/images/golf-nets/other-nets/service-09.jpeg',
]

const PAGE_SIZE = 9

export default function Gallery({ navigate }: Props) {
  const [count, setCount] = useState(PAGE_SIZE)
  const [modal, setModal] = useState<string | null>(null)

  const visible = images.slice(0, count)

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '150px 40px 56px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1 }}>
          Gallery
        </h1>
      </section>

      {/* Masonry grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 64px' }}>
        <div className="gallery-masonry">
          {visible.map((src, i) => (
            <button
              key={i}
              onClick={() => setModal(src)}
              style={{ breakInside: 'avoid', marginBottom: '12px', cursor: 'zoom-in', overflow: 'hidden', position: 'relative', display: 'block', width: '100%' }}
            >
              <img
                src={src}
                alt="Golf Nets Unlimited gallery"
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
              />
            </button>
          ))}
        </div>

        {count < images.length && (
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '48px' }}>
            <button
              onClick={() => setCount(c => c + PAGE_SIZE)}
              style={{ padding: '13px 30px', border: '1px solid rgba(26,26,24,0.25)', color: '#1A1A18', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.color = '#F8F7F4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18' }}
            >
              Show More
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '80px 0', textAlign: 'center' }}>
        <button
          onClick={() => navigate('contact')}
          style={{ padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Call us to learn More
        </button>
        <button
          onClick={() => navigate('contact')}
          style={{ display: 'block', margin: '18px auto 0', fontSize: '0.8rem', color: 'rgba(26,26,24,0.5)', borderBottom: '1px solid rgba(26,26,24,0.25)', paddingBottom: '2px' }}
        >
          Find out more
        </button>
      </section>

      {/* Lightbox */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(10,16,11,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}
        >
          <button
            onClick={() => setModal(null)}
            aria-label="Close"
            style={{ position: 'absolute', top: '24px', right: '32px', fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}
          >
            ✕
          </button>
          <img
            src={modal}
            alt="Golf Nets Unlimited gallery"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '900px', width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
          />
        </div>
      )}
    </div>
  )
}
