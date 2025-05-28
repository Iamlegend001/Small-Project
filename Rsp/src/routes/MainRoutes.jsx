import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

import Create from '../Pages/Create'
import Recipes from '../Pages/Recipes'
import SingleRecipe from '../Pages/SingleRecipe'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/detail/:id' element={<SingleRecipe/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
