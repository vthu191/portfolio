import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Background from './components/background/background'
import Aboutme from './components/aboutme/Aboutme'
import Experience from './components/experience/Experience'
import Technical from './components/technical/Technical'
import Certifications from './components/certification/Certification'
import Working from './components/school/Working'
function App() {
  return (
    <>
      <Navbar />
      <Background />
      <Aboutme />
      <Working />
      <Technical />
      <Experience />
      <Certifications /> 
    </>
  )
}

export default App
