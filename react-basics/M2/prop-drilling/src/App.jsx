import { useState } from 'react'
import Theapp from './components/Theapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theapp />
    </>
  )
}

export default App
