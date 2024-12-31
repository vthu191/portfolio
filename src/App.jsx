import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Background from './components/background/background'
import Aboutme from './components/aboutme/Aboutme'
import Experience from './components/experience/Experience'
import Technical from './components/technical/Technical'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Background />
      <Aboutme />
      <Technical />
      <Experience />
    </>
  )
}

export default App
