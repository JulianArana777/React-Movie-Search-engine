import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './css/App.css'
import Home from './Pages/HomePage'
import Favorite from './Pages/FavoritePage'
import NavBar from './Components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    
    <div>
      
      <NavBar></NavBar>
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/favorites' element={<Favorite></Favorite>}></Route>
    </Routes>
  </main>
  </div>
  )

}


export default App
