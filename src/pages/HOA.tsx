import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const steps = [
  { num: '01', title: 'Review Current Guidelines', desc: 'We can work with you to update your current HOA guidelines for golf protection netting.' },
  { num: '02', title: 'Create New Guidelines', desc: 'If guidelines are not yet published, we can help create a comprehensive set for your community.' },
  { num: '03', title: 'Consistent Appearance', desc: 'Standards help ensure beautiful uniformity across the deterrent nets your members install.' },
  { num: '04', title: 'Clear Approval Direction', desc: 'Documentation gives homeowners clear requirements and helps the board approve or decline proposed structures.' },
]

export default function HOA({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="/images/golf-nets/hoa/community-netting.jpeg" alt="Golf protection netting integrated into a residential community" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>HOA & Community</p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Home Owners Associations
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Why Nets Unlimited?</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            We understand the importance of coordinating with the homeowner, the property management team, and the golf course while meeting HOA requirements.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            We balance community identity, liability, safety, consistent aesthetics, and beautiful views so homeowners and guests can enjoy golf course living safely and securely.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(26,26,24,0.08)' }}>
          {steps.map(s => (
            <div key={s.num} style={{ backgroundColor: '#F8F7F4', padding: '44px 32px' }}>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2rem', fontWeight: 200, color: 'rgba(26,26,24,0.12)', letterSpacing: '-0.03em', marginBottom: '20px' }}>{s.num}</p>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A18', marginBottom: '14px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', minHeight: '520px' }}>
          <img src="/images/golf-nets/gallery/gallery-08.jpg" alt="Residential golf netting within a golf-course community" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Create Beautiful Uniformity</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '32px' }}>
            HOA standards that protect homes and preserve the community
          </h2>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.55)', marginBottom: '32px' }}>
            One of the most difficult aspects HOAs face is maintaining a beautiful and consistent aesthetic while allowing homeowners to protect their homes. We help develop standards and guidelines that provide clear direction for golf ball deterrent needs.
          </p>
          {['Update existing HOA guidelines', 'Create comprehensive new guidelines', 'Maintain a consistent appearance', 'Clarify homeowner documentation and board approval'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
              <span style={{ color: '#1E4D2B', fontSize: '0.8rem', paddingTop: '3px', flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection navigate={navigate} headline="Create Beautiful Uniformity" subtext="Work with us to develop HOA standards and guidelines that provide homeowners with clear direction for their golf ball deterrent needs." primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="gallery" />
    </div>
  )
}
