import type { Page } from '../App'
import CTASection from '../components/CTASection'

interface Props { navigate: (p: Page) => void }

const IMG = {
  hero: '/images/golf-nets/home/home-residential.jpg',
  golfBall: '/images/golf-nets/homeowners/residential-system.jpg',
  patio: '/images/golf-nets/homeowners/residential-net.jpg',
  range: '/images/golf-nets/driving-range/driving-range.jpg',
  g1: '/images/golf-nets/gallery/gallery-01.jpg',
  g2: '/images/golf-nets/gallery/gallery-02.jpeg',
  g3: '/images/golf-nets/gallery/gallery-03.jpg',
  g4: '/images/golf-nets/gallery/gallery-04.jpg',
}

const S = {
  label: {
    fontSize: '0.68rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#1E4D2B',
  },
  h2: {
    fontFamily: 'Fraunces, Georgia, serif',
    fontWeight: 300,
    color: '#1A1A18',
    lineHeight: 1.08,
    letterSpacing: '-0.02em',
  },
}

export default function Home({ navigate }: Props) {
  return (
    <main style={{ backgroundColor: '#F8F7F4' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '680px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0E1710' }}>
          <img src={IMG.hero} alt="Residential golf ball deterrent netting beside a golf course" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
        </div>

        {/* Dark overlay for text legibility */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,14,10,0.62)' }} />

        {/* Content — centered */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 40px', maxWidth: '900px', width: '100%' }}>
          <p style={{ ...S.label, color: 'rgba(255,255,255,0.6)', marginBottom: '32px', letterSpacing: '0.22em' }}>
            Golf Ball Protection
          </p>
          <h1 style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 200,
            color: '#ffffff',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '36px',
            textShadow: '0 2px 40px rgba(0,0,0,0.4)',
          }}>
            Protect Your<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', fontWeight: 200 }}>Home & Family.</em>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 40px' }}>
            Learn how we can help you protect your home and family from errant golf balls with our golf protection netting. We understand the issues facing both homeowners and Home Owner Associations.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => navigate('contact')}
              style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 36px', backgroundColor: '#fff', color: '#1A1A18', transition: 'background-color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F8F7F4')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fff')}
            >
              Get a Quote
            </button>
            <button
              onClick={() => navigate('gallery')}
              style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)' }}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F8F7F4', padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <p style={S.label}>Golf Nets Unlimited</p>
              <div style={{ marginTop: '20px', width: '32px', height: '1px', backgroundColor: '#1E4D2B' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, color: '#1A1A18', lineHeight: 1.45, letterSpacing: '-0.01em', marginBottom: '24px' }}>
                Nets Unlimited Inc. is the industry leader in the fabrication and installation of golf ball deterrent netting systems for homes and businesses on or near the fairway.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.55)', maxWidth: '540px' }}>
                Our systems create a non-invasive, yet necessary barrier to the real perils posed by wayward golf balls. They are an attractive and professional solution to expensive property damage and the threat of personal injury.
              </p>
              <button
                onClick={() => navigate('about')}
                style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', fontWeight: 500, color: '#1A1A18', borderBottom: '1px solid rgba(26,26,24,0.3)', paddingBottom: '2px', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1E4D2B'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#1E4D2B' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.3)' }}
              >
                Our Story
                <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
            {/* Image — constrained to text height */}
            <div style={{ overflow: 'hidden', backgroundColor: '#E8E7E1', margin: '0 -40px 0 -40px', position: 'relative' }} className="section-img-left">
              <img src={IMG.golfBall} alt="Residential golf ball deterrent netting system" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', position: 'absolute', inset: 0 }} />
            </div>

            {/* Text */}
            <div style={{ padding: '72px 0 72px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={S.label}>Our Solution</p>
              <h2 style={{ ...S.h2, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginTop: '20px', marginBottom: '24px' }}>
                Custom Designed Golf Ball Deterrent Systems
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.6)', marginBottom: '32px' }}>
                Nets Unlimited gives you back the enjoyment of living on a golf course by creating a non-invasive barrier to wayward golf balls.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                {[
                  'Fabrication and installation by Nets Unlimited Inc.',
                  'Solutions for homes and businesses',
                  'Designed for properties on or near the fairway',
                  'Protection from expensive property damage',
                  'Protection from the threat of personal injury',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.8125rem', color: 'rgba(26,26,24,0.7)', lineHeight: 1.6 }}>
                    <span style={{ marginTop: '7px', flexShrink: 0, width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#1E4D2B' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('contact')}
                style={{ alignSelf: 'flex-start', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '13px 28px', backgroundColor: '#1E4D2B', color: '#F8F7F4', transition: 'background-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F2A18')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E4D2B')}
              >
                Schedule a Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F8F7F4', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div>
              <p style={S.label}>Solutions</p>
              <h2 style={{ ...S.h2, fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: '12px' }}>
                Protection for Homeowners and Property Managers
              </h2>
            </div>
            <button
              onClick={() => navigate('gallery')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', fontWeight: 500, color: 'rgba(26,26,24,0.4)', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#1E4D2B')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,24,0.4)')}
            >
              View All Projects
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Cards — tall portrait format with image overlay */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#C4C3BC' }}>
            {[
              {
                page: 'homeowners' as Page,
                tag: 'Homeowners',
                title: 'Homeowners',
                desc: 'A wide array of aesthetically pleasing golf net solutions that protect against property damage and personal injury from stray golf balls.',
                img: IMG.patio,
              },
              {
                page: 'driving-range' as Page,
                tag: 'Driving Range & Practice',
                title: 'Property Managers',
                desc: 'Contact Golf Nets Unlimited for budgetary information and to schedule an on-site appointment for a detailed custom estimate.',
                img: IMG.range,
              },
            ].map(card => (
              <div
                key={card.page}
                onClick={() => navigate(card.page)}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#E8E7E1', aspectRatio: '4/5' }}
                className="solution-card"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                  className="solution-img"
                />
                {/* Dark gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.85) 0%, rgba(10,16,11,0.2) 50%, transparent 80%)' }} />
                {/* Text */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px' }}>
                  <p style={{ ...S.label, color: '#7BC47F', marginBottom: '10px' }}>{card.tag}</p>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '12px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>{card.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                    Explore
                    <svg style={{ width: '12px', height: '12px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary links row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#C4C3BC', marginTop: '2px' }}>
            {[
              { page: 'hoa' as Page, label: 'HOA & Communities', desc: 'Community-scale netting with HOA compliance support' },
              { page: 'other-nets' as Page, label: 'Other Nets', desc: 'Sport containment, aviaries, pet enclosures & more' },
            ].map(item => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                style={{ backgroundColor: '#fff', padding: '28px 36px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', transition: 'background-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F8F7F4')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fff')}
              >
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A18', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(26,26,24,0.45)' }}>{item.desc}</div>
                </div>
                <svg style={{ width: '16px', height: '16px', color: 'rgba(26,26,24,0.25)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

          {/* Centered header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ ...S.label, color: '#1E4D2B', marginBottom: '16px' }}>Our Work</p>
            <h2 style={{ ...S.h2, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A18', marginBottom: '24px' }}>
              Projects That Speak for Themselves
            </h2>
            <button
              onClick={() => navigate('gallery')}
              style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '11px 28px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.6)', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,24,0.6)' }}
            >
              View Full Gallery
            </button>
          </div>

          {/* 3-column equal grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
            {[
              { src: IMG.g1, alt: 'Golf Nets Unlimited project installation', aspect: '3/4' },
              { src: IMG.g2, alt: 'Residential golf protection netting project', aspect: '3/4' },
              { src: IMG.g3, alt: 'Golf-course netting installation', aspect: '3/4' },
            ].map((img, i) => (
              <div
                key={i}
                onClick={() => navigate('gallery')}
                style={{ overflow: 'hidden', cursor: 'pointer', aspectRatio: img.aspect, position: 'relative', backgroundColor: '#D8D6CE' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; (e.currentTarget as HTMLImageElement).style.opacity = '0.85' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTY NETTING ────────────────────────────────── */}
      <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '100px' }}>
              <p style={S.label}>Beyond Golf</p>
              <h2 style={{ ...S.h2, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginTop: '20px', marginBottom: '20px' }}>
                Specialty Netting for Every Need
              </h2>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.55)', marginBottom: '32px' }}>
                Our expertise extends beyond golf. We design and install custom netting for sports facilities, aviaries, pet enclosures, architectural features, and more.
              </p>
              <button
                onClick={() => navigate('other-nets')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', fontWeight: 500, color: '#1A1A18', borderBottom: '1px solid rgba(26,26,24,0.3)', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1E4D2B'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#1E4D2B' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.3)' }}
              >
                Explore All Net Types
                <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* List-style specialty items */}
            <div>
              {[
                { num: '01', label: 'Sport Containment Netting', desc: "Keep balls in play rather than in the neighbor's yard." },
                { num: '02', label: 'Aviaries & Pet Protection', desc: 'Options to obtain the perfect environment, whether you are trying to keep an animal in or out.' },
                { num: '03', label: 'Theming & Decor', desc: 'A wide range of nets and decor to create your perfect backyard oasis.' },
              ].map((item, i) => (
                <div
                  key={item.num}
                  onClick={() => navigate('other-nets')}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                    padding: '24px 0',
                    borderBottom: '1px solid #F0EFE9',
                    cursor: 'pointer',
                    transition: 'padding-left 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.paddingLeft = '8px')}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.paddingLeft = '0')}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#1E4D2B', letterSpacing: '0.1em', marginTop: '4px', flexShrink: 0 }}>{item.num}</span>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A18', marginBottom: '5px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'rgba(26,26,24,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} headline="Contact Us" subtext="Call Nets Unlimited today to speak with our knowledgeable and experienced team about the right netting solution for you!" primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="See Our Gallery" secondaryPage="gallery" />

      <style>{`
        @media (max-width: 1024px) {
          .grid-hero { grid-template-columns: 1fr !important; }
          .section-img-left { margin: 0 !important; aspect-ratio: 4/3 !important; }
        }
        @media (max-width: 768px) {
          .solution-card { aspect-ratio: 3/4 !important; }
        }
        .solution-card:hover .solution-img { transform: scale(1.05) !important; }
      `}</style>
    </main>
  )
}
