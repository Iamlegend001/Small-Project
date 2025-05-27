import React, { useContext } from "react";
import { recipeContext } from "../Context/RecipeContext";
import RecipeCard from "../Componets/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  const renderrecipes = data.map((recipe) => (
    <div key={recipe.id}>
      <RecipeCard recipe={recipe} />
    </div>
  ));
  return <div>{renderrecipes}</div>;
};

export default Recipes;
