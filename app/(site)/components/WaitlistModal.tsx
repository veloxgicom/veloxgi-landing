"use client"
import React, { useState } from 'react'
import { ArrowRight } from './Icons'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

type WaitlistModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !agreeToPrivacy) {
      setMessage({ type: 'error', text: t('waitlist.requiredFields') })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: t('waitlist.success') })
        setEmail('')
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 2000)
      } else {
        setMessage({ type: 'error', text: data.error || t('waitlist.error') })
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('waitlist.connectionError') })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-slate-700 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label={t('waitlist.closeModal')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-3">
          {t('waitlist.title')}
        </h2>

        {/* Intro text */}
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          {t('waitlist.description')}
        </p>

        {/* Alert box */}
        <div className="bg-amber-900/30 border border-amber-800/50 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.4"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-amber-400 text-sm">
              {t('waitlist.comingSoon')}{' '}
              <a 
                href="#" 
                className="underline hover:text-amber-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  // Aquí puedes agregar el enlace a ProductHunt o la página de prelanzamiento
                }}
              >
                {t('waitlist.prelaunchPage')}
              </a>{' '}
              {t('waitlist.forNotifications')}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              {t('waitlist.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('waitlist.emailPlaceholder')}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              checked={agreeToPrivacy}
              onChange={(e) => setAgreeToPrivacy(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800 text-brand focus:ring-2 focus:ring-brand"
              required
              disabled={isSubmitting}
            />
            <label htmlFor="privacy" className="text-sm text-slate-300">
              {t('waitlist.privacyAgree')}{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand600 transition-colors">
                {t('waitlist.privacyPolicy')}
              </a>
            </label>
          </div>

          {/* Message */}
          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              message.type === 'success' 
                ? 'bg-green-900/30 text-green-400 border border-green-800/50' 
                : 'bg-red-900/30 text-red-400 border border-red-800/50'
            }`}>
              {message.text}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || !agreeToPrivacy}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                {t('waitlist.processing')}
              </>
            ) : (
              <>
                {t('waitlist.submit')}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

