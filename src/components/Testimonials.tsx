import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: "We had three broken windows in two years before Golf Nets Unlimited came out. Since installation, not a single incident. The system is nearly invisible from the street.",
    author: "Michael R.",
    role: "Homeowner, Scottsdale AZ",
    initials: "MR",
  },
  {
    quote: "The HOA board approved on first submission — their documentation package was flawless. Installation crew was professional, clean, and done in two days.",
    author: "Sandra K.",
    role: "HOA Board President, Palm Beach County FL",
    initials: "SK",
  },
  {
    quote: "We've used them for our entire driving range perimeter and two internal divider systems. Structural quality is exceptional. These nets handle 50,000 balls a day without issue.",
    author: "James L.",
    role: "Director of Operations, Desert Ridge Golf & Country Club",
    initials: "JL",
  },
  {
    quote: "Working with architects and clients who have strong aesthetic opinions is never easy. These guys understood our design intent immediately and delivered a system that disappears into the landscape.",
    author: "Priya M.",
    role: "Principal, Meridian Landscape Architecture",
    initials: "PM",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [active])

  return (
    <section style={{ backgroundColor: '#F0EFE9', padding: '96px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '12px' }}>Client Stories</p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              What our clients say
            </h2>
          </div>
          {/* Navigation dots */}
          <div style={{ display: 'flex', gap: '8px', paddingBottom: '4px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === active ? '#1A1A18' : 'rgba(26,26,24,0.2)',
                  transition: 'width 0.3s, background-color 0.2s',
                  flexShrink: 0,
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Active testimonial */}
        <div className="r-testimonial">

          {/* Avatar + author */}
          <div>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#1A1A18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.1rem', fontWeight: 200, color: '#F8F7F4', letterSpacing: '0.05em' }}>{t.initials}</span>
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1A1A18', marginBottom: '4px' }}>{t.author}</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(26,26,24,0.45)', lineHeight: 1.5 }}>{t.role}</p>

            {/* Other testimonials list */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 12px',
                    fontSize: '0.78rem',
                    fontWeight: i === active ? 600 : 400,
                    color: i === active ? '#1A1A18' : 'rgba(26,26,24,0.35)',
                    backgroundColor: i === active ? 'rgba(26,26,24,0.06)' : 'transparent',
                    borderLeft: `2px solid ${i === active ? '#1E4D2B' : 'transparent'}`,
                    transition: 'all 0.2s',
                    lineHeight: 1.4,
                  }}
                >
                  {item.author}
                </button>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <svg style={{ width: '32px', height: '24px', color: '#1E4D2B', marginBottom: '24px', opacity: 0.6 }} fill="currentColor" viewBox="0 0 32 24">
              <path d="M0 24V14.4C0 6.08 4.16 1.28 12.48 0l1.28 2.56C9.6 3.52 7.36 5.6 6.72 9.6H12V24H0zm18 0V14.4C18 6.08 22.16 1.28 30.48 0l1.28 2.56C27.6 3.52 25.36 5.6 24.72 9.6H30V24H18z"/>
            </svg>
            <blockquote style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.015em', margin: 0 }}>
              {t.quote}
            </blockquote>
            <div style={{ marginTop: '40px', height: '1px', backgroundColor: 'rgba(26,26,24,0.12)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '1px', backgroundColor: '#1E4D2B', width: `${((active + 1) / testimonials.length) * 100}%`, transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
