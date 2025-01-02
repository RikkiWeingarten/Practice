import { useState } from 'react'

import './App.css'
import Tasks from './features/tasks/tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasks></Tasks>
    </>
  )
}

export default App
