import { useState } from 'react'
import './App.css'
import MovieCard from './Components/MovieCard'
import Home from './Pages/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Home></Home>
  </div>
  )

}


export default App
