import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
      <ol>
        <li>Balcon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ol>
    </>
  )
}

export default App
