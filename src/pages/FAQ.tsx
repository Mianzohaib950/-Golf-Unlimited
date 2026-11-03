import { useState } from 'react'
import type { Page } from '../App'
import PageLink from '../components/PageLink'
import { faqs } from '../seo'

interface Props { navigate: (p: Page) => void }

export default function FAQ({ navigate }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>
      <header style={{ maxWidth: '980px', margin: '0 auto', padding: '150px 40px 56px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1 }}>
          FAQS
        </h1>
      </header>

      <section style={{ maxWidth: '980px', margin: '0 auto', padding: '0 40px 96px' }}>
        {faqs.map(([q, a], i) => {
          const isOpen = open === i
          return (
            <div key={q} style={{ borderTop: '1px solid rgba(26,26,24,0.14)' }}>
              <h2 style={{ margin: 0, fontSize: 'inherit' }}>
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: '100%', padding: '28px 0', display: 'flex', justifyContent: 'space-between', gap: '32px', textAlign: 'left', alignItems: 'baseline' }}
                >
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', fontWeight: 300, color: isOpen ? '#1E4D2B' : '#1A1A18', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{q}</span>
                  <span aria-hidden style={{ fontSize: '1.25rem', color: '#1E4D2B', flexShrink: 0, lineHeight: 1 }}>{isOpen ? '−' : '+'}</span>
                </button>
              </h2>
              {/* Answers always stay in the HTML so crawlers and AI agents can read every one. */}
              <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={!isOpen}>
                <p style={{ maxWidth: '780px', whiteSpace: 'pre-line', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(26,26,24,0.68)', paddingBottom: '32px' }}>{a}</p>
              </div>
            </div>
          )
        })}
        <div style={{ borderTop: '1px solid rgba(26,26,24,0.14)' }} />
      </section>

      <section style={{ backgroundColor: '#ECEAE3', padding: '80px 0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'center' }}>
          <PageLink
            page="other-nets"
            navigate={navigate}
            style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff' }}
          >
            Find out about our other products
          </PageLink>
        </div>
      </section>
    </div>
  )
}
