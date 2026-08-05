import CTASection from '../components/CTASection'
import CountUp from '../components/CountUp'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const solutions = [
  { title: 'Perimeter Containment', desc: 'Full-height nets enclosing the range perimeter — engineered for commercial ball volumes, wind loads, and regulatory compliance.' },
  { title: 'Divider Netting', desc: 'Bay and lane separation systems that reduce conflict between shooters and maintain a safe practice environment.' },
  { title: 'Target & Flag Nets', desc: 'Intermediate target nets at 50, 100, and 150 yard markers — structural pole systems with tuned tension.' },
]

export default function DrivingRange({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&h=900&fit=crop&auto=format" alt="Driving range" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>Commercial Solutions</p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Commercial-grade containment for serious facilities
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[['50+', 'Range facilities served'], ['40ft', 'Max post height'], ['200k', 'Balls per day capacity'], ['10yr', 'Commercial warranty']].map(([n, l], i) => (
            <div key={n} style={{ padding: '44px 40px', borderLeft: i > 0 ? '1px solid rgba(26,26,24,0.08)' : 'none', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
              <CountUp value={n} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 200, letterSpacing: '-0.04em', color: '#1A1A18', marginBottom: '8px' }} />
              <p style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.38)' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Overview</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            Driving ranges operate at a scale that demands industrial-grade netting — high ball volumes, UV exposure, and wind loads require systems engineered far beyond residential standards.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            We design and install complete range containment systems, from perimeter barriers to internal dividers and target nets. Every installation includes structural engineering sign-off and a 10-year commercial warranty.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(26,26,24,0.08)' }}>
          {solutions.map((s, i) => (
            <div key={i} style={{ backgroundColor: '#F8F7F4', padding: '48px 36px' }}>
              <div style={{ width: '32px', height: '2px', backgroundColor: '#1E4D2B', marginBottom: '28px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A18', marginBottom: '14px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full bleed split */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Why Choose Us</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '40px' }}>
            Built to handle the demands of a commercial operation
          </h2>
          {[
            'Structural engineering included — no extra cost',
            'OSHA-compliant installation procedures',
            'Crane-rated anchor systems for tall structures',
            'Panel replacement program for high-wear zones',
            'Emergency repair response within 48 hours',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ color: '#1E4D2B', fontSize: '0.8rem', paddingTop: '3px', flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', minHeight: '480px' }}>
          <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=640&fit=crop&auto=format" alt="Range netting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <CTASection navigate={navigate} headline="Upgrade Your Range This Off-Season" subtext="We work around your operating schedule. Most commercial installations are completed in 3–5 days with zero range downtime." primaryLabel="Request a Proposal" secondaryLabel="View Completed Projects" secondaryPage="gallery" />
    </div>
  )
}
