import { useState, type FormEvent } from 'react'
import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'
import { site } from '../data/site'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
}

export function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status === 'error') setStatus('idle')
  }

  return (
    <>
      <PageSEO {...seo.contact} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="Contact"
          subtitle="Describe the paper processes or workflows that slow you down. We'll review and reply with sensible next steps."
        />

        <ClassicDivider className="mb-12 max-w-md" />

        <AnimatedStagger className="grid gap-10 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-3">
            <section className="classic-card p-8 sm:p-10" aria-live="polite">
              <p className="eyebrow">Enquire</p>
              <h2 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">Send a message</h2>
              <p className="lead-classic mt-3 max-w-lg !text-sm !not-italic">
                Tell us which workflows still run on paper — we typically reply within one
                business day.
              </p>

              <ClassicDivider className="my-8 max-w-xs" />

              {status === 'success' ? (
                <div className="py-4 text-center sm:text-left">
                  <p className="font-serif text-2xl text-ink">Thank you</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Your message has been sent. We&apos;ll be in touch at the email you
                    provided.
                  </p>
                  <button
                    type="button"
                    className="btn-classic-ghost mt-8"
                    onClick={() => setStatus('idle')}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div
                    className="absolute -left-[9999px] h-px w-px overflow-hidden"
                    aria-hidden
                  >
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => updateField('website', e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="eyebrow mb-2 block">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="classic-input"
                      placeholder="Your name"
                      value={form.name}
                      disabled={status === 'loading'}
                      onChange={(e) => updateField('name', e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="eyebrow mb-2 block">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="classic-input"
                      placeholder="you@company.com"
                      value={form.email}
                      disabled={status === 'loading'}
                      onChange={(e) => updateField('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="eyebrow mb-2 block">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="classic-input"
                      placeholder="Optional"
                      value={form.company}
                      disabled={status === 'loading'}
                      onChange={(e) => updateField('company', e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="eyebrow mb-2 block">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="classic-textarea"
                      placeholder="Which processes still run on paper? What would faster, digital workflows change for your team?"
                      value={form.message}
                      disabled={status === 'loading'}
                      onChange={(e) => updateField('message', e.target.value)}
                    />
                  </div>

                  {status === 'error' && errorMessage ? (
                    <p className="text-sm text-burgundy" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="btn-classic w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </section>
          </AnimatedItem>

          <aside className="space-y-6 lg:col-span-2">
            <AnimatedItem>
              <div className="classic-card p-8">
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="mt-2 block font-serif text-xl text-ink transition-colors hover:text-gold sm:text-2xl"
                >
                  {site.contactEmail}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Prefer email? Write directly — we read every message.
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <div className="classic-card p-8">
                <p className="eyebrow">Location</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Remote-first · working with businesses worldwide
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <div className="classic-panel-placeholder p-8">
                <p className="eyebrow">What to include</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A short note on the process you want to digitise, who uses it today, and
                  any deadlines — that helps us respond with useful next steps.
                </p>
              </div>
            </AnimatedItem>
          </aside>
        </AnimatedStagger>
      </div>
    </>
  )
}
