import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

type FormState = { name: string; email: string; phone: string; subject: string; message: string }
type FocusState = { name: boolean; email: boolean; phone: boolean; subject: boolean; message: boolean }

const SUBJECTS = ['General Inquiry', 'Residential — New Installation', 'Commercial / Driving Range', 'HOA / Community Project', 'Specialty Netting', 'Service / Repair', 'Other']

export default function Contact({ navigate: _navigate }: Props) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' })
  const [focus, setFocus] = useState<FocusState>({ name: false, email: false, phone: false, subject: false, message: false })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
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

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F7F4', padding: '40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1E4D2B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: '#fff', fontSize: '1.2rem' }}>✓</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', marginBottom: '20px' }}>
            Message received
          </h2>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(26,26,24,0.5)', marginBottom: '40px' }}>
            Thank you for reaching out. A member of our team will respond within one business day with next steps.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
            style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', border: '1px solid rgba(26,26,24,0.2)', color: 'rgba(26,26,24,0.5)', transition: 'all 0.2s' }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Header */}
      <section style={{ paddingTop: '140px' }}>
        <div className="page-pad" style={{ paddingTop: '0', paddingBottom: '80px' }}>
          <div className="r-contact-header">
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '16px' }}>Contact</p>
              <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 200, color: '#1A1A18', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                Let's talk about your project
              </h1>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.5)', marginBottom: '32px' }}>
                Every project begins with a conversation. Tell us what you're experiencing and we'll arrange a site visit within the week.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[['Phone', '(555) 123-4567'], ['Email', 'info@golfnetsunlimited.com'], ['Hours', 'Mon–Fri 7am–4pm']].map(([lbl, val]) => (
                  <div key={lbl} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.35)', width: '52px', paddingTop: '1px', flexShrink: 0 }}>{lbl}</span>
                    <span style={{ fontSize: '0.875rem', color: 'rgba(26,26,24,0.6)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + info panel */}
      <section>
        <div className="page-pad" style={{ paddingBottom: '96px' }}>
          <div className="r-contact">

            {/* Form */}
            <form onSubmit={submit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" value={form.name}
                    onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(r => ({ ...r, name: undefined })) }}
                    onFocus={() => setFocus(f => ({ ...f, name: true }))}
                    onBlur={() => setFocus(f => ({ ...f, name: false }))}
                    placeholder="Jane Smith" style={inputStyle('name')} />
                  {errors.name && <p style={{ fontSize: '0.7rem', color: '#C0392B', marginTop: '6px' }}>{errors.name}</p>}
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    onFocus={() => setFocus(f => ({ ...f, phone: true }))}
                    onBlur={() => setFocus(f => ({ ...f, phone: false }))}
                    placeholder="(555) 000-0000" style={inputStyle('phone')} />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" value={form.email}
                  onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(r => ({ ...r, email: undefined })) }}
                  onFocus={() => setFocus(f => ({ ...f, email: true }))}
                  onBlur={() => setFocus(f => ({ ...f, email: false }))}
                  placeholder="jane@example.com" style={inputStyle('email')} />
                {errors.email && <p style={{ fontSize: '0.7rem', color: '#C0392B', marginTop: '6px' }}>{errors.email}</p>}
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={labelStyle}>Subject</label>
                <select value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  onFocus={() => setFocus(f => ({ ...f, subject: true }))}
                  onBlur={() => setFocus(f => ({ ...f, subject: false }))}
                  style={{ ...inputStyle('subject'), appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select a topic...</option>
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <label style={labelStyle}>Message *</label>
                <textarea value={form.message}
                  onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(r => ({ ...r, message: undefined })) }}
                  onFocus={() => setFocus(f => ({ ...f, message: true }))}
                  onBlur={() => setFocus(f => ({ ...f, message: false }))}
                  placeholder="Describe your project — property type, location, what you're experiencing, and any HOA restrictions."
                  rows={5} style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.7 }} />
                {errors.message && <p style={{ fontSize: '0.7rem', color: '#C0392B', marginTop: '6px' }}>{errors.message}</p>}
              </div>

              <button type="submit" disabled={submitting}
                style={{ padding: '16px 40px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: '#1E4D2B', color: '#F8F7F4', border: 'none', cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.6 : 1, transition: 'background-color 0.2s, opacity 0.2s', fontFamily: 'Inter, system-ui, sans-serif' }}
                onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F2A18' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E4D2B' }}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Info + offices */}
            <div>
              <div style={{ padding: '48px 40px', backgroundColor: '#ECEAE3', marginBottom: '24px' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1E4D2B', marginBottom: '20px' }}>Arizona Office</p>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.1rem', fontWeight: 300, color: '#1A1A18', lineHeight: 1.5, marginBottom: '16px' }}>5678 Desert Course Blvd<br />Scottsdale, AZ 85260</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(26,26,24,0.5)', lineHeight: 1.7 }}>Serving Arizona, Nevada,<br />New Mexico & Southern California</p>
              </div>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.35)', marginBottom: '10px' }}>Response Time</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(26,26,24,0.5)' }}>
                  We respond within one business day. Site visits are typically scheduled within 5–7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section style={{ height: '420px', position: 'relative', backgroundColor: '#E8E7E1', overflow: 'hidden' }}>
        {/* Styled map placeholder — rendered using CSS art to suggest a real map */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #E2E0DA 0%, #D8D6CE 40%, #E5E3DC 100%)' }} />

        {/* Grid lines simulating map roads */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }} xmlns="http://www.w3.org/2000/svg">
          {[80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1120, 1200].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#A8A59E" strokeWidth="0.8" />
          ))}
          {[60, 120, 180, 240, 300, 360, 420].map(y => (
            <line key={y} x1="0" y1={y} x2="1400" y2={y} stroke="#A8A59E" strokeWidth="0.8" />
          ))}
          {/* Diagonal "highways" */}
          <line x1="0" y1="420" x2="800" y2="0" stroke="#B8B5AE" strokeWidth="2" />
          <line x1="300" y1="0" x2="1400" y2="350" stroke="#B8B5AE" strokeWidth="1.5" />
        </svg>

        {/* Green areas */}
        <div style={{ position: 'absolute', top: '20px', left: '5%', width: '18%', height: '45%', backgroundColor: '#C8D5C0', borderRadius: '2px', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '30px', right: '8%', width: '22%', height: '40%', backgroundColor: '#C8D5C0', borderRadius: '2px', opacity: 0.5 }} />

        {/* Location pin */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#1E4D2B', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(30,77,43,0.4)' }}>
              <svg style={{ width: '20px', height: '20px', color: '#fff' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div style={{ width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #1E4D2B', marginTop: '-1px' }} />
          </div>
          {/* Label card */}
          <div style={{ marginTop: '12px', backgroundColor: '#fff', padding: '10px 16px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', textAlign: 'center', whiteSpace: 'nowrap' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1A1A18', marginBottom: '2px' }}>Golf Nets Unlimited</p>
            <p style={{ fontSize: '0.68rem', color: 'rgba(26,26,24,0.45)' }}>Multiple locations — FL & AZ</p>
          </div>
        </div>

        {/* Overlay label */}
        <div style={{ position: 'absolute', bottom: '24px', left: '32px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '12px 20px' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,24,0.5)', marginBottom: '2px' }}>Service Region</p>
          <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#1A1A18' }}>Florida · Arizona · Southeast USA</p>
        </div>
      </section>
    </div>
  )
}
