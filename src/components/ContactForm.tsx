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
      <div className="p-6 bg-teal/5 border border-teal/20 rounded-lg">
        <h3 className="font-medium text-ink">Message sent</h3>
        <p className="mt-2 text-sm text-ink-muted">
          We&apos;ll review your request and respond within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-accent hover:text-ink transition-colors"
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
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Name <span className="text-ink-muted">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email <span className="text-ink-muted">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="hrisPlatform" className="block text-sm font-medium text-ink">
          HRIS Platform <span className="text-ink-muted text-xs">(e.g., Workday, SuccessFactors, UKG)</span>
        </label>
        <input
          type="text"
          id="hrisPlatform"
          name="hrisPlatform"
          value={formData.hrisPlatform}
          onChange={handleChange}
          className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="payrollBenefits" className="block text-sm font-medium text-ink">
          Payroll / Benefits Providers
        </label>
        <input
          type="text"
          id="payrollBenefits"
          name="payrollBenefits"
          value={formData.payrollBenefits}
          onChange={handleChange}
          className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="needs" className="block text-sm font-medium text-ink">
          What is broken or needed? <span className="text-ink-muted">*</span>
        </label>
        <textarea
          id="needs"
          name="needs"
          required
          rows={4}
          value={formData.needs}
          onChange={handleChange}
          placeholder="Describe the issues or requirements in a few bullet points"
          className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-ink">
            Timeline / Key Dates
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="e.g., Q2 2026, ASAP"
            className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="decisionOwner" className="block text-sm font-medium text-ink">
            Decision Owner
          </label>
          <input
            type="text"
            id="decisionOwner"
            name="decisionOwner"
            value={formData.decisionOwner}
            onChange={handleChange}
            placeholder="Name and role"
            className="mt-1.5 w-full px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="captcha" className="block text-sm font-medium text-ink">
          What is {captcha.a} + {captcha.b}? <span className="text-ink-muted">*</span>
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          required
          autoComplete="off"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="mt-1.5 w-32 px-3 py-2 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
