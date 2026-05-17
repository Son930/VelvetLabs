import { useState } from 'react'
import { Button, Form, Input, Label, TextArea, TextField } from '@heroui/react'
import { ClassicDivider } from '../components/ClassicDivider'
import { PageHeader } from '../components/PageHeader'
import { AnimatedItem, AnimatedStagger } from '../components/motion/Animated'
import { PageSEO } from '../components/PageSEO'
import { seo } from '../data/seo'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageSEO {...seo.contact} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PageHeader
          title="Contact"
          subtitle="Tell us about your project. We'll review and reply with next steps."
        />

        <ClassicDivider className="mb-12 max-w-md" />

        <AnimatedStagger className="grid gap-10 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-3">
            <section className="classic-card p-8 sm:p-10">
              {submitted ? (
                <div className="py-6 text-center">
                  <p className="font-serif text-2xl text-ink">Thank you</p>
                  <p className="mt-3 text-sm text-muted">
                    We&apos;ve received your message. This demo does not send email yet —
                    we&apos;ll wire that up when you&apos;re ready.
                  </p>
                  <Button className="mt-8" variant="secondary" onPress={() => setSubmitted(false)}>
                    Send another
                  </Button>
                </div>
              ) : (
                <Form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <TextField name="name" isRequired className="w-full">
                    <Label>Name</Label>
                    <Input placeholder="Your name" />
                  </TextField>

                  <TextField name="email" type="email" isRequired className="w-full">
                    <Label>Email</Label>
                    <Input placeholder="you@company.com" />
                  </TextField>

                  <TextField name="company" className="w-full">
                    <Label>Company</Label>
                    <Input placeholder="Optional" />
                  </TextField>

                  <TextField name="message" isRequired className="w-full">
                    <Label>Message</Label>
                    <TextArea
                      placeholder="Your project, timeline, and goals…"
                      rows={5}
                    />
                  </TextField>

                  <Button type="submit" variant="primary" fullWidth>
                    Send message
                  </Button>
                </Form>
              )}
            </section>
          </AnimatedItem>

          <aside className="space-y-6 lg:col-span-2">
            <AnimatedItem>
              <div className="classic-card p-8">
                <p className="eyebrow">Email</p>
                <p className="mt-2 font-serif text-xl text-ink">hello@velvetlabs.dev</p>
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <div className="classic-card p-8">
                <p className="eyebrow">Location</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Remote-first · working with clients worldwide
                </p>
              </div>
            </AnimatedItem>
          </aside>
        </AnimatedStagger>
      </div>
    </>
  )
}
