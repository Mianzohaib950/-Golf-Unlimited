import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const eyebrow: React.CSSProperties = {
  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: '#1E4D2B',
}

const qHeading: React.CSSProperties = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
  fontWeight: 200,
  color: '#1A1A18',
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
}

const body: React.CSSProperties = {
  fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.6)',
}

export default function Homeowners({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/images/golf-nets/homeowners/residential-system.jpg"
          alt="Custom residential golf ball deterrent netting"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.72) 0%, rgba(10,16,11,0.2) 60%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>Homeowners</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '760px' }}>
            Golf Ball Deterrent Netting Systems
          </h1>
        </div>
      </section>

      {/* What is a golf ball deterrent netting system? */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div className="ho-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <h2 style={{ ...qHeading }}>What is a golf ball deterrent netting system?</h2>
          <div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.4vw, 1.55rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
              When buying a home on a beautiful green golf course, many homeowners do not realize that errant golf balls can lead to expensive property damage and pose a threat of personal injury.
            </p>
            <p style={body}>
              When you need protection, Nets Unlimited's custom residential golf ball deterrent systems are the answer. Our systems are made with commercial-grade steel and netting to provide safety and security without compromising your view or the aesthetics of your home.
            </p>
          </div>
        </div>
      </section>

      {/* How do they look? */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ho-split">
        <div style={{ position: 'relative', minHeight: '460px' }}>
          <img src="/images/golf-nets/homeowners/residential-net.jpg" alt="Inconspicuous residential golf netting structure" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#fff', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ ...qHeading, marginBottom: '28px' }}>How do they look?</h2>
          <p style={{ ...body, marginBottom: '18px' }}>
            Nets Unlimited only uses top commercial-grade materials. Once installed these materials will last for many years of non-obtrusive enjoyment and protection.
          </p>
          <p style={{ ...body, marginBottom: '18px' }}>
            We specialize in inconspicuous structures that do not draw the eye but allow the eye to look right through them much like a screen on your window.
          </p>
          <p style={body}>
            All of the netting and net systems by Nets Unlimited are customized and tailored to fit your home. We work one on one with you to create the best solution for your individual needs.
          </p>
        </div>
      </section>

      {/* Are there options other than a full structure? */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ho-split ho-split-rev">
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ ...qHeading, marginBottom: '28px' }}>Are there options other than a full structure?</h2>
          <p style={{ ...body, marginBottom: '18px' }}>
            Many homeowners call Nets Unlimited looking for other creative solutions to their golf ball problem, or possibly the HOA will not allow for a full structure.
          </p>
          <p style={{ ...body, marginBottom: '24px' }}>
            Whether you have just a couple of windows that need extra protection, or a specific yard or patio area, Nets Unlimited can help. We will review with you the various options so that you can find the best solution to protect you and your home.
          </p>
          <p style={{ fontSize: '0.78rem', fontStyle: 'italic', color: 'rgba(26,26,24,0.45)', lineHeight: 1.7 }}>
            (Photo right: infill panels attached to decorative archways to protect windows and seating area under covered patio)
          </p>
        </div>
        <div style={{ position: 'relative', minHeight: '460px' }}>
          <img src="/images/golf-nets/homeowners/patio-infill.jpeg" alt="Net infill panels protecting patio windows and seating" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* What's Next? */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div className="ho-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <h2 style={{ ...qHeading }}>What's Next?</h2>
          <div>
            <p style={{ ...body, marginBottom: '20px' }}>
              We are happy to discuss general budget information and answer any questions you may have over the phone. Then, a Nets Unlimited team member will schedule one of our site specialists to come out and review your property with you.
            </p>
            <p style={body}>
              During our on-site visit we will take a look at your location; discuss the nature of the damage you've seen, and ask questions about what you are hoping to achieve. We will then generate a custom plan and provide you with an estimate for Nets Unlimited to get you back to enjoying your yard.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        navigate={navigate}
        centered
        subtext="Call us to schedule a visit or talk about your project"
        primaryLabel="Find out more"
        primaryPage="contact"
      />

      <style>{`
        @media (max-width: 900px) {
          .ho-row { grid-template-columns: 1fr !important; gap: 28px !important; }
          .ho-split { grid-template-columns: 1fr !important; }
          .ho-split > div { padding: 56px 28px !important; }
          .ho-split > div[style*="minHeight"] { min-height: 320px !important; padding: 0 !important; }
          .ho-split-rev > div:first-child { order: 2; }
        }
      `}</style>
    </div>
  )
}
