'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function TermsContent() {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'

  // Format date based on language
  const lastUpdated = new Date().toLocaleDateString(
    isEnglish ? 'en-US' : 'es-ES',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <>
      <h1 className="text-4xl font-bold text-ink mb-4">{t('terms.title')}</h1>
      <p className="text-muted text-sm mb-8">
        {t('terms.lastUpdated')}: {lastUpdated}
      </p>

      <p className="text-ink leading-relaxed mb-6">
        {t('terms.intro')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section1.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section1.eligibility.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section1.eligibility.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section1.license.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section1.license.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section1.prohibited.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section1.prohibited.intro')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
          <li>{t('terms.section1.prohibited.item1')}</li>
          <li>{t('terms.section1.prohibited.item2')}</li>
          <li>{t('terms.section1.prohibited.item3')}</li>
          <li>{t('terms.section1.prohibited.item4')}</li>
          <li>{t('terms.section1.prohibited.item5')}</li>
          <li>{t('terms.section1.prohibited.item6')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section2.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section2.waitlist.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section2.waitlist.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section2.dataUse.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section2.dataUse.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section2.optOut.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section2.optOut.content')}{' '}
          <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
            veloxgi.com@gmail.com
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section3.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section3.ownership.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section3.ownership.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section3.restrictions.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section3.restrictions.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section4.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section4.warranty.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section4.warranty.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section4.liability.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section4.liability.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section5.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section5.breach.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section5.breach.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section5.effect.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section5.effect.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section6.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section6.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section7.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section7.law.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section7.law.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section7.consumerRights.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section7.consumerRights.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section7.disputes.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section7.disputes.content')}{' '}
          <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
            veloxgi.com@gmail.com
          </a>. {t('terms.section7.disputes.ifNot')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
          <li>{t('terms.section7.disputes.item1')}</li>
          <li>
            {t('terms.section7.disputes.item2')}{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-bold hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </li>
          <li>{t('terms.section7.disputes.item3')}</li>
        </ul>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section7.language.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section7.language.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section8.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section8.consumers.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section8.consumers.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section8.waiver.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section8.waiver.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section8.howTo.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section8.howTo.content')}{' '}
          <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
            veloxgi.com@gmail.com
          </a> {t('terms.section8.howTo.with')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section9.title')}</h2>
        
        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section9.description.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section9.description.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section9.availability.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section9.availability.content')}
        </p>

        <h3 className="text-xl font-medium text-ink mb-3">{t('terms.section9.changes.title')}</h3>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section9.changes.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">{t('terms.section10.title')}</h2>
        <p className="text-ink mb-4 leading-relaxed">
          {t('terms.section10.content')}
        </p>
        <div className="bg-panel rounded-lg p-4 mb-6">
          <p className="text-ink font-medium mb-2">Veloxgi</p>
          <p className="text-ink mb-1">
            <strong>{t('terms.contact.email')}:</strong>{' '}
            <a href="mailto:veloxgi.com@gmail.com" className="text-bold hover:underline">
              veloxgi.com@gmail.com
            </a>
          </p>
          <p className="text-ink mb-1">
            <strong>{t('terms.contact.phone')}:</strong>{' '}
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
            className="inline-flex items-center gap-2 text-bold hover:text-bold600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('commonPages.backToHome')}
          </Link>
          <Link 
            href="/privacy" 
            className="inline-flex items-center gap-2 text-bold hover:text-bold600 transition-colors"
          >
            {t('commonPages.viewPrivacy')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

