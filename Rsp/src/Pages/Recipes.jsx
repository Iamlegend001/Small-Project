import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import Card from "../Components/Card";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipe = data.map((recipe) => (
    <Card key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {renderRecipe}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
