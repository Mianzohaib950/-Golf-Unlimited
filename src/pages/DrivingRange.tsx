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

const premium = [
  { label: 'TEE BOX', rest: 'Golf ball deterrent systems can be adapted to be placed near the Tee Box which makes teeing off less stressful for both golfers and the nearby homeowners.' },
  { label: 'HITTING NETS', rest: 'The same nets used for deterrent are used for practice bays which can be set up anywhere you have room.' },
  { label: 'DRIVING RANGE & PATHWAY NETS', rest: 'Protect pathways for golf carts and pedestrians walking between holes, and protect open spaces near clubhouses to mitigate liability risks on (and off) the course.' },
]

export default function DrivingRange({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="/images/golf-nets/driving-range/driving-range.jpg" alt="Golf driving range protection netting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>Driving Range &amp; Practice</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Why Nets Unlimited?
          </h1>
        </div>
      </section>

      {/* Why Nets Unlimited */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div className="dr-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <div style={{ position: 'relative', minHeight: '360px' }}>
            <img src="/images/golf-nets/driving-range/cart-path.jpg" alt="Golf Cart Path protection netting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.3vw, 1.5rem)', fontWeight: 300, lineHeight: 1.6, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '24px' }}>
              Nets Unlimited, Inc. is a licensed, bonded, and insured contractor. We understand the importance of maintaining a beautiful course and driving range, while also protecting the golfers themselves.
            </p>
            <p style={{ ...body, marginBottom: '20px' }}>
              We will work with you to build protection solutions that are unobtrusive and effective, while making sure that these barriers do not take away from the aesthetic of the course. We have over 15 years of experience ensuring that any areas that can see potentially detrimental golf balls like driving paths are protected thereby offering Property Managers and Course Owners peace of mind that golfers and other course patrons, staff, and guests are safe. Nets Unlimited offers solutions for managed greens, public courses, neighborhoods, and individual homeowners. Let us help you with your netting solutions today.
            </p>
            <p style={{ fontSize: '0.78rem', fontStyle: 'italic', color: 'rgba(26,26,24,0.45)', lineHeight: 1.7 }}>
              Golf Cart Path protection netting, black polyester 7/8" netting on black steel structure
            </p>
          </div>
        </div>
      </section>

      {/* Driving Ranges */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '96px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Driving Ranges</p>
          <h2 style={{ ...heading, marginBottom: '28px' }}>Driving Ranges</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.65)' }}>
            Our netting is made out of 100% knotless polyester netting which makes it the best UV and weather resistant netting available. We build each driving range net custom to fit your course so that the height and type of pole whether it be wood or steel can be custom fit for exactly what you need. Unlike many other net providers, Nets Unlimited, Inc. will come on-site and install everything from the posts to the nets, ensuring a 100% professional look with no errors.
          </p>
        </div>
      </section>

      {/* Provide Premium Experiences */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <h2 style={{ ...heading, marginBottom: '16px' }}>Provide Premium Experiences</h2>
        <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', fontWeight: 300, color: 'rgba(26,26,24,0.7)', lineHeight: 1.5, letterSpacing: '-0.01em', marginBottom: '48px', maxWidth: '720px' }}>
          Keep golfers feeling like their swing is the only thing they have to worry about!
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(26,26,24,0.1)' }} className="dr-cards">
          {premium.map(item => (
            <div key={item.label} style={{ backgroundColor: '#F8F7F4', padding: '44px 32px' }}>
              <div style={{ width: '32px', height: '2px', backgroundColor: '#1E4D2B', marginBottom: '24px' }} />
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.6)' }}>
                <strong style={{ color: '#1A1A18', fontWeight: 700 }}>{item.label}</strong>-{item.rest}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        navigate={navigate}
        centered
        subtext="Work with Nets Unlimited to see how we can help you create the perfect range or protection systems for your driving rage, practice areas and on the course."
        primaryLabel="Learn More"
        primaryPage="contact"
        secondaryLabel="Find out more"
        secondaryPage="gallery"
      />

      <style>{`
        @media (max-width: 900px) {
          .dr-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .dr-row > div[style*="minHeight"] { min-height: 280px !important; }
          .dr-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
