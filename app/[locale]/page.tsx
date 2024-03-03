// 'use client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { createTranslation } from 'app/[locale]/i18n/server'
import Candle from '@/components/Candle'
import Stat from '@/components/Stat'
import TextCarousel from '@/components/TextCarousel'
import Share from '@/components/Share'
import Commemorate from '@/components/Commemorate'

type HomeProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'all')

  return (
    <div className="flex h-screen flex-col items-start">
      {/* <button className="btn btn-primary">Button</button> */}

      <div className="pt-5">
        {/* <div className="hero w-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src="static/images/1.jpeg" className=" rounded-lg shadow-2xl" />
            <div className="">
              <p>{t('message1')}</p>
              <p>{t('message2')}</p>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="">介绍</div> */}
      <div className="-mt-15 mx-auto">
        <Candle flame={false} size={0.6} />
      </div>
      <div className="m-auto px-5 text-center">
        <p>{t('lightCandle')}</p>
      </div>
      <div className="m-auto flex justify-center">
        <Stat view="100K" light={'80k'} commemorate={'10k'} />
      </div>
      <div className="m-auto ">
        <TextCarousel
          texts={[
            'n extreme act of protest but, compared to what people havebeen experiencing in Palestine at the hands of their colonizers, its not extreme atall. This is what our ruling class has deci',
            '2333222222222222333333334',
          ]}
        />
      </div>
      <div className="m-auto">
        <Commemorate />
      </div>

      <div className="m-auto ">
        <Share title={'11'} slug={'22'} />
      </div>
    </div>
  )
}
