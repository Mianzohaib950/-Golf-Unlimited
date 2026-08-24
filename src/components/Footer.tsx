import type { Page } from '../App'

interface FooterProps {
  navigate: (page: Page) => void
}

export default function Footer({ navigate }: FooterProps) {
  const go = (p: Page) => navigate(p)

  const label: React.CSSProperties = {
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '20px',
    display: 'block',
  }

  const linkStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '12px',
    fontSize: '0.8125rem',
    color: 'rgba(255,255,255,0.75)',
    transition: 'color 0.2s',
    textAlign: 'left',
  }

  return (
    <footer style={{ backgroundColor: '#1E4D2B' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px 60px' }}>
        <div className="r-footer-grid" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '60px' }}>

          {/* Brand column */}
          <div>
            <button onClick={() => go('home')} style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '4px', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 300, color: '#fff', letterSpacing: '-0.02em' }}>Golf Nets Unlimited</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>A Division of Nets Unlimited, Inc.</span>
            </button>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '260px', marginBottom: '32px' }}>
              Attractive, professional golf ball deterrent netting systems for homes and businesses on or near the fairway.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:+14805151300" style={{ fontSize: '0.8125rem', color: '#fff', transition: 'opacity 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >(480) 515-1300</a>
              <a href="mailto:info@netsunlimited.com" style={{ fontSize: '0.8125rem', color: '#fff', transition: 'opacity 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >info@netsunlimited.com</a>
              <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>20625 North 29th Place, Phoenix, Arizona 85050</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <span style={label}>Solutions</span>
            {[
              { label: 'Homeowners', page: 'homeowners' as Page },
              { label: 'Driving Range', page: 'driving-range' as Page },
              { label: 'HOA & Communities', page: 'hoa' as Page },
              { label: 'Other Nets', page: 'other-nets' as Page },
            ].map(item => (
              <button key={item.page} onClick={() => go(item.page)} style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#fff')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)')}
              >{item.label}</button>
            ))}
          </div>

          {/* Company */}
          <div>
            <span style={label}>Company</span>
            {[
              { label: 'About Us', page: 'about' as Page },
              { label: 'Gallery', page: 'gallery' as Page },
              { label: 'FAQ', page: 'faq' as Page },
              { label: 'Contact', page: 'contact' as Page },
            ].map(item => (
              <button key={item.page} onClick={() => go(item.page)} style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#fff')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)')}
              >{item.label}</button>
            ))}
          </div>

          {/* Hours + CTA */}
          <div>
            <span style={label}>Hours</span>
            {[['Mon – Fri', '7:00 am – 4:00 pm'], ['Saturday', 'Closed'], ['Sunday', 'Closed']].map(([day, hrs]) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>{day}</span>
                <span style={{ fontSize: '0.8125rem', color: '#fff' }}>{hrs}</span>
              </div>
            ))}
            <button
              onClick={() => go('contact')}
              style={{ marginTop: '28px', width: '100%', padding: '13px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', backgroundColor: 'transparent', transition: 'background-color 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.5)' }}
            >Get a Quote</button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
            © 2020 Nets Unlimited — All Rights Reserved. Golf Nets Unlimited is an operating division of{' '}
            <a
              href="https://netsunlimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Nets Unlimited
            </a>.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
              Developed by{' '}
            <a href="https://novatoresols.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>
              Novatore Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
