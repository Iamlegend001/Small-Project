import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const {data} = useContext(recipeContext)


  const renderRecipes = data.map((recipe)=>{
    return(
      <div>{recipe.title}</div>
    )
  })
  return (
    <div>{renderRecipes}</div>
  )
}

export default Recipes