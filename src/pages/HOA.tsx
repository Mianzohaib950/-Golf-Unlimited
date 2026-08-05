import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const steps = [
  { num: '01', title: 'HOA Document Review', desc: 'We review your CC&Rs and architectural guidelines before designing a single component — ensuring the system qualifies for board approval.' },
  { num: '02', title: 'Aesthetic Integration', desc: 'Net color, post finish, and structural profile are matched to existing community infrastructure and landscaping.' },
  { num: '03', title: 'Board Presentation Support', desc: 'We prepare visual renderings and specification sheets your board can present to homeowners at a community meeting.' },
  { num: '04', title: 'Phased Installation', desc: 'Large community projects are phased to minimize disruption — common areas remain functional throughout the build.' },
]

export default function HOA({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop&auto=format" alt="Community" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>HOA & Community</p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Community solutions that satisfy every stakeholder
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>The Challenge</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            HOA-governed communities require netting solutions that satisfy safety requirements, architectural review boards, and the aesthetic expectations of hundreds of homeowners simultaneously.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            We have extensive experience navigating the HOA approval process — from document review through board presentation to final sign-off. Our systems are designed to be invisible as infrastructure, felt only through the protection they provide.
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
          <img src="https://images.unsplash.com/photo-1592578629295-73a86d9df25d?w=800&h=640&fit=crop&auto=format" alt="Community golf" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Partnership Program</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '32px' }}>
            We become the netting vendor for your entire community
          </h2>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.55)', marginBottom: '32px' }}>
            Our HOA partnership program gives communities a dedicated point of contact, priority scheduling, preferred pricing for members, and annual maintenance visits — all under a single service agreement.
          </p>
          {['Single service agreement for all properties', 'Priority scheduling for member projects', 'Annual community-wide inspection included', 'Emergency repair SLA within 24 hours'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
              <span style={{ color: '#1E4D2B', fontSize: '0.8rem', paddingTop: '3px', flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection navigate={navigate} headline="Partner With Us for Your Community" subtext="We'll attend your next board meeting and walk your committee through every detail — renderings, specs, budget, and timeline." primaryLabel="Schedule a Presentation" secondaryLabel="View Projects" secondaryPage="gallery" />
    </div>
  )
}
