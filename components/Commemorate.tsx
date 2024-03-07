'use client'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { useForm } from 'react-hook-form'

export default function Commemorate() {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'all')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    data.lang = locale
    console.log(data)
    closeModal()
    fetch('/api/comme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // 处理提交成功的逻辑
          console.log('Data submitted successfully!')
          reset()
        } else {
          // 处理提交失败的逻辑
          console.error('Failed to submit data')
        }
      })
      .catch((error) => {
        console.error('An error occurred while submitting data:', error)
      })
      .finally(() => {})
  }

  const closeModal = function () {
    ;(document.getElementById('my_modal_2') as HTMLDialogElement)!.close()
  }
  const openModal = function () {
    ;(document.getElementById('my_modal_2') as HTMLDialogElement)!.showModal()
  }

  return (
    <>
      <button className="btn btn-outline btn-secondary" onClick={() => openModal()}>
        {t('commemorate')}
      </button>

      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex justify-center">
          <form
            method="dialog"
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* if there is a button in form, it will close the modal */}

            <input
              type="text"
              placeholder="name"
              className="input input-md input-bordered"
              defaultValue="anonymous"
              {...register('creator')}
            ></input>
            <textarea
              className="textarea  textarea-bordered textarea-md min-h-72 "
              placeholder=""
              {...register('content', { required: true, maxLength: 400 })}
            ></textarea>

            <button className="btn btn-accent btn-sm mt-5 ">submit</button>
            <button
              className="btn btn-circle btn-ghost btn-accent btn-sm absolute right-2 top-2"
              onClick={() => closeModal()}
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}
