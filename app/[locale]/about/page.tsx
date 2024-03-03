import { createTranslation } from 'app/[locale]/i18n/server'
import { LocaleTypes } from '../i18n/settings'

type AboutProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: AboutProps) {
  const { t } = await createTranslation(locale, 'all')

  return (
    <div className="container prose mx-auto mt-10 px-4">
      <h3>{t('about1')} </h3>
      <p>{t('about2')}</p>
      <p>{t('about3')}</p>
      <p>{t('about4')}</p>
      <p>{t('about5')}</p>

      <div className="container prose mx-auto mt-20 px-4"></div>
      <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
        <aside>
          <p>Copyright © 2024 - {t('about6')}</p>
        </aside>
      </footer>
    </div>
  )
}
