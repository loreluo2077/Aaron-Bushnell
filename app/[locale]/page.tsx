'use client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import Candle from '@/components/Candle'
import Stat from '@/components/Stat'
import Commemorate from '@/components/TextCarousel'
import Share from '@/components/Share'

type HomeProps = {
  params: { locale: LocaleTypes }
}

export default function Page({ params: { locale } }: HomeProps) {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  // return <Main posts={posts} params={{ locale: locale }} />
  const { t } = useTranslation(locale, 'welcome')

  return (
    <div className="flex h-screen flex-col items-start">
      {/* <button className="btn btn-primary">Button</button> */}

      <div className="">
        <div className="hero ">
          <div className="hero-content  flex-col lg:flex-row">
            <img src="static/images/1.jpeg" className=" rounded-lg shadow-2xl" />
            <div className="">
              <p>{t('message1')}</p>
              <p>{t('message2')}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">介绍</div> */}
      <div className="mx-auto my-3">
        <Candle flame={false} size={0.6} />
      </div>
      <div>
        <p> 点亮一支蜡烛，为Aaron的勇气和牺牲献上你的敬意。</p>
      </div>
      <div className="m-auto flex justify-center">
        <Stat view="100K" light={'80k'} commemorate={'10k'} />
      </div>
      <div className="m-auto ">
        <Commemorate
          texts={[
            'n extreme act of protest but, compared to what people havebeen experiencing in Palestine at the hands of their colonizers, its not extreme atall. This is what our ruling class has deci',
            '2333222222222222333333334',
          ]}
        />
      </div>
      <div className="m-auto">
        <button
          className="btn btn-outline btn-secondary"
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          commemorate
        </button>

        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex justify-center">
            <form method="dialog" className="flex flex-col items-center">
              {/* if there is a button in form, it will close the modal */}
              <textarea
                className="textarea  textarea-md textarea-bordered min-h-72 "
                placeholder=""
              ></textarea>
              <button className="btn btn-sm btn-accent mt-5 ">submit</button>
              <button className="btn btn-sm btn-accent btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </dialog>
      </div>

      <div className="m-auto ">
        <Share title={'11'} slug={'22'} />
      </div>
    </div>
  )
}
