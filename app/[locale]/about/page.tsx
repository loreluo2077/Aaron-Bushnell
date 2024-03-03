import { Metadata } from 'next'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'

type AboutProps = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: AboutProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'about')
  return genPageMetadata({
    title: t('about'),
    params: { locale: locale },
  })
}

export default async function Page({ params: { locale } }: AboutProps) {
  return (
    <div className="container prose mx-auto mt-10 px-4">
      <h3>记住Aaron Bushnell——一位勇敢的声音，为和平而自我牺牲</h3>
      <p>他的生命已经逝去,但是他的意志和愿望传播给了被影响的人</p>
      <p>我希望他的精神不灭,让更多人知道他的事迹</p>
      <p>我希望互联网是有记忆的 我希望人民真实的声音要发出来</p>
      <p>我希望他的意志可以延续,不久后的一天,我们可以在这个网站上看到这件事有一个完结</p>

      <div className="container prose mx-auto mt-20 px-4"></div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <aside>
          <p>Copyright © 2024 - 这个页面的广告收益将用来维持网站</p>
        </aside>
      </footer>
    </div>
  )
}
