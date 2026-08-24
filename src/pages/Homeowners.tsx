import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const systems = [
  { num: '01', title: 'How Do They Look?', desc: 'We use commercial-grade materials for many years of non-obtrusive protection. Our inconspicuous structures allow the eye to look right through them, much like a screen on your window.' },
  { num: '02', title: 'Customized for Your Home', desc: 'All netting and net systems are customized and tailored to fit your home. We work one on one with you to create the best solution for your individual needs.' },
  { num: '03', title: 'Options Other Than a Full Structure', desc: 'For HOA restrictions or other needs, we can develop creative solutions for windows, a specific yard area, or a patio area.' },
]

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
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
            Residential Solutions
          </p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '680px' }}>
            Golf Ball Deterrent Netting Systems
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
            When buying a home on a beautiful green golf course, many homeowners do not realize that errant golf balls can lead to expensive property damage and pose a threat of personal injury.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            When you need protection, Nets Unlimited's custom residential golf ball deterrent systems are the answer. Our systems use commercial-grade steel and netting to provide safety and security without compromising your view or the aesthetics of your home.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', marginBottom: '64px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '12px' }}>Residential Solutions</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Protection designed around your home
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
          <img src="/images/golf-nets/homeowners/patio-infill.jpeg" alt="Net infill panels protecting patio windows and seating" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px' }}>What's Next?</p>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '40px' }}>
            From your questions to a custom plan
          </h2>
          {['Discuss — General budget information and your questions', 'Site Visit — A site specialist reviews your property with you', "Assess — We discuss the damage, location, and what you're hoping to achieve", 'Custom Plan — We generate a custom plan and provide an estimate'].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '0.68rem', fontWeight: 200, color: '#1E4D2B', minWidth: '20px', paddingTop: '2px' }}>0{i + 1}</span>
              <span style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,26,24,0.55)' }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection navigate={navigate} headline="What's Next?" subtext="Call us to schedule a visit or talk about your project." primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="gallery" />
    </div>
  )
}
