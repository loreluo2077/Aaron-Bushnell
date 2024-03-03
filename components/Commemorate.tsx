'use client'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

export default function Commemorate() {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'all')

  return (
    <>
      <button
        className="btn btn-outline btn-secondary"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        {t('commemorate')}
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
    </>
  )
}
