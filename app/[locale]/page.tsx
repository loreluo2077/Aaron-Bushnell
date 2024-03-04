// 'use client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { createTranslation } from 'app/[locale]/i18n/server'
import Candle from '@/components/Candle'
import Stat from '@/components/Stat'
import TextCarousel from '@/components/TextCarousel'
import Share from '@/components/Share'
import Commemorate from '@/components/Commemorate'

async function getData() {
  const res = await fetch('http://www.loreluo.com/light/queryInfo', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// 增加页面的查看数
function incrementPageViews() {
  // 上报页面查看数到后台API
  fetch('http://www.loreluo.com/light/increaseViewNum')
}

type HomeProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'all')
  const value = await getData()
  console.log('data:' + JSON.stringify(value))
  incrementPageViews()
  return (
    <div className="flex h-screen flex-col items-start">
      {/* <button className="btn btn-primary">Button</button> */}

      <div className="pt-5">
        <div className="bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-10/12">
              <img src="static/images/1.jpeg" className="w-full rounded-lg shadow-2xl" />
            </div>

            <div className="">
              <p>{t('message1')}</p>
              <p>{t('message2')}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">介绍</div> */}
      <div className="-mt-15 mx-auto">
        <Candle flame={false} size={0.6} />
      </div>
      <div className="m-auto px-5 text-center">
        <p>{t('lightCandle')}</p>
      </div>
      <div className="m-auto flex justify-center">
        <Stat
          view={value.data.lightInfo.view_num}
          light={value.data.lightInfo.light_num}
          commemorate={value.data.lightInfo.commemorate_num}
        />
      </div>
      <div className="m-auto ">
        <TextCarousel commemorates={value.data.commemorates} />
      </div>
      {/* <div className="m-auto">
        <Commemorate />
      </div> */}

      <div className="m-auto ">
        <Share title={'11'} slug={'22'} />
      </div>
    </div>
  )
}
