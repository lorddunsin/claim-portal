import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col '>
        <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/:claimID" element={<Home />} />  
    </Routes>
    </div>
  )
}

export default App
