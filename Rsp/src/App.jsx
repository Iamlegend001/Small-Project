import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='bg-black w-screen h-screen text-white p-10  '>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App
