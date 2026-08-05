import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const nets = [
  {
    category: 'Sport Netting',
    title: 'Multi-Sport Containment',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop&auto=format',
    desc: 'Baseball batting cages, soccer backstops, tennis court barriers, and multi-sport court enclosures. All systems engineered for the specific ball type and impact frequency of each sport.',
    uses: ['Baseball & softball cages', 'Soccer goal backstops', 'Tennis court barriers', 'Pickleball enclosures'],
  },
  {
    category: 'Aviary & Agricultural',
    title: 'Bird & Wildlife Netting',
    img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=500&fit=crop&auto=format',
    desc: 'Enclosures for aviaries, orchards, vineyards, and aquaculture ponds. UV-stabilized polyethylene with mesh sizes tuned to the target species and application.',
    uses: ['Aviary enclosures', 'Orchard & vineyard bird protection', 'Aquaculture pond covers', 'Pest deterrent systems'],
  },
  {
    category: 'Pet & Animal',
    title: 'Enclosure Systems',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    desc: 'Cat containment, dog run covers, and livestock management netting. Corrosion-resistant hardware throughout — built for daily use in outdoor environments.',
    uses: ['Cat containment systems', 'Dog run covers', 'Livestock management', 'Backyard enclosures'],
  },
  {
    category: 'Architectural',
    title: 'Safety & Fall Arrest',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format',
    desc: 'Staircase guardrail infill, balcony safety nets, bridge walkway protection, and construction debris netting. Designed to meet relevant building codes and fall-protection standards.',
    uses: ['Staircase infill netting', 'Balcony child safety', 'Bridge & walkway protection', 'Construction safety'],
  },
  {
    category: 'Decorative',
    title: 'Landscape & Theming',
    img: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=500&fit=crop&auto=format',
    desc: 'Climbing plant support structures, outdoor shade canopies, themed entertainment environments, and garden trellis systems. Where function and aesthetics are equal priorities.',
    uses: ['Climbing plant supports', 'Shade canopy systems', 'Themed entertainment', 'Garden trellis systems'],
  },
]

export default function OtherNets({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '440px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop&auto=format" alt="Specialty netting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>Specialty Netting</p>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            Beyond golf — netting for every application
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', paddingTop: '6px' }}>Specialty Work</p>
        <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.6, color: '#1A1A18', letterSpacing: '-0.01em' }}>
          Our team has designed and installed netting systems across sports, agriculture, architecture, and themed entertainment. If it needs to be contained, supported, or protected — we have the expertise to design a system for it.
        </p>
      </section>

      {/* Net types */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(26,26,24,0.08)' }}>
          {nets.map((net, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', backgroundColor: '#F8F7F4' }}>
              {i % 2 === 0 ? (
                <>
                  <div style={{ position: 'relative', minHeight: '360px' }}>
                    <img src={net.img} alt={net.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>{net.category}</p>
                    <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px' }}>{net.title}</h2>
                    <p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)', marginBottom: '24px' }}>{net.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {net.uses.map(u => (
                        <span key={u} style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.06em', padding: '5px 12px', border: '1px solid rgba(26,26,24,0.15)', color: 'rgba(26,26,24,0.5)', textTransform: 'uppercase' }}>{u}</span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>{net.category}</p>
                    <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px' }}>{net.title}</h2>
                    <p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)', marginBottom: '24px' }}>{net.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {net.uses.map(u => (
                        <span key={u} style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.06em', padding: '5px 12px', border: '1px solid rgba(26,26,24,0.15)', color: 'rgba(26,26,24,0.5)', textTransform: 'uppercase' }}>{u}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ position: 'relative', minHeight: '360px' }}>
                    <img src={net.img} alt={net.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection navigate={navigate} headline="Have a Unique Application in Mind?" subtext="If you can describe the problem, we can engineer a net system to solve it. We've handled everything from zoo enclosures to film set rigging." primaryLabel="Describe Your Project" primaryPage="contact" secondaryLabel="See Our Work" secondaryPage="gallery" />
    </div>
  )
}
