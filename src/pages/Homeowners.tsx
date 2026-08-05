import CTASection from '../components/CTASection'
import CountUp from '../components/CountUp'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const systems = [
  { num: '01', title: 'Perimeter Barrier Systems', desc: 'High-tensile netting suspended from structural posts along your property line, engineered to absorb ball impact without reflecting.' },
  { num: '02', title: 'Fence-Top Extensions', desc: 'Discreet angled extensions that mount directly to existing fencing — minimal footprint, maximum protection.' },
  { num: '03', title: 'Overhead Catch Systems', desc: 'Full roof-plane netting for covered patios, pool enclosures, and areas where lateral barriers are insufficient.' },
  { num: '04', title: 'Curved & Custom Shapes', desc: 'Architecturally integrated systems following the geometry of your landscape — pools, garden arcs, sloped terrains.' },
]

export default function Homeowners({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop&auto=format"
          alt="Residential property"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.72) 0%, rgba(10,16,11,0.2) 60%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
            Residential Solutions
          </p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '680px' }}>
            Your home, protected with precision
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <div style={{ paddingTop: '6px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B' }}>The Problem</p>
        </div>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            Living adjacent to a golf course means errant balls are a constant reality — cracked windows, damaged roofing, and compromised outdoor living. Our residential systems end that problem permanently.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            Each system is engineered to your specific site: setbacks, view corridors, HOA requirements, and aesthetic preferences all factor into the design. We handle permits, installation, and annual inspection.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(26,26,24,0.08)', borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[['300+', 'Residential installs'], ['20yr', 'UV-rated net lifespan'], ['100%', 'Custom sizing']].map(([n, l], i) => (
            <div key={n} style={{ padding: '44px 40px', borderLeft: i > 0 ? '1px solid rgba(26,26,24,0.08)' : 'none' }}>
              <CountUp value={n} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 200, letterSpacing: '-0.04em', color: '#1A1A18', marginBottom: '8px' }} />
              <p style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.38)' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', marginBottom: '64px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '12px' }}>System Types</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Four ways to protect your property
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', backgroundColor: 'rgba(26,26,24,0.08)' }}>
          {systems.map(s => (
            <div key={s.num} style={{ backgroundColor: '#F8F7F4', padding: '40px 32px' }}>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 200, color: 'rgba(26,26,24,0.15)', letterSpacing: '-0.03em', marginBottom: '20px' }}>{s.num}</p>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A18', marginBottom: '14px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', minHeight: '520px' }}>
          <img src="https://images.unsplash.com/photo-1611374243147-44a702c2d44c?w=800&h=640&fit=crop&auto=format" alt="Installation" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Our Process</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '40px' }}>
            From site visit to installed system in under two weeks
          </h2>
          {['Free on-site consultation and measurement', 'CAD drawing and material specification', 'HOA / permit submission if required', 'Professional installation, 1–3 days', 'Post-install inspection and 5-year warranty'].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '0.68rem', fontWeight: 200, color: '#1E4D2B', minWidth: '20px', paddingTop: '2px' }}>0{i + 1}</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection navigate={navigate} headline="Protect Your Home This Season" subtext="Schedule a free consultation and we'll design a system that fits your property and HOA requirements." primaryLabel="Book a Consultation" secondaryLabel="See Gallery" secondaryPage="gallery" />
    </div>
  )
}
