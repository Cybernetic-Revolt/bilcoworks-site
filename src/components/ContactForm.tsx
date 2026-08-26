'use client'

import { useEffect, useState, FormEvent } from 'react'
import {
  allPracticeFieldNames,
  commonFields,
  practices,
} from '@/content/enquiry'

const ENDPOINT =
  'https://bilcoworks-contact.cloudflare-com-14e.workers.dev/submit'

type Values = Record<string, string>

const emptyValues = (): Values => ({
  name: '',
  email: '',
  company: '',
  needs: '',
  timeline: '',
  decisionOwner: '',
  ...Object.fromEntries(allPracticeFieldNames.map((n) => [n, ''])),
})

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, answer: a + b }
}

export default function ContactForm() {
  const [practiceId, setPracticeId] = useState(practices[0].id)
  const [values, setValues] = useState<Values>(emptyValues)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 })
  const [captchaInput, setCaptchaInput] = useState('')

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const practice = practices.find((p) => p.id === practiceId) ?? practices[0]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setStatus('error')
      setErrorMessage('Incorrect answer. Please try again.')
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      return
    }

    // The receiving worker was written against the original HR-only payload, so
    // every original key is still sent, always, even when this enquiry is not
    // about HR. The practice-specific answers go out as their own keys AND are
    // appended to `needs` — `needs` is the field the worker certainly surfaces,
    // so folding them in means an answer cannot be lost to a key the worker
    // does not know about.
    const answered = practice.fields
      .filter((f) => values[f.name]?.trim())
      .map((f) => `${f.label}: ${values[f.name].trim()}`)

    const needsWithContext = [
      `Practice: ${practice.label}`,
      '',
      values.needs.trim(),
      ...(answered.length ? ['', ...answered] : []),
    ].join('\n')

    const payload = {
      name: values.name,
      email: values.email,
      company: values.company,
      hrisPlatform: values.hrisPlatform || '',
      payrollBenefits: values.payrollBenefits || '',
      needs: needsWithContext,
      timeline: values.timeline,
      decisionOwner: values.decisionOwner,
      practice: practice.label,
      practiceId: practice.id,
      ...Object.fromEntries(
        practice.fields.map((f) => [f.name, values[f.name] || ''])
      ),
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Failed to submit form')

      setStatus('success')
      setValues(emptyValues())
      setCaptchaInput('')
      setCaptcha(generateCaptcha())
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try emailing us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border-l-2 border-signal-deep bg-paper-3 p-8">
        <p className="eyebrow-ink">Message sent</p>
        <p className="mt-4 text-sm leading-[1.8] text-ink-2">
          We will review your request and respond within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-mono text-micro-2 uppercase text-signal-deep transition-opacity hover:opacity-70"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* The picker comes first: it decides what the rest of the form asks. */}
      <fieldset>
        <legend className="field-label">What is this about?</legend>
        <div className="mt-4 grid gap-px border border-hair-ink bg-ink/10 sm:grid-cols-2">
          {practices.map((p) => {
            const active = p.id === practiceId
            return (
              <label
                key={p.id}
                className={`cursor-pointer bg-paper-3 p-5 transition-colors ${
                  active ? 'ring-1 ring-inset ring-signal-deep' : 'hover:bg-paper'
                }`}
              >
                <span className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="practice"
                    value={p.id}
                    checked={active}
                    onChange={() => setPracticeId(p.id)}
                    className="mt-1 accent-signal-deep"
                  />
                  <span>
                    <span
                      className={`block text-sm font-medium ${
                        active ? 'text-signal-deep' : 'text-ink'
                      }`}
                    >
                      {p.label}
                    </span>
                    <span className="mt-1 block text-xs leading-[1.6] text-ink-2">
                      {p.blurb}
                    </span>
                  </span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name <span className="text-signal-deep" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email <span className="text-signal-deep" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="field-label">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={values.company}
          onChange={handleChange}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="needs" className="field-label">
          What is broken or needed?{' '}
          <span className="text-signal-deep" aria-hidden="true">*</span>
        </label>
        <textarea
          id="needs"
          name="needs"
          required
          rows={4}
          value={values.needs}
          onChange={handleChange}
          placeholder="Describe the situation in a few bullet points"
          className="field resize-none"
        />
      </div>

      {/* Swaps with the picker. Keyed so the browser does not carry a value from
          one practice's field into the one that replaces it. */}
      <div key={practice.id} className="grid gap-5 sm:grid-cols-2">
        {practice.fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="field-label">
              {f.label}
              {f.hint && (
                <span className="ml-2 text-xs font-normal text-ink-3">
                  {f.hint}
                </span>
              )}
            </label>
            <input
              type="text"
              id={f.name}
              name={f.name}
              value={values[f.name] ?? ''}
              onChange={handleChange}
              placeholder={f.placeholder}
              className="field"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {commonFields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="field-label">
              {f.label}
            </label>
            <input
              type="text"
              id={f.name}
              name={f.name}
              value={values[f.name] ?? ''}
              onChange={handleChange}
              placeholder={f.placeholder}
              className="field"
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="captcha" className="field-label">
          What is {captcha.a} + {captcha.b}?{' '}
          <span className="text-signal-deep" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          required
          autoComplete="off"
          inputMode="numeric"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="field !w-32"
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="border-l-2 border-ink bg-paper-3 px-5 py-4">
          <p className="text-sm text-ink">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="cta-ink w-full justify-center disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
