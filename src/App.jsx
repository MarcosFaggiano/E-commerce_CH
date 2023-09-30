import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo/saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <saludo nombre="coders" />

    </>
  )
}

export default App






