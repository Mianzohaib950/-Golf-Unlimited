import nodemailer from 'nodemailer'

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM_EMAIL', 'ADMIN_EMAIL']
const clean = (value, maxLength) => typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const missing = requiredEnv.filter((key) => !process.env[key])
  if (missing.length) {
    console.error(`Missing mail configuration: ${missing.join(', ')}`)
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const name = clean(req.body?.name, 100)
  const email = clean(req.body?.email, 254)
  const phone = clean(req.body?.phone, 50)
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide your name and a valid email address.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
    await transporter.sendMail({
      from: { name: process.env.SMTP_FROM_NAME || 'Nets Unlimited, Inc.', address: process.env.SMTP_FROM_EMAIL },
      to: process.env.ADMIN_EMAIL,
      cc: process.env.CC_EMAIL || undefined,
      replyTo: { name, address: email },
      subject: `New website contact request from ${name}`,
      text: ['A new contact request was submitted on Golf Nets Unlimited.', '', `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`].join('\n'),
      html: `<h2>New website contact request</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>`,
    })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error)
    return res.status(502).json({ error: 'We could not send your request. Please try again.' })
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character])
}
