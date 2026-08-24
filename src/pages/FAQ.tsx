import { useState } from 'react'
import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'Where does Nets Unlimited work?', a: 'Nets Unlimited will ship nets anywhere in the world. We predominantly install homeowner golf nets in Arizona, but will travel anywhere installation services are requested. We can also provide net materials and work with your local contractor, offering tips on building the system correctly.' },
      { q: 'What about my HOA?', a: "Nets Unlimited has extensive experience working with HOAs. We provide documentation, drawings, samples, and other required materials. We have also helped HOAs without set requirements create community guidelines." },
      { q: 'Do you have other types of netting products?', a: 'We specialize in a wide variety of rope and netting products, including tropical themeing and pet safety netting. Call one of our representatives or visit our parent company website for information and inspiration.' },
    ],
  },
  {
    category: 'Systems & Materials',
    items: [
      { q: 'Does Nets Unlimited work with existing structures?', a: 'We replace netting on existing structures when the structure is still sound. We can make minor net repairs, repaint or repair existing structures, and remove and replace structures that are no longer sound.' },
      { q: 'Can I buy just the netting?', a: 'Absolutely. Netting is available as a material-only purchase. Contact us for pricing and fabrication timing; everything we make is custom.' },
      { q: 'What are the systems made out of?', a: 'Poles are schedule 40 galvanized steel, sized for the structure height. Black is most common, with custom powder-coated or painted colors available. Nets are high-performance polyester or nylon with a polypropylene rope border. Common colors are Black, Beige, White, and Green.' },
    ],
  },
  {
    category: 'Cost & Process',
    items: [
      { q: 'What is the cost of the system?', a: 'Every home and course has different dynamics, so costs range from a few hundred dollars to several thousand. Nets Unlimited provides a no-cost estimate by phone or can visit your residence to prepare a custom quote.' },
      { q: 'I have an estimate, what are the next steps?', a: 'We require a 50% deposit with the order and the balance upon completion. After receiving the deposit, we provide a site plan for approval and support the HOA approval process if applicable. Installation is scheduled after approvals and generally takes 2–5 days.' },
    ],
  },
  {
    category: 'Warranty & Maintenance',
    items: [
      { q: 'Is there a Warranty?', a: 'Nets Unlimited offers a 1-year warranty for defects in material and workmanship on all new structures installed. The netting also carries a 10-year pro-rated warranty against UV degradation.' },
      { q: 'What are the maintenance requirements?', a: 'Routine maintenance or repair should not be necessary as long as plants are kept well-trimmed and away from the net. If something does occur, we are available to make repairs at reasonable rates.' },
    ],
  },
]

export default function FAQ({ navigate }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  const filteredFaqs = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ paddingTop: '140px', borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>FAQ</p>
            <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
              Common questions
            </h1>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)' }}>
            Find answers about our service area, HOA documentation, warranty, existing structures, pricing, next steps, maintenance, materials, and other netting products.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 40px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['All', ...faqs.map(f => f.category)].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '8px 18px', border: '1px solid',
              borderColor: activeCategory === cat ? '#1A1A18' : 'rgba(26,26,24,0.18)',
              backgroundColor: activeCategory === cat ? '#1A1A18' : 'transparent',
              color: activeCategory === cat ? '#F8F7F4' : 'rgba(26,26,24,0.5)',
              transition: 'all 0.15s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        {filteredFaqs.map(group => (
          <div key={group.category} style={{ marginBottom: '64px' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
              {group.category}
            </p>
            {group.items.map((item, i) => {
              const key = `${group.category}-${i}`
              const isOpen = openItem === key
              return (
                <div key={i} style={{ borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
                  <button
                    onClick={() => toggle(key)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px',
                    }}
                  >
                    <span style={{ fontSize: '0.9375rem', fontWeight: isOpen ? 600 : 500, color: '#1A1A18', lineHeight: 1.4, transition: 'font-weight 0.1s' }}>
                      {item.q}
                    </span>
                    <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(26,26,24,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, background-color 0.2s', transform: isOpen ? 'rotate(45deg)' : 'none', backgroundColor: isOpen ? '#1A1A18' : 'transparent' }}>
                      <svg style={{ width: '10px', height: '10px', color: isOpen ? '#F8F7F4' : 'rgba(26,26,24,0.5)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: '24px' }}>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.55)', maxWidth: '640px' }}>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </section>

      <CTASection navigate={navigate} headline="Still Have Questions?" subtext="Call us or send a request through our contact page." primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Find Out More" secondaryPage="other-nets" />
    </div>
  )
}
