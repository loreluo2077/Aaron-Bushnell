'use client'

import React, { useState } from 'react'

interface TextCarouselProps {
  texts: string[]
}

const TextCarousel: React.FC<TextCarouselProps> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstText = currentIndex === 0
    const newIndex = isFirstText ? texts.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastText = currentIndex === texts.length - 1
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
            <p>{texts[currentIndex]}</p>
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
