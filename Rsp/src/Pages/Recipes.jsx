import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import Card from '../Components/Card';

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipe = data.map((recipe) => (
    <Card key={recipe.id} recipe={recipe}/>
  ));

  return (
    <div className='flex flex-wrap gap-2'>
      {renderRecipe}
    </div>
  );
};

export default Recipes;
