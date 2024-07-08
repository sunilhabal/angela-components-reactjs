import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import List from './components/List'
// import  {Pi,doublePi, triplePi} from './components/Math'
import * as Pi from './components/Math'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>PI value of:{Pi.default}</h1>
      <h2>PI value of:{Pi.doublePi()}</h2>
      <h3>PI value of:{Pi.triplePi()}</h3>
      <Heading />
      < List />
    </>
  )
}

export default App
