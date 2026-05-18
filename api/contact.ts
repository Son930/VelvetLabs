import nodemailer from 'nodemailer'
import { buildContactNotificationEmail } from './email/contactNotification'

type ContactBody = {
  name?: string
  email?: string
  company?: string
  message?: string
  website?: string
}

type VercelRequest = {
  method?: string
  body?: ContactBody | string
  headers?: Record<string, string | string[] | undefined>
}

type VercelResponse = {
  setHeader: (name: string, value: string) => void
  status: (code: number) => { json: (body: unknown) => void }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parseBody(body: ContactBody | string | undefined): ContactBody {
  if (!body) return {}
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as ContactBody
    } catch {
      return {}
    }
  }
  return body
}

function clientIp(req: VercelRequest): string {
  const forwarded = req.headers?.['x-forwarded-for']
  if (typeof forwarded === 'string') return forwarded.split(',')[0]?.trim() ?? 'unknown'
  if (Array.isArray(forwarded)) return forwarded[0]?.split(',')[0]?.trim() ?? 'unknown'
  return 'unknown'
}

function smtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS,
  )
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Allow', 'POST')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, message, website } = parseBody(req.body)

  if (website?.trim()) {
    return res.status(200).json({ ok: true })
  }

  const trimmedName = name?.trim() ?? ''
  const trimmedEmail = email?.trim() ?? ''
  const trimmedMessage = message?.trim() ?? ''
  const trimmedCompany = company?.trim() ?? ''

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!EMAIL_RE.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (trimmedMessage.length > 10000) {
    return res.status(400).json({ error: 'Message is too long.' })
  }

  if (!smtpConfigured()) {
    console.error('SMTP is not configured (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)')
    return res.status(503).json({ error: 'Contact form is temporarily unavailable.' })
  }

  const to = process.env.CONTACT_TO_EMAIL ?? 'team@velvetlabs.co.uk'
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Velvet Labs <team@velvetlabs.co.uk>'
  const secure = process.env.SMTP_SECURE === 'true'
  const port = Number(process.env.SMTP_PORT)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const { subject, text, html } = buildContactNotificationEmail({
    name: trimmedName,
    email: trimmedEmail,
    company: trimmedCompany || undefined,
    message: trimmedMessage,
    clientIp: clientIp(req),
  })

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: trimmedEmail,
      subject,
      text,
      html,
    })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.status(502).json({
      error: 'Unable to send your message. Please try again or email us directly.',
    })
  }

  return res.status(200).json({ ok: true })
}
