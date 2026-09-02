import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const body: React.CSSProperties = {
  fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(26,26,24,0.62)',
}

export default function About({ navigate: _navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '150px 40px 72px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>About Us</p>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1.02, maxWidth: '900px' }}>
          Who is Golf Nets Unlimited?
        </h1>
      </section>

      {/* Hero image */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 88px' }}>
        <div style={{ position: 'relative', height: 'clamp(280px, 45vw, 540px)', overflow: 'hidden' }}>
          <img src="/images/golf-nets/home/home-residential.jpg" alt="Golf ball deterrent netting protecting a fairway home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 96px' }}>
        <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '16px' }}>
          Golf Nets Unlimited is an operating division of Nets Unlimited, Inc. (AZ ROC #236070)
        </p>
        <p style={{ ...body, marginBottom: '32px' }}>
          Nets Unlimited, Inc. is a licensed, bonded, and insured contractor.
        </p>
        <p style={{ ...body, marginBottom: '24px' }}>
          Nets Unlimited specializes in custom products made with rope, netting, cable, and rigging. Our rope and netting products are used for animal containment in zoos, play elements in waterparks and themeparks, handrails in residential and commercial locations, nautical/tropical themeing for resorts, homeowners, and hotels and finally they are used as climbing nets for playgrounds and the military. Many of the themeparks, waterparks, zoos, and other attractions that you visit each year are customers of Nets Unlimited Inc.
        </p>
        <p style={{ ...body, marginBottom: '24px' }}>
          Over the years some of our customers who live on golf courses had persistent problems with errant golf balls creating either hazardous conditions in the yard or doing damage to their property. Nets Unlimited stepped up to provide them with an attractive yet non-intrusive solution to the problem. The system Nets Unlimited uses to address the golf ball issue was so highly sought after and unique that it led to the creation of a dedicated division for Nets Unlimited—Golf Nets Unlimited.
        </p>
        <p style={{ ...body, marginBottom: '24px' }}>
          The goal for all of our projects is to combine quality craftsmanship with custom solutions, whether the client is a local homeowner who isn't able to enjoy the backyard without fear of hearing "Fore!" or a mega Themepark opening a new and exciting attraction.
        </p>
        <p style={{ ...body, marginBottom: '24px' }}>
          We here at Nets Unlimited try to stay on the pulse of what people want, both our commercial clients as well as our residential homeowners. Architecture and products are constantly evolving and we like to develop and evolve along with them--from those who want to add a nautical feeling to their house or yard to architects asking for a new and unique railing product to create a one of a kind modern designs we have the solution.
        </p>
        <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.3vw, 1.5rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em' }}>
          Our favorite phone call starts with "I had this idea…." so call us and share your ideas today. We look forward to working with you.
        </p>
      </section>

      {/* Closing */}
      <section style={{ backgroundColor: '#ECEAE3', padding: '96px 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 300, color: '#1A1A18', lineHeight: 1.4, letterSpacing: '-0.015em', marginBottom: '36px' }}>
            For more information on all of our product lines, visit our Nets Unlimited, Inc. website!
          </p>
          <a
            href="https://netsunlimited.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff' }}
          >
            Find out more
          </a>
        </div>
      </section>
    </div>
  )
}
