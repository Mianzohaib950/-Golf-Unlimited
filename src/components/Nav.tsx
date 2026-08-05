import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  currentPage: Page
  navigate: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Homeowners', page: 'homeowners' },
  { label: 'Driving Range', page: 'driving-range' },
  { label: 'HOA', page: 'hoa' },
  { label: 'Other Nets', page: 'other-nets' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'About', page: 'about' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
]

// Pages with a dark hero — nav should be white text when unscrolled
const darkHeroPages: Page[] = ['home']

export default function Nav({ currentPage, navigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (p: Page) => navigate(p)

  const isDark = darkHeroPages.includes(currentPage) && !scrolled

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isDark
          ? 'rgba(10,16,11,0.0)'
          : scrolled
            ? 'rgba(248,247,244,0.85)'
            : 'rgba(248,247,244,0.85)',
        backdropFilter: scrolled || !isDark ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || !isDark ? 'blur(20px)' : 'none',
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
            style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textAlign: 'left', gap: '1px', flexShrink: 0 }}
          >
            <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 400, color: isDark ? '#fff' : '#1A1A18', letterSpacing: '-0.02em', transition: 'color 0.3s' }}>
              Golf Nets Unlimited
            </span>
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: isDark ? 'rgba(255,255,255,0.5)' : '#1E4D2B', fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif', transition: 'color 0.3s' }}>
              Est. 2003
            </span>
          </button>

          {/* All nav links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
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
                    padding: '6px 10px',
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

          {/* CTA */}
          <button
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
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}
