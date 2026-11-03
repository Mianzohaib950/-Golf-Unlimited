import { useEffect, useState } from 'react'
import type { Page } from '../App'
import PageLink from '../components/PageLink'

interface Props { navigate: (p: Page) => void }

interface GalleryImage { thumb: string; full: string; alt: string }

// Grid shows small thumbnails; the lightbox loads the larger file.
const images: GalleryImage[] = [
  ['gallery-01', 'Golf ball deterrent netting installed behind a fairway home'],
  ['gallery-12-replacement', 'Residential golf protection netting along a backyard'],
  ['gallery-03', 'Golf course netting installation on steel poles'],
  ['gallery-04', 'Golf course protection netting near a tee box'],
  ['gallery-05', 'Low-visibility golf netting protecting a patio'],
  ['gallery-06', 'Golf netting structure beside a golf-course home'],
  ['gallery-07', 'Custom golf ball deterrent netting system'],
  ['gallery-08', 'Golf protection netting installed in a residential community'],
  ['gallery-09', 'Tall golf netting system on galvanized steel poles'],
  ['residential-net', 'Inconspicuous residential golf netting structure'],
  ['cart-path', 'Protected golf cart pathway with netting'],
  ['gallery-02-replacement', 'Completed golf netting project for a homeowner'],
].map(([name, alt]) => ({ thumb: `/images/optimized/${name}-570.jpg`, full: `/images/optimized/${name}-760.jpg`, alt }))

const padImageNumber = (number: number) => String(number).padStart(3, '0')
const otherNetThumb = (folder: string, number: number) => `/images/optimized/nets-unlimited/${folder}-${padImageNumber(number)}-640.webp`
const zooAlt = 'Zoo and animal enclosure netting by Nets Unlimited'
const handrailAlt = 'Rope and netting handrail safety infill by Nets Unlimited'
const otherNetImages: GalleryImage[] = [
  ...Array.from({ length: 50 }, (_, index) => {
    const localNumber = index + 1
    const sourceNumber = localNumber <= 33 ? localNumber : localNumber + 2
    return { thumb: otherNetThumb('zoos', localNumber), full: `/images/nets-unlimited/zoos/${padImageNumber(localNumber)}-zoo${sourceNumber}.webp`, alt: zooAlt }
  }),
  ...Array.from({ length: 33 }, (_, index) => {
    const number = index + 1
    return { thumb: otherNetThumb('handrails', number), full: `/images/nets-unlimited/handrails/${padImageNumber(number)}-rs=w_2560-(${number}).webp`, alt: handrailAlt }
  }),
  { thumb: otherNetThumb('handrails', 34), full: '/images/nets-unlimited/handrails/034-rs=w_2560,h_708.webp', alt: handrailAlt },
  { thumb: otherNetThumb('handrails', 35), full: '/images/nets-unlimited/handrails/035-rs=w_2560.webp', alt: handrailAlt },
  ...Array.from({ length: 42 }, (_, index) => {
    const number = index + 1
    return { thumb: otherNetThumb('play-elements', number), full: `/images/nets-unlimited/play-elements/${padImageNumber(number)}-play${number}.webp`, alt: 'Custom rope and net play element by Nets Unlimited' }
  }),
]

const imageNumber = (index: number) => `IMG-${String(index + 1).padStart(3, '0')}`

export default function Gallery({ navigate }: Props) {
  const [galleryType, setGalleryType] = useState<'golf' | 'other'>('golf')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const currentImages = galleryType === 'golf' ? images : otherNetImages
  const displayedImageNumber = (index: number) => imageNumber(index + (galleryType === 'other' ? images.length : 0))
  const selectGallery = (type: 'golf' | 'other') => {
    setGalleryType(type)
    setActiveIndex(null)
    document.getElementById('golf-nets-gallery')?.scrollIntoView({ behavior: 'smooth' })
  }
  const showPrevious = () => setActiveIndex(index => index === null ? null : (index - 1 + currentImages.length) % currentImages.length)
  const showNext = () => setActiveIndex(index => index === null ? null : (index + 1) % currentImages.length)

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
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '150px 40px 28px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1 }}>Gallery</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '44px' }}>
          <button
            type="button"
            aria-pressed={galleryType === 'golf'}
            onClick={() => selectGallery('golf')}
            style={{ padding: galleryType === 'golf' ? '14px 24px' : '13px 23px', backgroundColor: galleryType === 'golf' ? '#1E4D2B' : 'transparent', border: galleryType === 'golf' ? 'none' : '1px solid #1E4D2B', color: galleryType === 'golf' ? '#fff' : '#1E4D2B', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Golf Nets Unlimited Gallery
          </button>
          <button
            type="button"
            aria-pressed={galleryType === 'other'}
            onClick={() => selectGallery('other')}
            style={{ padding: galleryType === 'other' ? '14px 24px' : '13px 23px', backgroundColor: galleryType === 'other' ? '#1E4D2B' : 'transparent', border: galleryType === 'other' ? 'none' : '1px solid #1E4D2B', color: galleryType === 'other' ? '#fff' : '#1E4D2B', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Other Nets Gallery
          </button>
        </div>
      </section>

      <section id="golf-nets-gallery" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 64px' }}>
        <div className="gallery-masonry">
          {currentImages.map((image, index) => (
            <button type="button" key={image.thumb} onClick={() => setActiveIndex(index)} aria-label={`Open ${displayedImageNumber(index)}: ${image.alt}`} style={{ cursor: 'zoom-in', overflow: 'hidden', position: 'relative', display: 'block', width: '100%', aspectRatio: '4 / 3' }}>
              <img src={image.thumb} alt={image.alt} width={640} height={480} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : undefined} decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} onMouseEnter={event => (event.currentTarget.style.transform = 'scale(1.03)')} onMouseLeave={event => (event.currentTarget.style.transform = 'scale(1)')} />
              <span className="gallery-image-number">{displayedImageNumber(index)}</span>
            </button>
          ))}
        </div>

      </section>

      <section style={{ backgroundColor: '#ECEAE3', padding: '80px 0', textAlign: 'center' }}>
        <PageLink page="contact" navigate={navigate} style={{ display: 'inline-block', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Call us to learn More</PageLink>
      </section>

      {activeIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${displayedImageNumber(activeIndex)} image viewer`} onClick={() => setActiveIndex(null)}>
          <button type="button" autoFocus className="gallery-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">×</button>
          <button className="gallery-lightbox-arrow gallery-lightbox-arrow--left" onClick={event => { event.stopPropagation(); showPrevious() }} aria-label="Previous image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
          </button>
          <div className="gallery-lightbox-image-wrap" onClick={event => event.stopPropagation()}>
            <img src={currentImages[activeIndex].full} alt={currentImages[activeIndex].alt} />
            <span className="gallery-image-number">{displayedImageNumber(activeIndex)}</span>
          </div>
          <button className="gallery-lightbox-arrow gallery-lightbox-arrow--right" onClick={event => { event.stopPropagation(); showNext() }} aria-label="Next image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
