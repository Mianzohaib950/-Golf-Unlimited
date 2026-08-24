import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const nets = [
  { category: "Sport Netting & Children's Nets", title: 'Batting Cages', img: '/images/golf-nets/other-nets/service-09.jpeg', desc: 'Whether you need a single cage for your home or multiple cages for an entertainment center we can help you build what you need, or replace existing damaged nets.' },
  { category: "Sport Netting & Children's Nets", title: "Obstacle Courses & Kid's Climbs", img: '/images/golf-nets/other-nets/service-01.jpeg', desc: "Nets Unlimited, Inc. can also create and install the netting for any of your kid's climbs and obstacle course needs, either at your home or business." },
  { category: "Sport Netting & Children's Nets", title: 'Sport Court Containment', img: '/images/golf-nets/other-nets/service-06.jpeg', desc: "Do you have a sports court that needs barriers so the balls stay in the court? We can customize containment netting to keep those balls in play and out of the neighbor's yard." },
  { category: 'Aviaries, Pet Protection, & Shade', title: 'Aviaries', img: '/images/golf-nets/other-nets/service-03.jpeg', desc: 'Do you have a special bird that deserves more than an ordinary cage? We can help.' },
  { category: 'Aviaries, Pet Protection, & Shade', title: 'Pet Netting Protection', img: '/images/golf-nets/other-nets/service-08.jpeg', desc: 'Do you have an animal that you need to protect from predators like coyotes or hawks, or do you simply need to keep your pet in your yard? We can do that too.' },
  { category: 'Aviaries, Pet Protection, & Shade', title: 'Shade Structures', img: '/images/golf-nets/other-nets/service-02.jpeg', desc: 'Nets Unlimited Inc. can provide shade structures for outdoor patios, pools, seating areas, pathways, and more.' },
  { category: 'Themeing, Thatch, & Decor', title: 'Handrails', img: '/images/golf-nets/other-nets/service-04.jpeg', desc: 'We can add decorative and functional handrails anywhere that you may need them. Nets Unlimited Inc. has installed handrail nets around patios, raised decks, walkways, boardwalks, and more.' },
  { category: 'Themeing, Thatch, & Decor', title: 'Bridges & Tunnels', img: '/images/golf-nets/other-nets/service-05.jpeg', desc: 'Nets Unlimited Inc. has created hundreds of bridges and tunnels over the years, we can install them for decor, or truly functional bridges hundreds of feet in the air.' },
  { category: 'Themeing, Thatch, & Decor', title: 'Thatch Umbrellas & Cabanas', img: '/images/golf-nets/other-nets/service-07.jpeg', desc: 'Do you need a shade umbrella or cabana, but want something different than everyone else? Let us help you build a perfect patio oasis with natural or artificial thatch.' },
]

export default function OtherNets({ navigate }: Props) {
  return <div style={{ backgroundColor: '#F8F7F4' }}>
    <section style={{ position: 'relative', height: '60vh', minHeight: '440px', display: 'flex', alignItems: 'flex-end' }}>
      <img src="/images/golf-nets/other-nets/service-01.jpeg" alt="Children playing on a custom rope-and-net climbing structure" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75), rgba(10,16,11,0.2) 55%, transparent)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}><p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>Other Nets</p><h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em' }}>We don't just do golf nets</h1></div>
    </section>
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}><p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B' }}>Specialty Work</p><div><p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.6, color: '#1A1A18', marginBottom: '24px' }}>Sport netting, children's nets, aviaries, pet protection, shade structures, themeing, thatch, and decor.</p><a href="https://netsunlimited.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: '16px', padding: '16px 22px', border: '1px solid rgba(26,26,24,0.5)', color: '#1A1A18', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explore Nets Unlimited Website <span>→</span></a></div></section>
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(26,26,24,0.08)' }}>{nets.map((net, i) => <div key={net.title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#F8F7F4' }}>{i % 2 === 0 && <NetImage net={net} />}<div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>{net.category}</p><h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 200, color: '#1A1A18', marginBottom: '20px' }}>{net.title}</h2><p style={{ fontSize: '0.8125rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)' }}>{net.desc}</p></div>{i % 2 !== 0 && <NetImage net={net} />}</div>)}</div></section>
    <CTASection navigate={navigate} headline="Call Us!" subtext="We would be happy to tell you more about any of the products on this page and to discuss any of your project needs with you. Call us any time!" primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="gallery" />
  </div>
}

function NetImage({ net }: { net: typeof nets[number] }) {
  return <div style={{ position: 'relative', minHeight: '360px' }}><img src={net.img} alt={net.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></div>
}
