import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const faqs: [string, string][] = [
  ['Where does Nets Unlimited work?', 'Nets Unlimited will ship nets anywhere in the world. We predominantly provide installations of golf nets in Arizona for homeowners. We will travel anywhere that someone wants our installation services. If, however, you prefer to stay local we will also work with your contractor to provide the net materials and offer tips on how to build your golf ball deterrent system the right way.'],
  ['What about my HOA?', "For homeowners living in HOA restricted communities, Nets Unlimited has extensive experience in working with HOA's. We provide most anything an HOA requires from documentation and drawings to samples. We have also worked with HOA's that do not have set requirements yet, to create guidelines for their communities."],
  ['Is there a Warranty?', 'Nets Unlimited offers a 1-year warranty for defects in material and workmanship on all new structures installed. The netting carries a 10-year pro-rated warranty against UV degradation as well.'],
  ['Does Nets Unlimited work with existing structures?', 'Nets Unlimited will replace netting on an existing structure, so long as that structure is still sound. We can also make minor repairs on the netting or repaint/repair the existing structures in order to maintain soundness. Should a structure need to be replaced we can remove the old one and replace it with a new one as well.'],
  ['What is the cost of the system?', 'Unfortunately, since each home and course provide different dynamics, the cost of a golf net can vary widely, from a few hundred dollars to several thousand. Nets Unlimited will provide a no-cost estimate over the phone, or we are happy to come to your residence as well to give you a custom quote.'],
  ['I have an estimate, what are the next steps?', 'We require a 50% deposit with the placement of the order, with the balance due upon completion.\n\nOnce a deposit is received, we will provide a site plan for your approval and continue to work with you throughout the course of your HOA approval process, if applicable. We will schedule the installation of your golf ball deterrent system based on availability after everything is approved. In most cases, installation takes between 2-5 days to complete.'],
  ['What are the maintenance requirements for golf net deterrent systems?', 'Routine maintenance or repair should not be necessary for the netting structure as long as plants are kept well-trimmed, and away from the net. However, if something does occur we are available to make repairs at reasonable rates.'],
  ["I don't want to build a new structure... Can I buy just the netting?", 'Absolutely! We are happy to provide netting as a material only purchase. Just give us a call or send a request through our contact page and we can provide pricing and information about the time it takes for fabrication. Everything we do is custom so let us know what you are interested in and we are happy to help.'],
  ['What do you make the golf net deterrent systems out of?', 'All of our poles are schedule 40 galvanized steel for strength, durability, and longevity. The size of the post depends on the height of your structure. Heights of structures vary with terrain, proximity to the Tee, the home, and HOA allowances. Black is the most common color for the steel structures but poles can be custom colored with either powder coating in an array of colors or painted to match the HOA requirements or home color.\n\nOur golf nets are high-performance sports netting made of either polyester or nylon for superior UV ratings and typically have a polypropylene rope border. Black, Beige, White, and Green are the most common color choices—others are available upon request.'],
  ['Do you have other types of netting products?', "We specialize in a wide variety of rope and netting products. Whether you want to add a tropical theme to your backyard, add safety netting for your pets, or have another project in mind, we would love to help. Either give us a call to speak to one of our specialized representatives or go to our parent company's main website for information and inspiration!"],
]

export default function FAQ({ navigate }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main style={{ backgroundColor: '#F8F7F4' }}>
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
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                style={{ width: '100%', padding: '28px 0', display: 'flex', justifyContent: 'space-between', gap: '32px', textAlign: 'left', alignItems: 'baseline' }}
              >
                <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', fontWeight: 300, color: isOpen ? '#1E4D2B' : '#1A1A18', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{q}</span>
                <span aria-hidden style={{ fontSize: '1.25rem', color: '#1E4D2B', flexShrink: 0, lineHeight: 1 }}>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <p style={{ maxWidth: '780px', whiteSpace: 'pre-line', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(26,26,24,0.6)', paddingBottom: '32px' }}>{a}</p>
              )}
            </div>
          )
        })}
        <div style={{ borderTop: '1px solid rgba(26,26,24,0.14)' }} />
      </section>

      <section style={{ backgroundColor: '#ECEAE3', padding: '80px 0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('other-nets')}
            style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 32px', backgroundColor: '#1E4D2B', color: '#fff' }}
          >
            Find out about our other products
          </button>
        </div>
      </section>
    </main>
  )
}
