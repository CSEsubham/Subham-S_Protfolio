/* eslint-disable no-unused-vars */
import React,{useRef} from 'react'
import Cards from '../componets/Cards';
import { World } from '../componets/World';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TextBar } from '../componets/TextBar';




export default function About() {
    const grid2Container=useRef(null);
  return (
    <div className='c-space section-spacing  ' id="About">
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-14'>
            <div className='relative flex flex-col justify-end items-start grid-default-color grid-1 p-4 md:col-span-3 lg:col-span-2 z-25'> 
            <img src='../../public/assets/AboutMe-1.png' alt="1png" className='absolute top-0 right-0 opacity-20 md:opacity-50 scale-[1.5] md:scale-[1] lg:scale-[1.25] z-0 sm:scale-[0.1]'/>
          <div className='z-10'>
          <p className='headtext sm:text-base'>I'm M Subham Kumar</p>
          <p className='subtext sm:text-base '>a CSE student with a serious passion for building cool, useful, and smart stuff using code. I don’t just learn to pass exams — I learn to create, to experiment, and to solve real problems. I'm not from a fancy tech background, but what I do have is the hunger to learn, build, and improve — every single day.</p>
          </div>
            </div>
            <div className=' grid-default-color grid-2 z-20'>
            <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full "
          >
            <p className="flex items-end text-5xl text-gray-500 -z-20">
              Stack Skills
            </p>

{/* Technologies with Logos */}
<Cards
  style={{ rotate: "30deg", top: "70%", left: "70%" }}
  image="../../public/assets/logos/html11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-45deg", top: "70%", left: "25%" }}
  image="../../public/assets/logos/css11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-45deg", top: "5%", left: "10%" }}
  image="../../public/assets/logos/js11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "15deg", top: "15%", left: "60%" }}
  image="../../public/assets/logos/react11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "10deg", top: "50%", left: "80%" }}
  image="../../public/assets/logos/node11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-15deg", top: "25%", left: "5%" }}
  image="../../public/assets/logos/next11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "45deg", top: "80%", left: "10%" }}
  image="/../../public/assets/logos/git11.png"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "45deg", top: "80%", left: "10%" }}
  image="../../public/assets/logos/python11.png"
  containerRef={grid2Container}
/>

{/* Tools and Concepts with Text */}
<Cards
  style={{ rotate: "25deg", top: "0%", left: "35%" }}
  text="LangChain"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-25deg", top: "45%", left: "5%" }}
  text="Tailwind CSS"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "20deg", top: "60%", left: "15%" }}
  text="Power BI"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-10deg", top: "65%", left: "50%" }}
  text="Postman"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-5deg", top: "20%", left: "80%" }}
  text="Microsoft Excel"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "35deg", top: "5%", left: "65%" }}
  text="SQL"
  containerRef={grid2Container}
/>
<Cards
  style={{ rotate: "-35deg", top: "85%", left: "45%" }}
  text="AI & ML"
  containerRef={grid2Container}
/>

            </div>
             </div>
            <div className=' grid-black-color grid-3 z-25'> 
            <div className="z-10 w-[50%]">
            <p className="headtext">From:</p>
            <p className="subtext">
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <World />
          </figure>
            
            
            </div>
  <div className="grid-special-color grid-4 z-20">
  <div className="z-10 w-full max-w-[700px] flex flex-col items-center gap-6 px-4 py-8 mx-auto">

    {/* Heading */}
    <div>
      <h2 className="text-heading text-3xl font-bold text-white text-center">
        Let’s Connect
      </h2>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center items-center gap-4">
      
      {/* GitHub Button */}
      <button className="bg-white text-black hover:bg-black hover:text-white border-2 border-white px-4 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-xl">
        <a href="https://github.com/CSEsubham" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
      </button>

      {/* LinkedIn Button */}
      <button className="bg-white text-black hover:bg-blue-700 hover:text-white border-2 border-white px-4 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-xl">
        <a href="https://www.linkedin.com/in/subham-kumar-8048052a7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </button>

      {/* Email Button */}
      <button className="bg-white text-black hover:bg-red-600 hover:text-white border-2 border-white px-4 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-xl">
        <a href="mailto:mutnurisubham@gmail.com" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
      </button>

    </div>
  </div>
</div>
            <div className=' grid-default-color grid-5'> <TextBar  className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-2xl mx-auto sm:p-0 ">
  <div className="space-y-4">
    <h2 className="text-3xl font-extrabold text-blue-400 tracking-wide flex items-center gap-2 sm:text-xl">
      🎓 Education
    </h2>

    <div className="space-y-1">
      <h3 className="text-xl md:text-2xl font-semibold text-white">
        Gayatri Vidya Parishad College for Degree and PG Courses
      </h3>
      <p className="text-sm md:text-base text-gray-300">
        Bachelor of Technology (B.Tech) in Computer Science and Engineering
      </p>
      <p className="text-xs md:text-sm text-gray-400">
        Expected Graduation: 2026 · Visakhapatnam, Andhra Pradesh
      </p>
    </div>
  </div>
</TextBar></div>
      </div>
    </div>
  )
}
