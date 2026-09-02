import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const eyebrow: React.CSSProperties = {
  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: '#1E4D2B',
}

const heading: React.CSSProperties = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  fontWeight: 200,
  color: '#1A1A18',
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
}

const body: React.CSSProperties = {
  fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.6)',
}

export default function HOA({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="/images/golf-nets/hoa/community-netting.jpeg" alt="Golf protection netting integrated into a residential community" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>HOA</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Home Owners Associations
          </h1>
        </div>
      </section>

      {/* Why Nets Unlimited? */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div className="hoa-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <h2 style={{ ...heading }}>Why Nets Unlimited?</h2>
          <div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.4vw, 1.55rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
              We understand the importance of coordinating with the homeowner, the property management team, and the golf course. Our goal at Nets Unlimited is to provide protective netting without intruding on the experience of golf course living whether that is from the homeowner's point of view, the HOA requirements, or the needs of the golf course operator.
            </p>
            <p style={body}>
              It is a unique challenge to balance the community master plan identity with liability issues and ensuring that homeowners and guests enjoy the beauty of their surroundings. Nets Unlimited meets those challenges head-on, and we can help you navigate through them by providing you with various golf ball deterrent options to ensure your homeowners feel safe and secure while maintaining both a consistent aesthetic and the beautiful view that everyone values.
            </p>
          </div>
        </div>
      </section>

      {/* Create Beautiful Uniformity */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="hoa-split">
        <div style={{ position: 'relative', minHeight: '520px' }}>
          <img src="/images/golf-nets/gallery/gallery-08.jpg" alt="Residential golf netting within a golf-course community" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ ...heading, marginBottom: '28px' }}>Create Beautiful Uniformity</h2>
          <p style={body}>
            One of the most difficult aspects HOA's face in dealing with homeowners that want golf protection netting is maintaining both a beautiful and consistent aesthetic for the course and neighborhood while allowing them to protect their homes. Nets Unlimited, Inc. can work with you to update your current HOA guidelines, or if you do not have guidelines published yet, we can help you create a comprehensive set that ensures a beautiful uniformity with all of the deterrent nets that your members install. This standard will allow the homeowner to avoid the frustration of not knowing what to present to the board for approval, as well as allow the HOA board to quickly approve or decline golf structures with or without the need for a board meeting.
          </p>
        </div>
      </section>

      <CTASection
        navigate={navigate}
        centered
        subtext="Work with us today to find out just how easy it is for us to help you develop your HOA standards & guidelines to provide your homeowners with clear direction for their golf ball deterrent needs."
        primaryLabel="Contact Us"
        primaryPage="contact"
      />

      <style>{`
        @media (max-width: 900px) {
          .hoa-row { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hoa-split { grid-template-columns: 1fr !important; }
          .hoa-split > div[style*="minHeight"] { min-height: 320px !important; }
          .hoa-split > div:last-child { padding: 56px 28px !important; }
        }
      `}</style>
    </div>
  )
}
