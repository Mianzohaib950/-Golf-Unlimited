import type { Page } from '../App'

interface CTASectionProps {
  navigate: (page: Page) => void
  headline?: string
  subtext?: string
  primaryLabel: string
  primaryPage: Page
  secondaryLabel?: string
  secondaryPage?: Page
  centered?: boolean
}

export default function CTASection({
  navigate,
  headline,
  subtext,
  primaryLabel,
  primaryPage,
  secondaryLabel,
  secondaryPage = 'gallery',
  centered = false,
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
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(240,239,233,0.94)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(220,218,210,0.5) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        {centered ? (
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            {headline && <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1A1A18', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: subtext ? '24px' : '36px' }}>{headline}</h2>}
            {subtext && <p style={{ fontFamily: headline ? 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif' : 'Playfair Display, Georgia, "Times New Roman", serif', fontSize: headline ? '0.95rem' : 'clamp(1.25rem, 2.6vw, 1.9rem)', lineHeight: headline ? 1.75 : 1.45, color: headline ? 'rgba(26,26,24,0.6)' : '#1A1A18', marginBottom: '36px' }}>{subtext}</p>}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => navigate(primaryPage)} style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff' }}>{primaryLabel}</button>
              {secondaryLabel && <button onClick={() => navigate(secondaryPage)} style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.65)' }}>{secondaryLabel}</button>}
            </div>
          </div>
        ) : (
        <div className="r-cta-grid" style={{ display: 'grid', gridTemplateColumns: headline ? '1fr 1px 1fr' : '1fr', gap: '64px', alignItems: 'center' }}>

          {headline && (
            <>
              <div>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 200, color: '#1A1A18', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                  {headline}
                </h2>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(26,26,24,0.15)', alignSelf: 'stretch' }} />
            </>
          )}

          <div style={{ maxWidth: headline ? 'none' : '640px' }}>
            {subtext && (
              <p style={{
                fontFamily: headline ? 'Inter, system-ui, sans-serif' : 'Playfair Display, Georgia, serif',
                fontSize: headline ? '0.9rem' : 'clamp(1.25rem, 2.6vw, 1.9rem)',
                fontWeight: headline ? 400 : 300,
                lineHeight: headline ? 1.75 : 1.4,
                color: headline ? 'rgba(26,26,24,0.55)' : '#1A1A18',
                letterSpacing: headline ? '0' : '-0.015em',
                marginBottom: '36px',
              }}>
                {subtext}
              </p>
            )}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate(primaryPage)}
                style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff', transition: 'background-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F2A18')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E4D2B')}
              >
                {primaryLabel}
              </button>
              {secondaryLabel && (
                <button
                  onClick={() => navigate(secondaryPage)}
                  style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.65)', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A1A18'; (e.currentTarget as HTMLButtonElement).style.color = '#1A1A18' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,24,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,24,0.65)' }}
                >
                  {secondaryLabel}
                </button>
              )}
            </div>
          </div>
        </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .r-cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .r-cta-grid > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </section>
  )
}
