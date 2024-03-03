'use client'

import { useState } from 'react'
type StatProps = {
  view: string
  light: string
  commemorate: string
}

export default function Stat({ view, light, commemorate }: StatProps) {
  return (
    <>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">View</div>
          <div className="stat-value">{view}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Ignited</div>
          <div className="stat-value text-orange-200">{light}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Commemorate</div>
          <div className="stat-value">{commemorate}</div>
        </div>
      </div>
    </>
  )
}
