import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='info'>
      <h1>Weather Information</h1>
      </div>
    <Weather />
    </div>
  )
}

export default App
