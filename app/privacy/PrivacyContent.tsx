'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function PrivacyContent() {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'

  // Format date based on language
  const lastUpdated = new Date().toLocaleDateString(
    isEnglish ? 'en-US' : 'es-ES',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <>
      <h1 className="text-4xl font-bold text-ink mb-4">{t('privacy.title')}</h1>
      <p className="text-muted text-sm mb-8">
        {t('privacy.lastUpdated')}: {lastUpdated}
      </p>

      <p className="text-ink leading-relaxed mb-6">
        {t('privacy.intro')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section1.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section1.personal.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section1.personal.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section1.usage.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section1.usage.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section1.cookies.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section1.cookies.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section2.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section2.intro')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
          <li><strong>{t('privacy.section2.consent.title')}</strong> – {t('privacy.section2.consent.content')}</li>
          <li><strong>{t('privacy.section2.legitimate.title')}</strong> – {t('privacy.section2.legitimate.content')}</li>
          <li><strong>{t('privacy.section2.contractual.title')}</strong> – {t('privacy.section2.contractual.content')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section3.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section3.operation.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section3.operation.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section3.improvements.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section3.improvements.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section3.compliance.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section3.compliance.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section4.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section4.thirdParty.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section4.thirdParty.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section4.legal.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section4.legal.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section4.transfers.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section4.transfers.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section5.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section5.intro')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
          <li><strong>{t('privacy.section5.access.title')}</strong> – {t('privacy.section5.access.content')}</li>
          <li><strong>{t('privacy.section5.rectification.title')}</strong> – {t('privacy.section5.rectification.content')}</li>
          <li><strong>{t('privacy.section5.deletion.title')}</strong> – {t('privacy.section5.deletion.content')}</li>
          <li><strong>{t('privacy.section5.restriction.title')}</strong> – {t('privacy.section5.restriction.content')}</li>
          <li><strong>{t('privacy.section5.portability.title')}</strong> – {t('privacy.section5.portability.content')}</li>
          <li><strong>{t('privacy.section5.objection.title')}</strong> – {t('privacy.section5.objection.content')}</li>
          <li><strong>{t('privacy.section5.withdraw.title')}</strong> – {t('privacy.section5.withdraw.content')}</li>
        </ul>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section5.contact')}{' '}
          <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
            veloxgi.com@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section6.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section6.security.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section6.security.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section6.retention.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section6.retention.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section7.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section7.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section8.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section8.types.title')}</h3>
        <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
          <li><strong>{t('privacy.section8.types.necessary')}</strong> {t('privacy.section8.types.necessaryDesc')}</li>
          <li><strong>{t('privacy.section8.types.analytical')}</strong> {t('privacy.section8.types.analyticalDesc')}</li>
          <li><strong>{t('privacy.section8.types.functional')}</strong> {t('privacy.section8.types.functionalDesc')}</li>
        </ul>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section8.consent.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section8.consent.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('privacy.section8.manage.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section8.manage.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section9.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section9.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section10.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section10.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('privacy.section11.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('privacy.section11.content')}
        </p>
        <div className="bg-panel rounded-lg p-4 mb-6">
          <p className="text-ink font-medium mb-2">Veloxgi</p>
          <p className="text-ink mb-1">
            <strong>{t('privacy.contact.email')}:</strong>{' '}
            <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
              veloxgi.com@gmail.com
            </a>
          </p>
          <p className="text-ink mb-1">
            <strong>{t('privacy.contact.phone')}:</strong>{' '}
            <a href="tel:+573227858583" className="text-bold hover:underline">
              +57 322 785 8583
            </a>
          </p>
        </div>
      </section>

      <div className="border-t border-line pt-8 mt-12">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-bold  hover:text-bold600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('commonPages.backToHome')}
          </Link>
          <Link 
            href="/terms" 
            className="inline-flex items-center gap-2 text-bold hover:text-bold600 transition-colors"
          >
            {t('commonPages.viewTerms')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

