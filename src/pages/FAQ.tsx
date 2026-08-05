import { useState } from 'react'
import CTASection from '../components/CTASection'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'What types of netting systems do you install?', a: 'We specialize in golf ball containment systems for residential properties, HOA communities, and commercial driving ranges. We also install specialty netting for sports, aviary, pet enclosures, agricultural, and architectural applications.' },
      { q: 'How long does installation typically take?', a: 'Residential projects typically take 1–2 days. Commercial and community-scale projects run 3–10 days depending on scope. We will provide a detailed timeline in your proposal.' },
      { q: 'Do you service my area?', a: 'We currently operate in Florida and Arizona with regional crews available throughout the Southeast and Southwest United States. Contact us to confirm coverage for your specific location.' },
      { q: 'Is there a minimum project size?', a: 'We do not have a minimum project size — we serve single-family homeowners and 500-acre golf resorts alike. Every inquiry receives a site visit and a written proposal.' },
    ],
  },
  {
    category: 'Products & Materials',
    items: [
      { q: 'What materials do you use?', a: 'We are an authorized dealer of Nets Unlimited products — the industry standard for high-performance netting. Materials include UV-stabilized HDPE, knotted nylon, and braided polyester depending on the application.' },
      { q: 'How long will my net system last?', a: 'Residential systems installed with quality UV-rated HDPE typically last 15–20 years with minimal maintenance. Commercial systems in high-ball-volume environments are rated at 10–15 years. Annual inspections extend system life significantly.' },
      { q: 'What colors are available?', a: 'Most systems are installed in black or dark green, which offers the best UV resistance and the least visual intrusion. Custom color matching is available for architectural applications.' },
      { q: 'Are your materials safe for children and pets?', a: 'Yes. All materials used in our systems are non-toxic, non-reactive, and tested for outdoor safety. Pet enclosure and play area netting specifically uses materials with no sharp edges or chemical treatments.' },
    ],
  },
  {
    category: 'Process & Permits',
    items: [
      { q: 'Do I need a permit for a netting system?', a: 'Permit requirements vary by municipality and jurisdiction. We research all applicable local codes before submitting a proposal and handle permit applications where required as part of our service.' },
      { q: 'My HOA requires architectural approval. Can you help?', a: 'Yes — this is a core part of our service. We prepare architectural renderings, specifications, and supporting documentation formatted for HOA review boards. Many of our clients report board approval on first submission.' },
      { q: 'What happens during the initial consultation?', a: 'A member of our design team visits your site, takes measurements, evaluates ball trajectory and impact zones, discusses aesthetics and any HOA restrictions, and photographs the area. The site visit typically takes 45–90 minutes.' },
      { q: 'How quickly can you start after I approve the proposal?', a: 'For residential projects, we typically schedule installation within 2–4 weeks of proposal approval. Commercial projects may require 4–8 weeks depending on material lead time and permitting.' },
    ],
  },
  {
    category: 'Warranty & Maintenance',
    items: [
      { q: 'What warranty do you offer?', a: 'All residential installations carry a 5-year workmanship warranty. Commercial installations carry a 10-year workmanship warranty. Material warranties from Nets Unlimited run separately and range from 5–20 years depending on the product.' },
      { q: 'Do I need to maintain my net system?', a: 'Annual inspections are strongly recommended and are included in our commercial service agreements. Homeowners should visually inspect tension and anchors seasonally. We offer a maintenance program that includes annual site visits.' },
      { q: 'What if my net is damaged by a storm or vandalism?', a: 'We offer emergency repair services with a target response time of 48 hours for contract clients and 5 business days for all other customers. Repairs are warrantied for 12 months.' },
      { q: 'Will you remove and reinstall if I am renovating?', a: 'Yes — system removal, storage, and reinstallation is a standard service. Existing systems are typically reusable if removed carefully. We inspect components during reinstallation and replace any degraded elements.' },
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
            Twenty years of client conversations have shaped this list. If your question is not here, call us or use the contact form — we respond to every inquiry within one business day.
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

      <CTASection navigate={navigate} headline="Still Have Questions?" subtext="Call us directly or send a message. We will connect you with a project specialist within one business day." primaryLabel="Contact Us" primaryPage="contact" secondaryLabel="Get a Quote" />
    </div>
  )
}
