/* eslint-disable no-unused-vars */
import React from 'react'
import { motion as Motion, useScroll, useSpring, useTransform } from "motion/react"

export default function Pback() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const moutain3y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetx = useTransform(x, [0, 0.5], ["0%", "-40%"]);
  const moutain1y = useTransform(x, [0, 0.5], ["0%", "10%"]);
  const moutain2y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const astrox = useTransform(x, [0, 0.5], ["0%", "30%"]);

  return (
    <div className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>

        {/* Background Layer */}
        <div
          className='absolute w-full h-screen inset-0 -z-50'
          style={{
            backgroundImage: "url('/assets/jjl3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}
        />

        {/* Mountain 3 */}
        <Motion.div
          className='absolute inset-0 -z-40'
          style={{
            backgroundImage: "url('/assets/mountain-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: moutain3y
          }}
        />

        {/* Planets */}
        <Motion.div
          className='absolute inset-0 -z-30'
          style={{
            backgroundImage: "url('/assets/planets.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            x: planetx
          }}
        />

        {/* Mountain 2 */}
        <Motion.div
          className='absolute inset-0 -z-20'
          style={{
            backgroundImage: "url('/assets/mountain-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: moutain2y
          }}
        />

        {/* Mountain 1 & Astro */}
        <Motion.div
          className='absolute inset-0 -z-10'
          style={{
            backgroundImage: "url('/assets/mountain-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: moutain1y
          }}
        >
          <Motion.div
            className='absolute right-0 top-0 h-full py-10 object-contain -z-5 inset-0'
            style={{
              backgroundImage: "url('/assets/astro.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              x: astrox
            }}
          />
        </Motion.div>
      </div>
    </div>
  )
}
