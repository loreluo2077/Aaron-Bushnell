'use client'

import React, { useState } from 'react'

interface Commemorate {
  creator: string
  create_time: string
  id: number
  lang: string
  content: string
}

interface TextCarouselProps {
  commemorates: Commemorate[]
}

const TextCarousel: React.FC<TextCarouselProps> = ({ commemorates }) => {
  console.log('--------' + commemorates)

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstText = currentIndex === 0
    const newIndex = isFirstText ? commemorates.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastText = currentIndex === commemorates.length - 1
    const newIndex = isLastText ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="carousel  flex  items-center justify-between">
      <div className="carousel-item  relative w-full">
        <div className="flex flex-col justify-center">
          <a onClick={goToPrevious} className="btn btn-circle">
            ❮
          </a>
        </div>

        <div className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <p>{commemorates[currentIndex].content}</p>
            <p className="text-right">- {commemorates[currentIndex].creator}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a onClick={goToNext} className="btn btn-circle flex items-center">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default TextCarousel
