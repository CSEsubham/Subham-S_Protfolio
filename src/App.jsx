import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Internship from './sections/Internship'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import { Toaster } from 'sonner'  


export default function App() {
  return (
    <>


     <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1rem",
            borderRadius: "8px",
            padding: "16px",
            background: "#111",
            color: "#fff",
            border: "1px solid #7F00FF",
            boxShadow: "0 0 12px #8A2BE2",
          },
          className: "font-bold tracking-wide",
        }}
      />

      <div className="container mx-auto max-w-7xl z-999">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Internship />
        <Contact />
        <Footer />
      </div>

    </>
  )
}
