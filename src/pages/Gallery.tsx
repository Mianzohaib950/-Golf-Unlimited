import { useEffect, useState } from 'react'
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
const imageNumber = (index: number) => `IMG-${String(index + 1).padStart(3, '0')}`

export default function Gallery({ navigate }: Props) {
  const [count, setCount] = useState(PAGE_SIZE)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const visible = images.slice(0, count)
  const showPrevious = () => setActiveIndex(index => index === null ? null : (index - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex(index => index === null ? null : (index + 1) % images.length)

  useEffect(() => {
    if (activeIndex === null) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '150px 40px 56px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1 }}>Gallery</h1>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 64px' }}>
        <div className="gallery-masonry">
          {visible.map((src, index) => (
            <button key={src} onClick={() => setActiveIndex(index)} aria-label={`Open ${imageNumber(index)}`} style={{ cursor: 'zoom-in', overflow: 'hidden', position: 'relative', display: 'block', width: '100%' }}>
              <img src={src} alt={`Golf Nets Unlimited gallery ${imageNumber(index)}`} style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }} onMouseEnter={event => (event.currentTarget.style.transform = 'scale(1.03)')} onMouseLeave={event => (event.currentTarget.style.transform = 'scale(1)')} />
              <span className="gallery-image-number">{imageNumber(index)}</span>
            </button>
          ))}
        </div>

        {count < images.length && (
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '48px' }}>
            <button onClick={() => setCount(current => current + PAGE_SIZE)} style={{ padding: '13px 30px', border: '1px solid rgba(26,26,24,0.25)', color: '#1A1A18', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background-color 0.2s, color 0.2s' }} onMouseEnter={event => { event.currentTarget.style.backgroundColor = '#1A1A18'; event.currentTarget.style.color = '#F8F7F4' }} onMouseLeave={event => { event.currentTarget.style.backgroundColor = 'transparent'; event.currentTarget.style.color = '#1A1A18' }}>Show More</button>
          </div>
        )}
      </section>

      <section style={{ backgroundColor: '#ECEAE3', padding: '80px 0', textAlign: 'center' }}>
        <button onClick={() => navigate('contact')} style={{ padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Call us to learn More</button>
      </section>

      {activeIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${imageNumber(activeIndex)} image viewer`} onClick={() => setActiveIndex(null)}>
          <button className="gallery-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">×</button>
          <button className="gallery-lightbox-arrow gallery-lightbox-arrow--left" onClick={event => { event.stopPropagation(); showPrevious() }} aria-label="Previous image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
          </button>
          <div className="gallery-lightbox-image-wrap" onClick={event => event.stopPropagation()}>
            <img src={images[activeIndex]} alt={`Golf Nets Unlimited gallery ${imageNumber(activeIndex)}`} />
            <span className="gallery-image-number">{imageNumber(activeIndex)}</span>
          </div>
          <button className="gallery-lightbox-arrow gallery-lightbox-arrow--right" onClick={event => { event.stopPropagation(); showNext() }} aria-label="Next image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
