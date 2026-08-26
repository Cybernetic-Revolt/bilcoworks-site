'use client'

import { useState, useEffect, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  hrisPlatform: string
  payrollBenefits: string
  needs: string
  timeline: string
  decisionOwner: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  hrisPlatform: '',
  payrollBenefits: '',
  needs: '',
  timeline: '',
  decisionOwner: '',
}

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, answer: a + b }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 })
  const [captchaInput, setCaptchaInput] = useState('')

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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

    try {
      const response = await fetch('https://bilcoworks-contact.cloudflare-com-14e.workers.dev/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setFormData(initialFormData)
      setCaptchaInput('')
      setCaptcha(generateCaptcha())
    } catch (error) {
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="field-label">
            Name <span className="text-signal-deep" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
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
            value={formData.email}
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
          value={formData.company}
          onChange={handleChange}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="hrisPlatform" className="field-label">
          HRIS Platform <span className="text-xs font-normal text-ink-3">(e.g., Workday, SuccessFactors, UKG)</span>
        </label>
        <input
          type="text"
          id="hrisPlatform"
          name="hrisPlatform"
          value={formData.hrisPlatform}
          onChange={handleChange}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="payrollBenefits" className="field-label">
          Payroll / Benefits Providers
        </label>
        <input
          type="text"
          id="payrollBenefits"
          name="payrollBenefits"
          value={formData.payrollBenefits}
          onChange={handleChange}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="needs" className="field-label">
          What is broken or needed? <span className="text-signal-deep" aria-hidden="true">*</span>
        </label>
        <textarea
          id="needs"
          name="needs"
          required
          rows={4}
          value={formData.needs}
          onChange={handleChange}
          placeholder="Describe the issues or requirements in a few bullet points"
          className="field resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="timeline" className="field-label">
            Timeline / Key Dates
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="e.g., Q2 2026, ASAP"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="decisionOwner" className="field-label">
            Decision Owner
          </label>
          <input
            type="text"
            id="decisionOwner"
            name="decisionOwner"
            value={formData.decisionOwner}
            onChange={handleChange}
            placeholder="Name and role"
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="captcha" className="field-label">
          What is {captcha.a} + {captcha.b}? <span className="text-signal-deep" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          required
          autoComplete="off"
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
