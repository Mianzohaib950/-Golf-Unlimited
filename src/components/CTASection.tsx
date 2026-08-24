import type { Page } from '../App'

interface CTASectionProps {
  navigate: (page: Page) => void
  headline?: string
  subtext?: string
  primaryLabel?: string
  primaryPage?: Page
  secondaryLabel?: string
  secondaryPage?: Page
}

export default function CTASection({
  navigate,
  headline = 'Ready to Protect Your Property?',
  subtext = "Get a free, no-obligation quote. We'll assess your site and recommend the right system — no pressure, no commitment.",
  primaryLabel = 'Get a Quote',
  primaryPage = 'contact',
  secondaryLabel = 'View Our Work',
  secondaryPage = 'gallery',
}: CTASectionProps) {
  return (
    <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
      {/* Background image */}
      <img
        src="/images/golf-nets/home/home-residential.jpg"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Light warm overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(240,239,233,0.94)' }} />
      {/* Subtle vignette for depth */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(220,218,210,0.5) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>
              Get Started
            </p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 200, color: '#1A1A18', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
              {headline}
            </h2>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', backgroundColor: 'rgba(26,26,24,0.15)', alignSelf: 'stretch' }} />

          {/* Right */}
          <div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.55)', marginBottom: '36px' }}>
              {subtext}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate(primaryPage)}
                style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff', transition: 'background-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F2A18')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E4D2B')}
              >
                {primaryLabel}
              </button>
              <button
                onClick={() => navigate(secondaryPage)}
                style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.65)', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,24,0.65)' }}
              >
                {secondaryLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
