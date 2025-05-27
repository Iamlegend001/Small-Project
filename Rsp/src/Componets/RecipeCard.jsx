import React from "react";
import { FaClock, FaUsers, FaStar, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  // Ensure we have an id, if not use a fallback
  const recipeId = recipe?.id || "default"; // Use optional chaining for safety

  // Add a check to ensure recipe and tags exist
  if (!recipe || !recipe.tags) {
    return null; // Or render a placeholder/error message
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-800">
          {recipe.category}
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>

        {/* Recipe Stats */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center">
            <FaStar className="mr-1 text-yellow-400" />
            <span>{recipe.rating}</span>
          </div>
        </div>

        {/* Recipe Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Recipe Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.instructions[0]}
        </p>

        {/* Recipe Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <FaUtensils className="mr-1" />
            <span>{recipe.cuisine}</span>
          </div>
          <Link
            to={`/recipe/detail/${recipeId}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
