import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Background from './components/background/background'
import Aboutme from './components/aboutme/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Background />
      <Aboutme />
    </>
  )
}

export default App
