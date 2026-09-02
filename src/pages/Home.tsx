import type { Page } from '../App'
import CTASection from '../components/CTASection'

interface Props { navigate: (p: Page) => void }

const IMG = {
  hero: '/images/golf-nets/home/home-residential.jpg',
  homeowners: '/images/golf-nets/homeowners/residential-net.jpg',
  managers: '/images/golf-nets/driving-range/driving-range.jpg',
  g1: '/images/golf-nets/gallery/gallery-01.jpg',
  g2: '/images/golf-nets/gallery/gallery-02.jpeg',
  g3: '/images/golf-nets/gallery/gallery-03.jpg',
  sport: '/images/golf-nets/other-nets/service-06.jpeg',
  aviary: '/images/golf-nets/other-nets/service-03.jpeg',
  decor: '/images/golf-nets/other-nets/service-07.jpeg',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontWeight: 200,
  color: '#1A1A18',
  lineHeight: 1.08,
  letterSpacing: '-0.02em',
}

export default function Home({ navigate }: Props) {
  return (
    <main style={{ backgroundColor: '#F8F7F4' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0E1710' }}>
          <img src={IMG.hero} alt="Residential golf ball deterrent netting beside a golf course" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,14,10,0.62)' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 40px', maxWidth: '900px', width: '100%' }}>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
            fontWeight: 200,
            color: '#ffffff',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            textShadow: '0 2px 40px rgba(0,0,0,0.4)',
          }}>
            Golf Ball Deterrent<br />Netting Systems
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', maxWidth: '600px', margin: '0 auto 40px' }}>
            Learn how we can help you protect your home and family from errant golf balls with our golf protection netting. We understand the issues facing both the homeowners and the Home Owner Associations (HOA).
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => navigate('contact')}
              style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 36px', backgroundColor: '#fff', color: '#1A1A18', transition: 'background-color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F8F7F4')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fff')}
            >
              Contact us
            </button>
            <button
              onClick={() => navigate('gallery')}
              style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)' }}
            >
              See our Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ── HOMEOWNERS / PROPERTY MANAGERS ── */}
      <section style={{ backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div className="home-audience" style={{ alignItems: 'start' }}>

            <button onClick={() => navigate('homeowners')} className="home-audience-card" style={{ width: '100%', textAlign: 'left', display: 'block', padding: '80px 56px 80px 0' }}>
              <div className="home-audience-image" style={{ width: '100%', overflow: 'hidden', marginBottom: '32px', height: '340px' }}>
                <img src={IMG.homeowners} alt="Residential golf ball deterrent netting" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '18px' }}>Homeowners</h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.6)', marginBottom: '24px' }}>
                Learn how we can help you protect your home and family from errant golf balls with our golf protection netting. We understand the issues facing both the homeowners and the Home Owner Associations (HOA).
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 24px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                View More Detail <span aria-hidden="true">→</span>
              </span>
            </button>

            <button onClick={() => navigate('driving-range')} className="home-audience-card" style={{ width: '100%', textAlign: 'left', display: 'block', padding: '80px 0 80px 56px', borderLeft: '1px solid rgba(26,26,24,0.1)' }}>
              <div className="home-audience-image" style={{ width: '100%', overflow: 'hidden', marginBottom: '32px', height: '340px' }}>
                <img src={IMG.managers} alt="Golf course protection netting" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '18px' }}>Property Managers</h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.6)', marginBottom: '24px' }}>
                We provide a wide array of options to meet the challenge of creating aesthetically pleasing solutions to protect against property damage and personal injury from stray golf balls. Call us for your golf net needs.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 24px', backgroundColor: '#1E4D2B', color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                View More Detail <span aria-hidden="true">→</span>
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* ── COMPANY STATEMENT ── */}
      <section style={{ backgroundColor: '#F8F7F4', padding: '110px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)', fontWeight: 300, color: '#1A1A18', lineHeight: 1.45, letterSpacing: '-0.01em', marginBottom: '32px' }}>
            Nets Unlimited Inc. is the industry leader in the fabrication and installation of golf ball deterrent netting systems. For homes and businesses, on or near the fairway, Nets Unlimited gives you back the enjoyment of living on a golf course by creating a non-invasive, yet necessary barrier, to the real perils posed by wayward golf balls.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.6)' }}>
            Our golf net systems are an attractive and professional solution to the errant golf ball that causes expensive property damage and creates a threat of personal injury.
          </p>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }} className="home-gallery-grid">
            {[
              { src: IMG.g1, alt: 'Golf Nets Unlimited project installation' },
              { src: IMG.g2, alt: 'Residential golf protection netting project' },
              { src: IMG.g3, alt: 'Golf-course netting installation' },
            ].map((img, i) => (
              <button key={i} onClick={() => navigate('gallery')} style={{ overflow: 'hidden', aspectRatio: '3/4', position: 'relative', backgroundColor: '#D8D6CE', display: 'block' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </button>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => navigate('gallery')}
              style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 30px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.65)', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,24,0.65)' }}
            >
              See our Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ── YOU MAY ALSO BE INTERESTED IN ── */}
      <section style={{ backgroundColor: '#fff', padding: '110px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '56px' }}>
            You may also be interested in
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', backgroundColor: '#E4E2DB' }} className="home-interest-grid">
            {[
              { title: 'Sport Containment Netting', desc: 'Learn how we can help you keep your balls in play rather than in the neighbors yard.', cta: 'Find out more', img: IMG.sport },
              { title: 'Aviaries & Pet Protection', desc: 'We provide a wide array of options to obtain the perfect environment, whether you are trying to keep an animal in, or out.', cta: 'Learn More', img: IMG.aviary },
              { title: 'Theming & Decor', desc: 'Nets Unlimited has a wide range of nets and decor for you to create your perfect backyard oasis.', cta: 'Decorate Now', img: IMG.decor },
            ].map(item => (
              <button key={item.title} onClick={() => navigate('other-nets')} style={{ backgroundColor: '#fff', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.25rem, 1.8vw, 1.4rem)', fontWeight: 400, lineHeight: 1.3, color: '#1A1A18', marginBottom: '14px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)', marginBottom: '20px', flex: 1 }}>{item.desc}</p>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D2B' }}>{item.cta}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        navigate={navigate}
        centered
        subtext="Call Nets Unlimited today to speak with our knowledgeable and experienced team about the right netting solution for you!"
        primaryLabel="Contact us"
        primaryPage="contact"
        secondaryLabel="See our Gallery"
        secondaryPage="gallery"
      />

      <style>{`
        .home-audience { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .home-audience { grid-template-columns: 1fr !important; }
          .home-audience-card { padding: 56px 0 !important; border-left: none !important; border-top: 1px solid rgba(26,26,24,0.1); }
          .home-audience-card:first-child { border-top: none; }
          .home-audience-image { height: auto !important; aspect-ratio: 16 / 10; }
          .home-gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .home-interest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
