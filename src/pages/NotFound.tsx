import type { Page } from '../App'
import PageLink from '../components/PageLink'

interface Props { navigate: (p: Page) => void }

export default function NotFound({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>
      <section style={{ maxWidth: '980px', margin: '0 auto', padding: '150px 40px 96px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>404</p>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '24px' }}>
          Page not found
        </h1>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.68)', maxWidth: '560px', marginBottom: '36px' }}>
          The page you are looking for has moved or does not exist. Explore our golf ball deterrent netting solutions or get in touch for a free estimate.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <PageLink page="home" navigate={navigate} className="cta-button" style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff' }}>Back to home</PageLink>
          <PageLink page="contact" navigate={navigate} className="cta-button cta-button-secondary" style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(26,26,24,0.25)', color: 'rgba(26,26,24,0.75)' }}>Contact us</PageLink>
        </div>
      </section>
    </div>
  )
}
