
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import Motorcycles from '../pages/Motorcycles'
import Accessories from '../pages/Accessories'
import Clothing from '../pages/Clothing'
import Owners from '../pages/Owners'
import Discover from '../pages/Discover'
import Racing from '../pages/Racing'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/motorcycle' element={<Motorcycles/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
        <Route path='/owners' element={<Owners/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/racing' element={<Racing/>}/>
      </Routes>

    </div>
  )
}

export default MainRouter
