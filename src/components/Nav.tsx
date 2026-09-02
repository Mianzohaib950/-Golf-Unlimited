import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  currentPage: Page
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

// Pages with a dark hero — nav should be white text when unscrolled
const darkHeroPages: Page[] = ['home']

export default function Nav({ currentPage, navigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPage])

  const go = (p: Page) => navigate(p)

  const isDark = darkHeroPages.includes(currentPage) && !scrolled && !menuOpen

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isDark ? 'rgba(10,16,11,0)' : 'rgba(248,247,244,0.85)',
        backdropFilter: isDark ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isDark ? 'none' : 'blur(20px)',
        borderBottom: isDark
          ? '1px solid rgba(255,255,255,0.08)'
          : scrolled
            ? '1px solid rgba(196,195,188,0.5)'
            : '1px solid rgba(196,195,188,0.3)',
        transition: 'background-color 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <button
            onClick={() => go('home')}
            style={{ display: 'flex', alignItems: 'center', lineHeight: 1, textAlign: 'left', flexShrink: 0 }}
          >
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: isDark ? '#fff' : '#1A1A18', letterSpacing: '-0.02em', transition: 'color 0.3s' }}>
              Golf Nets Unlimited
            </span>
          </button>

          {/* Desktop nav links */}
          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {navItems.map(item => {
              const active = currentPage === item.page
              return (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: active ? 600 : 400,
                    letterSpacing: '0.01em',
                    color: isDark
                      ? active ? '#fff' : 'rgba(255,255,255,0.72)'
                      : active ? '#1E4D2B' : '#1A1A18',
                    padding: '6px 9px',
                    borderRadius: '4px',
                    backgroundColor: active && !isDark ? 'rgba(30,77,43,0.08)' : 'transparent',
                    transition: 'color 0.2s, background-color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    const btn = e.currentTarget as HTMLButtonElement
                    btn.style.color = isDark ? '#fff' : '#1E4D2B'
                    if (!isDark && !active) btn.style.backgroundColor = 'rgba(30,77,43,0.06)'
                  }}
                  onMouseLeave={e => {
                    const btn = e.currentTarget as HTMLButtonElement
                    btn.style.color = isDark
                      ? active ? '#fff' : 'rgba(255,255,255,0.72)'
                      : active ? '#1E4D2B' : '#1A1A18'
                    if (!active) btn.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            className="nav-desktop"
            onClick={() => go('contact')}
            style={{
              flexShrink: 0,
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              padding: '9px 20px',
              backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : '#1E4D2B',
              color: '#fff',
              border: isDark ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
              transition: 'background-color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget as HTMLButtonElement
              btn.style.backgroundColor = isDark ? 'rgba(255,255,255,0.25)' : '#0F2A18'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget as HTMLButtonElement
              btn.style.backgroundColor = isDark ? 'rgba(255,255,255,0.15)' : '#1E4D2B'
            }}
          >
            Contact Us
          </button>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', flexShrink: 0 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: isDark ? '#fff' : '#1A1A18' }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-panel" style={{ display: 'none', backgroundColor: '#F8F7F4', borderTop: '1px solid rgba(196,195,188,0.5)', padding: '16px 32px 28px' }}>
          {navItems.map(item => {
            const active = currentPage === item.page
            return (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 0',
                  fontSize: '0.95rem',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#1E4D2B' : '#1A1A18',
                  borderBottom: '1px solid rgba(196,195,188,0.4)',
                }}
              >
                {item.label}
              </button>
            )
          })}
          <button
            onClick={() => go('contact')}
            style={{ marginTop: '20px', width: '100%', padding: '13px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: '#1E4D2B', color: '#fff' }}
          >
            Contact Us
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .nav-mobile-panel { display: block !important; }
        }
      `}</style>
    </header>
  )
}
