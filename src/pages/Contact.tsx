import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

type FormState = { name: string; email: string; phone: string }
type FocusState = { name: boolean; email: boolean; phone: boolean }

const ADDRESS_QUERY = '20625 N. 29th Place, Phoenix, Arizona 85050'

export default function Contact({ navigate: _navigate }: Props) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '' })
  const [focus, setFocus] = useState<FocusState>({ name: false, email: false, phone: false })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const reset = () => {
    setForm({ name: '', email: '', phone: '' })
    setErrors({})
    setSubmitted(false)
  }

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    return e
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    width: '100%',
    padding: '14px 0',
    fontSize: '0.9rem',
    color: '#1A1A18',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${errors[field] ? '#C0392B' : focus[field] ? '#1A1A18' : 'rgba(26,26,24,0.2)'}`,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, system-ui, sans-serif',
  })

  const labelStyle: React.CSSProperties = {
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(26,26,24,0.4)',
    display: 'block',
    marginBottom: '2px',
  }

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '150px 40px 72px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>Contact Us</p>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
          Contact Us
        </h1>
      </section>

      {/* Form + info */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 96px' }}>
        <div className="r-contact">

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '28px', padding: '40px 0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1E4D2B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>✓</div>
                <button
                  type="button"
                  onClick={reset}
                  style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', border: '1px solid rgba(26,26,24,0.2)', color: 'rgba(26,26,24,0.5)' }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }} className="contact-name-row">
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Name</label>
                    <input type="text" value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(r => ({ ...r, name: undefined })) }}
                      onFocus={() => setFocus(f => ({ ...f, name: true }))}
                      onBlur={() => setFocus(f => ({ ...f, name: false }))}
                      style={inputStyle('name')} />
                    {errors.name && <p style={{ fontSize: '0.7rem', color: '#C0392B', marginTop: '6px' }}>{errors.name}</p>}
                  </div>
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      onFocus={() => setFocus(f => ({ ...f, phone: true }))}
                      onBlur={() => setFocus(f => ({ ...f, phone: false }))}
                      style={inputStyle('phone')} />
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Email*</label>
                  <input type="email" value={form.email}
                    onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(r => ({ ...r, email: undefined })) }}
                    onFocus={() => setFocus(f => ({ ...f, email: true }))}
                    onBlur={() => setFocus(f => ({ ...f, email: false }))}
                    style={inputStyle('email')} />
                  {errors.email && <p style={{ fontSize: '0.7rem', color: '#C0392B', marginTop: '6px' }}>{errors.email}</p>}
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <button type="submit" disabled={submitting}
                    style={{ padding: '16px 40px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: '#1E4D2B', color: '#F8F7F4', border: 'none', cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.6 : 1, transition: 'background-color 0.2s, opacity 0.2s', fontFamily: 'Inter, system-ui, sans-serif' }}
                    onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F2A18' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E4D2B' }}>
                    Send
                  </button>
                  <button type="button" onClick={reset}
                    style={{ padding: '16px 32px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: 'transparent', color: 'rgba(26,26,24,0.5)', border: '1px solid rgba(26,26,24,0.2)', cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Cancel
                  </button>
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.68rem', lineHeight: 1.6, color: 'rgba(26,26,24,0.4)' }}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ padding: '48px 40px', backgroundColor: '#ECEAE3', marginBottom: '24px' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>Golf Nets Unlimited</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,24,0.65)', lineHeight: 1.75, marginBottom: '20px' }}>
                20625 N. 29th Place, Phoenix, Arizona 85050, United States (480) 515-1300
              </p>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.4)', marginBottom: '6px' }}>Hours</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,24,0.65)', marginBottom: '20px' }}>Open today 07:00 am – 04:00 pm</p>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.4)', marginBottom: '6px' }}>Email Us</p>
              <a href="mailto:info@netsunlimited.com" style={{ fontSize: '0.9rem', color: '#1E4D2B', borderBottom: '1px solid rgba(30,77,43,0.3)', paddingBottom: '1px' }}>Email Us</a>
            </div>
            <div style={{ display: 'flex', gap: '24px', padding: '4px 0' }}>
              <a href="mailto:info@netsunlimited.com" style={{ fontSize: '0.8125rem', color: 'rgba(26,26,24,0.6)', borderBottom: '1px solid rgba(26,26,24,0.25)', paddingBottom: '1px' }}>Email Us</a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_QUERY)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'rgba(26,26,24,0.6)', borderBottom: '1px solid rgba(26,26,24,0.25)', paddingBottom: '1px' }}>Get directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: '440px', position: 'relative', backgroundColor: '#E8E7E1' }}>
        <iframe
          title="Golf Nets Unlimited"
          src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&output=embed`}
          style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
