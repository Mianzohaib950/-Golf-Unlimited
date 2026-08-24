import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const timeline = [
  { year: '01', title: 'Customer Golf-Ball Problems', desc: 'Customers living on golf courses had persistent problems with errant golf balls creating hazardous yard conditions or damaging their property.' },
  { year: '02', title: 'An Attractive Solution', desc: 'Nets Unlimited stepped up to provide an attractive yet non-intrusive solution to the problem.' },
  { year: '03', title: 'Golf Nets Unlimited', desc: 'The system was so highly sought after and unique that it led to the creation of the dedicated Golf Nets Unlimited division.' },
]

export default function About({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ paddingTop: '140px', maxWidth: '1280px', margin: '0 auto', padding: '140px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'end' }}>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Who is Golf Nets Unlimited?
          </h1>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>About Us</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>
              Golf Nets Unlimited is an operating division of Nets Unlimited, Inc. (AZ ROC #236070), a licensed, bonded, and insured contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 80px' }}>
        <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
          <img src="/images/golf-nets/home/home-residential.jpg" alt="Golf ball deterrent netting protecting a fairway home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(248,247,244,0.6), transparent)' }} />
        </div>
      </section>

      {/* Story */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Our Story</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            Nets Unlimited specializes in custom products made with rope, netting, cable, and rigging.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)', marginBottom: '20px' }}>
            Our products are used for animal containment in zoos; play elements in waterparks and themeparks; handrails in residential and commercial locations; nautical and tropical themeing for resorts, homeowners, and hotels; and climbing nets for playgrounds and the military.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            Many themeparks, waterparks, zoos, and other attractions visited each year are customers of Nets Unlimited Inc.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', marginBottom: '64px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '12px' }}>Our Story</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              How Golf Nets Unlimited began
            </h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
          {timeline.map(event => (
            <div key={event.year} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', padding: '32px 0', borderBottom: '1px solid rgba(26,26,24,0.08)', alignItems: 'start' }}>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.4rem', fontWeight: 200, color: 'rgba(26,26,24,0.25)', letterSpacing: '-0.02em' }}>{event.year}</p>
              <div>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A18', marginBottom: '8px' }}>{event.title}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.5)' }}>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nets Unlimited */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Philosophy</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '28px' }}>
              Quality craftsmanship and custom solutions
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.55)', marginBottom: '20px' }}>
              The goal for all our projects is to combine quality craftsmanship with custom solutions, whether the client is a local homeowner or a major themepark opening a new attraction.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.55)' }}>
              Architecture and products are constantly evolving, and we develop and evolve with them. Our favorite phone call starts with “I had this idea…”—so call us and share your ideas today.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <img src="/images/golf-nets/about/about-company.png" alt="Nets Unlimited company mark" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '48px' }} />
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} headline="Share Your Ideas Today" subtext="We look forward to working with you." primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="gallery" />
    </div>
  )
}
