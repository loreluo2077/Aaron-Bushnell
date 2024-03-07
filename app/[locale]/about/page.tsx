import { createTranslation } from 'app/[locale]/i18n/server'
import { LocaleTypes } from '../i18n/settings'

type AboutProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: AboutProps) {
  const { t } = await createTranslation(locale, 'all')

  return (
    <div className="container prose mx-auto mt-10 px-4">
      <p>{t('about1')} </p>
      <p>{t('about2')}</p>
      <p>{t('about3')}</p>

      <p className="pt-10">{t('about4')}</p>
      <p>{t('about5')} <span><a  href='https://x.com/loreluo2077/status/1765709743346040905?s=46&t=ZOKaD0FE_oyDoR3SZX7tTA'>here</a></span></p>
      {/* <p>{t('about6')}</p> */}

      <div className="container prose mx-auto"></div>
      <footer className="footer footer-center rounded bg-base-200  text-base-content">
        <aside>
          <p>Copyright © 2024 - {t('ps')}</p>
        </aside>
      </footer>
    </div>
  )
}
