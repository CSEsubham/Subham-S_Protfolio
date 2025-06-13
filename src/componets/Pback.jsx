/* eslint-disable no-unused-vars */
import React from 'react'
import {motion as Motion,useScroll, useSpring, useTransform} from "motion/react"
import { s } from 'motion/react-m';

export default function Pback() {
  const { scrollYProgress } = useScroll();
  const x=useSpring(scrollYProgress,{damping:50})
  const moutain3y=useTransform(x,[0,0.5],["0%","70%"]);
  const planetx=useTransform(x,[0,0.5],["0%","-40%"]);
  const moutain1y=useTransform(x,[0,0.5],["0%","10%"]);
  const moutain2y=useTransform(x,[0,0.5],["0%","30%"]);
  const astrox=useTransform(x,[0,0.5],["0%","30%"])
  return (
   
    <div className='absolute inset-0 bg-black/40'>
    <div className='relative h-screen overflow-y-hidden'>
        <div className='absolute w-full h-screen inset-0 -z-50'
        style={{backgroundImage:"url(../../public/assets/jjl3.jpg)", backgroundSize: "cover",backgroundPosition:"bottom"}}
        >

        </div>
       
        <Motion.div className='absolute  inset-0 -z-40'
        style={{backgroundImage:"url(../../public/assets/mountain-3.png)", backgroundSize: "cover",backgroundPosition:"bottom",y:moutain3y}}
        
        >

        </Motion.div>
        <Motion.div className='absolute  inset-0 -z-30'
        style={{backgroundImage:"url(../../public/assets/planets.png)", backgroundSize: "cover",backgroundPosition:"bottom",x:planetx}}
        >

        </Motion.div>
        <Motion.div className='absolute  inset-0 -z-20'
        style={{backgroundImage:"url(../../public/assets/mountain-2.png)", backgroundSize: "cover",backgroundPosition:"bottom",y:moutain2y}}
        >

        </Motion.div>
        <Motion.div className='absolute  inset-0 -z-10'
        style={{backgroundImage:"url(../../public/assets/mountain-1.png)", backgroundSize: "cover",backgroundPosition:"bottom" ,y:moutain1y}}
        >
        <Motion.div className='absolute right-0 top-0 h-full py-10 object-contain -z-5 inset-0'
        style={{backgroundImage:"url(../../public/assets/astro.png)", backgroundSize: "cover",backgroundPosition:"bottom",x:astrox}}
        
        ></Motion.div>

        </Motion.div>
    </div>
      
    </div>
    
  )
}
