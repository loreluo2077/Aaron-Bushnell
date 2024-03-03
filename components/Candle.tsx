'use client'
import React from 'react'
import { useState } from 'react'

interface CandleProps {
  flame: boolean
  size: number
}

const Candle: React.FC<CandleProps> = ({ flame, size }) => {
  const [isLight, setLight] = useState(flame)

  return (
    <div
      className=""
      style={{ transform: `scale(${size})`, transformOrigin: 'center' }}
      onClick={() => {
        setLight(true)
      }}
    >
      <div className="container ">
        {/* {!flame && <div className="reminder-icon">12</div>} */}
        {/* 火焰 */}
        <div className="flame" style={{ display: isLight ? 'block' : 'none' }}>
          <div className="inner-flame"></div>
        </div>
        {/* 光晕 */}
        <div className="outer-glow" style={{ display: isLight ? 'block' : 'none' }}>
          <div className="outer-outer-glow"></div>
          <div className="inner-outer-glow"></div>
        </div>
        {/* 蜡烛主体 */}
        <div className="wick"></div>
        <div className="candle">
          {/* 蜡烛顶部 */}
          <div className="top">
            <div className="top_inner"></div>
          </div>
          <div className="bottom"></div>
          <div className="wax-drip" style={{ display: isLight ? 'block' : 'none' }}>
            <div className="falling-wax"></div>
          </div>
          <div className="wax-droppings" style={{ display: isLight ? 'block' : 'none' }}>
            <div className="more-droppings"></div>
          </div>
        </div>
        {/* 底盘 */}
        <div className="plate">
          <div className="plate-inner"></div>
        </div>
        <div className="plate-bottom"></div>
      </div>

      <style jsx>{`
        .container {
          width: 160px;
          height: 163px;
          margin-top: 38px;
          position: relative;
        }

        .candle {
          width: 80px;
          height: 140px;
          background: #a65a51;
          border-radius: 8px;
          position: relative;
          margin: auto;
          z-index: 3;
        }
        .candle .top {
          width: 80px;
          height: 18px;
          background: #b97871;
          border-radius: 100%;
          position: absolute;
          top: -4px;
          overflow: hidden;
        }
        .candle .top .top_inner {
          width: 80px;
          height: 16px;
          background: #c28882;
          border-radius: 100%;
          position: absolute;
          top: 4px;
        }
        .candle .bottom {
          width: 80px;
          height: 18px;
          background: #a65a51;
          border-radius: 100%;
          position: absolute;
          bottom: -4px;
        }
        .candle .wax-drip {
          width: 9px;
          height: 12px;
          background: #c7928c;
          position: absolute;
          top: 10px;
          left: 8px;
          border-radius: 80% 0 55% 50%/55% 0 80% 50%;
        }
        .candle .wax-drip .falling-wax {
          width: 6px;
          height: 6px;
          position: absolute;
          background: #c7928c;
          border-radius: 80% 0 55% 50%/55% 0 80% 50%;
          top: 8px;
          left: 1px;
          transform: rotateZ(-45deg) translateY(0);
          -webkit-animation: waxDrop 11s linear infinite;
          animation: waxDrop 11s linear infinite;
        }
        .candle .wax-droppings {
          width: 10px;
          height: 10px;
          position: absolute;
          background: #c7928c;
          bottom: -5px;
          border-radius: 80% 20% 55% 50%/55% 20% 80% 50%;
          left: 4px;
        }
        .candle .wax-droppings .more-droppings {
          width: 6px;
          height: 6px;
          position: absolute;
          background: #c7928c;
          bottom: -2px;
          border-radius: 80% 30% 55% 50%/55% 30% 80% 50%;
          left: 6px;
        }

        .wick {
          width: 4px;
          height: 15px;
          background: #111;
          position: absolute;
          z-index: 5;
          left: 50%;
          top: -8px;
          margin-left: -2px;
        }

        .flame {
          width: 18px;
          height: 18px;
          background: #ffd678;
          position: absolute;
          z-index: 6;
          border-radius: 80% 0 55% 50%/55% 0 80% 50%;
          left: 50%;
          top: -20px;
          margin-left: -9px;
          transform: rotateZ(-45deg);
          -webkit-animation: flameFlicker 0.9s ease infinite;
          animation: flameFlicker 0.9s ease infinite;
        }
        .flame .inner-flame {
          width: 10px;
          height: 10px;
          background: #d1835c;
          position: absolute;
          z-index: 8;
          border-radius: 80% 0 55% 50%/55% 0 80% 50%;
          left: 50%;
          margin-left: -7px;
          bottom: 2px;
          opacity: 0.4;
        }

        .outer-glow {
          width: 200px;
          height: 200px;
          background: #6e4247;
          position: absolute;
          border-radius: 100%;
          left: -20px;
          top: -120px;
          opacity: 0.2;
          -webkit-animation: glowFlicker 3.6s linear infinite;
          animation: glowFlicker 3.6s linear infinite;
          transform-origin: center center;
        }
        .outer-glow .outer-outer-glow {
          width: 622px;
          height: 622px;
          background: #6e4247;
          position: absolute;
          border-radius: 100%;
          left: 50%;
          margin-left: -311px;
          top: -200px;
          -webkit-animation: glowFlicker 3s linear infinite;
          animation: glowFlicker 3s linear infinite;
          transform-origin: center center;
        }
        .outer-glow .inner-outer-glow {
          width: 70px;
          height: 70px;
          background: #8e555c;
          position: absolute;
          border-radius: 100%;
          opacity: 1;
          left: 50%;
          margin-left: -35px;
          top: 60px;
        }

        .plate {
          width: 160px;
          height: 40px;
          background: #444;
          border-radius: 100%;
          position: absolute;
          bottom: 5px;
          z-index: 2;
        }
        .plate .plate-inner {
          width: 140px;
          height: 25px;
          background: #4e4e4e;
          border-radius: 100%;
          position: absolute;
          left: 50%;
          margin-left: -70px;
          bottom: 8px;
          z-index: 2;
        }

        .plate-bottom {
          width: 130px;
          height: 40px;
          background: #414141;
          border-radius: 50%;
          position: absolute;
          bottom: 3px;
          z-index: 1;
          left: 50%;
          margin-left: -65px;
        }

        @-webkit-keyframes flameFlicker {
          0%,
          100% {
            width: 16px;
            height: 17px;
          }
          25% {
            width: 19px;
            height: 17px;
          }
          50% {
            width: 17px;
            height: 16px;
          }
          75% {
            width: 17px;
            height: 19px;
          }
        }

        @keyframes flameFlicker {
          0%,
          100% {
            width: 16px;
            height: 17px;
          }
          25% {
            width: 19px;
            height: 17px;
          }
          50% {
            width: 17px;
            height: 16px;
          }
          75% {
            width: 17px;
            height: 19px;
          }
        }
        @-webkit-keyframes glowFlicker {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.22;
            transform: scale(1.02);
          }
        }
        @keyframes glowFlicker {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.22;
            transform: scale(1.02);
          }
        }
        @-webkit-keyframes waxDrop {
          0%,
          20%,
          35% {
            top: 0;
            transform: rotateZ(-45deg);
          }
          100% {
            top: 124px;
            transform: rotateY(-43deg);
          }
        }
        @keyframes waxDrop {
          0%,
          20%,
          35% {
            top: 0;
            transform: rotateZ(-45deg);
          }
          100% {
            top: 124px;
            transform: rotateY(-43deg);
          }
        }
        ::-moz-selection {
          background-color: #c7928c;
          color: #fff;
        }
        ::selection {
          background-color: #c7928c;
          color: #fff;
        }
      `}</style>
    </div>
  )
}
export default Candle
