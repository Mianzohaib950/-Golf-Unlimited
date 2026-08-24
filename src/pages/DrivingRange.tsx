import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const solutions = [
  { title: 'Tee Box', desc: 'Golf ball deterrent systems can be adapted to be placed near the Tee Box, which makes teeing off less stressful for both golfers and nearby homeowners.' },
  { title: 'Hitting Nets', desc: 'The same nets used for deterrent are used for practice bays, which can be set up anywhere you have room.' },
  { title: 'Driving Range & Pathway Nets', desc: 'Protect pathways for golf carts and pedestrians walking between holes, and protect open spaces near clubhouses to mitigate liability risks on and off the course.' },
]

export default function DrivingRange({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="/images/golf-nets/driving-range/driving-range.jpg" alt="Golf driving range protection netting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>Commercial Solutions</p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Driving Range & Practice Protection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Why Nets Unlimited?</p>
        <div>
          <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
            Nets Unlimited, Inc. is a licensed, bonded, and insured contractor. We understand the importance of maintaining a beautiful course and driving range while protecting the golfers themselves.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            With over 15 years of experience, we build unobtrusive and effective protection that preserves course aesthetics and gives property managers and course owners peace of mind.
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
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>Driving Ranges</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '40px' }}>
            Custom netting, posts, and professional installation
          </h2>
          {[
            '100% knotless polyester netting',
            'UV and weather resistant netting',
            'Custom heights for each course',
            'Wood or steel poles selected for your needs',
            'On-site installation from posts to nets',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ color: '#1E4D2B', fontSize: '0.8rem', paddingTop: '3px', flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', minHeight: '480px' }}>
          <img src="/images/golf-nets/driving-range/cart-path.jpg" alt="Golf cart path protection netting on a steel structure" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <CTASection navigate={navigate} headline="Work With Nets Unlimited" subtext="See how we can help create the perfect range or protection systems for your driving range, practice areas, and course." primaryLabel="Learn More" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="gallery" />
    </div>
  )
}
