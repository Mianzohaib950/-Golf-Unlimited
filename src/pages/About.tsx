import CTASection from '../components/CTASection'
import CountUp from '../components/CountUp'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const timeline = [
  { year: '2003', title: 'Founded in Florida', desc: 'Started as a two-person residential installation company serving golf communities in the Tampa Bay area.' },
  { year: '2007', title: 'First Commercial Contract', desc: 'Landed our first driving range project — a 12-acre perimeter installation in Sarasota. It changed our trajectory entirely.' },
  { year: '2011', title: 'Nets Unlimited Partnership', desc: 'Became an authorized dealer and installer of Nets Unlimited products — gaining access to the highest-quality materials on the market.' },
  { year: '2016', title: 'Southwest Expansion', desc: 'Opened our Arizona office to serve the rapidly growing golf community market in Phoenix, Scottsdale, and Tucson.' },
  { year: '2020', title: 'Specialty Division Launch', desc: 'Formally launched our specialty netting division — sport, aviary, agricultural, and architectural applications.' },
  { year: '2023', title: '20 Years, 800+ Projects', desc: 'Celebrated two decades in business with our 800th completed installation — a full-community HOA project in Palm Beach County.' },
]

export default function About({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ paddingTop: '140px', maxWidth: '1280px', margin: '0 auto', padding: '140px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'end' }}>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Twenty years of precision
          </h1>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>Est. 2003</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>
              Golf Nets Unlimited was founded on a single principle: netting done right, on the first visit. Twenty years and 800 projects later, that commitment defines everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 80px' }}>
        <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&h=700&fit=crop&auto=format" alt="Our team at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(248,247,244,0.6), transparent)' }} />
        </div>
      </section>

      {/* Story */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Our Story</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            We started in 2003 with a truck, a used cable gun, and a contract to protect three houses on a golf course in Clearwater. Every system we install today reflects what we learned on that first job: that precision matters more than speed, and that a net installed correctly lasts 20 years.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)', marginBottom: '20px' }}>
            Since then we have grown into a regional leader in golf ball containment and specialty netting — serving residential homeowners, HOA communities, driving ranges, and commercial facilities across Florida, Arizona, and the Southeast.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            Our partnership with Nets Unlimited gives us access to the most rigorously tested materials in the netting industry. Combined with our in-house design and engineering team, that means every system we install is both structurally sound and built to last.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(26,26,24,0.08)', borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[['800+', 'Projects completed'], ['20yr', 'In business'], ['1', 'Regional office'], ['5yr', 'Warranty standard']].map(([n, l], i) => (
            <div key={n} style={{ padding: '44px 40px', borderLeft: i > 0 ? '1px solid rgba(26,26,24,0.08)' : 'none' }}>
              <CountUp value={n} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 200, letterSpacing: '-0.04em', color: '#1A1A18', marginBottom: '8px' }} />
              <p style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.38)' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', marginBottom: '64px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '12px' }}>Timeline</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Two decades of milestones
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
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Authorized Dealer</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '28px' }}>
              The Nets Unlimited difference
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.55)', marginBottom: '20px' }}>
              As an authorized Nets Unlimited dealer, we install only materials that have been tested, certified, and guaranteed by the industry's leading netting manufacturer. Our customers benefit from product warranties backed by the manufacturer — not just the installer.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.55)' }}>
              Nets Unlimited supplies netting systems to major golf courses, sports facilities, and government infrastructure projects worldwide. That's the quality standard our customers receive.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=600&fit=crop&auto=format" alt="Nets Unlimited materials" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} headline="Work With a Team That Gets It Right" subtext="Over 20 years and 800 projects, we have refined a process that delivers on time, on spec, and on budget — every time." primaryLabel="Start a Conversation" primaryPage="contact" secondaryLabel="View Our Work" secondaryPage="gallery" />
    </div>
  )
}
