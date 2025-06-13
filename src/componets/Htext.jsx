import React from 'react'
import Flip from "./Flip"
import { motion as Motion } from "motion/react"


export default function Htext() {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      <div className='c-space flex-col md:flex hidden'>
        <Motion.h1
        initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.5}}
        className='text-white text-5xl font-bold mb-4 leading-tight' >
          Hi, I'm Subham Kumar 
        </Motion.h1>
        
        <div className='flex flex-col items-start'>
          <Motion.p  initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.7}} className='text-3xl font-medium text-neutral-400 mb-4'>
            A passionate developer and lifelong learner <br /> building <span className='text-white'>impactful</span> digital products.
          </Motion.p>

          <Motion.div className='mb-4 text-2xl font-semibold text-white' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.9}}>
            <Flip word={[
              "React & Full Stack Developer",
              "AI/ML Enthusiast",
              "Open Source Explorer",
              "Creative Problem Solver"
            ]} />
          </Motion.div>
          
          <Motion.p className='text-base text-white' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:1.1}}>
            Currently pursuing B.Tech CSE | Exploring React, AI, Full Stack, and building cool projects. <br />
            Let's connect and create something amazing!
          </Motion.p>
          <div>
            
          </div>
        </div>
      </div>
      <div className='flex flex-col md:hidden space-y-5'> 
      <Motion.h1 className='text-white text-5xl font-bold mb-4 leading-tight' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.5}}>
          Hi, I'm Subham Kumar 
        </Motion.h1>
        <div >
          <Motion.p className='text-3xl font-medium text-neutral-400 mb-4' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.7}}>
            A passionate developer and lifelong learner <br /> building <span className='text-white'>impactful</span> digital products.
          </Motion.p>

          <Motion.div className='mb-4 text-2xl font-semibold text-white text-center' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.9}} >
            <Flip word={[
              "React & Full Stack Developer",
              "AI/ML Enthusiast",
              "Open Source Explorer",
              "Creative Problem Solver"
            ]} />
          </Motion.div>
          
          <Motion.p className='text-4xl text-white' initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:1.1}}>
            Create Something Amazing!
          </Motion.p>
        </div>

      
      </div>
    </div>
  )
}
