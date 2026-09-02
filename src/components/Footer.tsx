import type { Page } from '../App'

interface FooterProps {
  navigate: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Homeowners', page: 'homeowners' },
  { label: 'Driving Range & Practice', page: 'driving-range' },
  { label: 'HOA', page: 'hoa' },
  { label: 'Other Nets', page: 'other-nets' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'About Us', page: 'about' },
  { label: 'FAQs', page: 'faq' },
]

const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/NetsUnlimited/', icon: 'facebook' },
  { name: 'Houzz', href: 'https://www.houzz.com/professionals/specialty-contractors/nets-unlimited-inc-pfvwus-pf~1547408577', icon: 'houzz' },
  { name: 'Instagram', href: 'http://instagram.com/netsunlimitedinc/', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/no-access/?idOrUniversalName=6480887', icon: 'linkedin' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/netsunlimitedinc/', icon: 'pinterest' },
  { name: 'X', href: 'https://x.com/nets_unlimited', icon: 'x' },
  { name: 'Yelp', href: 'https://www.yelp.com/biz/nets-unlimited-phoenix-3', icon: 'yelp' },
]

export default function Footer({ navigate }: FooterProps) {
  const go = (p: Page) => navigate(p)

  return (
    <footer style={{ backgroundColor: '#1E4D2B' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 40px 40px' }}>

        <div className="r-footer-top" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '24px' }}>
          <div>
            <button onClick={() => go('home')} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.25rem', fontWeight: 300, color: '#fff' }}>Golf Nets Unlimited</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>A Division of Nets Unlimited, Inc.</span>
            </button>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '280px', marginBottom: '28px' }}>
              Attractive, professional golf ball deterrent netting systems for homes and businesses on or near the fairway.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <a href="tel:+14805151300" style={{ fontSize: '0.8125rem', color: '#fff' }}>(480) 515-1300</a>
              <a href="mailto:info@netsunlimited.com" style={{ fontSize: '0.8125rem', color: '#fff' }}>info@netsunlimited.com</a>
              <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>20625 North 29th Place, Phoenix, Arizona 85050</span>
            </div>
          </div>

          <FooterLinks title="Solutions" items={navItems.filter(item => ['homeowners', 'driving-range', 'hoa', 'other-nets'].includes(item.page))} go={go} />
          <FooterLinks title="Company" items={navItems.filter(item => ['about', 'gallery', 'faq', 'contact'].includes(item.page))} go={go} />
          <div>
            <FooterLabel>Hours</FooterLabel>
            {[['Mon – Fri', '7:00 am – 4:00 pm'], ['Saturday', 'Closed'], ['Sunday', 'Closed']].map(([day, hours]) => <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '10px' }}><span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>{day}</span><span style={{ fontSize: '0.8125rem', color: '#fff' }}>{hours}</span></div>)}
            <button onClick={() => go('contact')} style={{ marginTop: '28px', width: '100%', padding: '13px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.5)', color: '#fff' }}>Get a Quote</button>
          </div>
        </div>

        {/* Social */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '14px 0 28px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
          {social.map(item => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Nets Unlimited on ${item.name}`} title={item.name}
              style={{ width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '50%', transition: 'color 0.2s, border-color 0.2s, background-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1E4D2B'; e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.backgroundColor = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.72)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.backgroundColor = 'transparent' }}>
              <SocialIcon name={item.icon} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
            Copyright © 2026 Nets Unlimited - All Rights Reserved.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
            Developed by{' '}
            <a href="https://novatoresols.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>
              Novatore Solutions
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .r-footer-top { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 540px) {
          .r-footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const props = { width: 18, height: 18, fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true as const }
  if (name === 'facebook') return <svg {...props}><path d="M13.5 22v-9h3l.45-3.5H13.5V7.27c0-1.01.28-1.7 1.75-1.7H17V2.44c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.34V9.5H7.42V13h2.83v9h3.25Z" /></svg>
  if (name === 'instagram') return <svg {...props}><path fillRule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.18 2A3.02 3.02 0 0 0 4 7.02v9.96A3.02 3.02 0 0 0 7.02 20h9.96A3.02 3.02 0 0 0 20 16.98V7.02A3.02 3.02 0 0 0 16.98 4H7.02ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5.05-3.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" clipRule="evenodd" /></svg>
  if (name === 'linkedin') return <svg {...props}><path d="M5.34 7.67H2.17V21h3.17V7.67ZM3.75 2A1.84 1.84 0 1 0 3.75 5.68 1.84 1.84 0 0 0 3.75 2ZM21.83 13.35c0-4.02-2.14-5.89-5-5.89a4.34 4.34 0 0 0-3.94 2.17V7.67H9.72V21h3.17v-6.6c0-1.74.33-3.43 2.5-3.43 2.14 0 2.17 2 2.17 3.54V21h3.17l1.1-7.65Z" /></svg>
  if (name === 'pinterest') return <svg {...props}><path d="M12.2 2C6.68 2 3 5.95 3 11.12c0 3.74 2.08 5.86 3.34 5.86.52 0 .82-1.45.82-1.86 0-.49-1.24-1.52-1.24-3.54 0-4.2 3.2-7.18 7.34-7.18 3.56 0 6.2 2.02 6.2 5.74 0 2.78-1.12 8-4.74 8-1.34 0-2.48-.97-2.48-2.36 0-2.04 1.42-4.02 1.42-6.12 0-3.56-5.04-2.91-5.04 1.38 0 .9.11 1.89.52 2.71L7.02 22h3.24l1.15-4.43c.62 1.18 2.22 1.78 3.49 1.78 5.35 0 7.1-5.19 7.1-9.87C22 4.95 18.08 2 12.2 2Z" /></svg>
  if (name === 'x') return <svg {...props}><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.44 4.05H6.6L17.8 19.84Z" /></svg>
  if (name === 'houzz') return <svg {...props}><path d="M4 2v20h7v-7h6v7h3V9l-9-4v6H7V2H4Zm7 7 6 2.67V13h-6V9Z" /></svg>
  return <svg {...props}><path d="m12 2 1.62 5.24L18 4l-1.73 5.2L22 9l-4.65 3.13L22 15l-5.73-.2L18 20l-4.38-3.24L12 22l-1.62-5.24L6 20l1.73-5.2L2 15l4.65-2.87L2 9l5.73.2L6 4l4.38 3.24L12 2Z" /></svg>
}

function FooterLabel({ children }: { children: React.ReactNode }) {
  return <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>{children}</span>
}

function FooterLinks({ title, items, go }: { title: string; items: typeof navItems; go: (page: Page) => void }) {
  return <div><FooterLabel>{title}</FooterLabel>{items.map(item => <button key={item.page} onClick={() => go(item.page)} style={{ display: 'block', textAlign: 'left', marginBottom: '12px', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>{item.label}</button>)}</div>
}
