import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, image, title, description, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/detail/${id}`}
      className="block w-72 bg-white rounded-lg shadow-lg overflow-hidden  transform transition duration-300 hover:scale-105"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-3">
        {/* Title and Chef */}
        <div className="mb-1">
          <h1 className="text-lg font-bold text-gray-800 mb-0.5 line-clamp-1">
            {title}
          </h1>
          <small className="text-gray-600 italic text-xs">By {chef}</small>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {description}
          <span className="text-blue-500 hover:text-blue-700 font-medium ml-1">
            read more
          </span>
        </p>

        {/* Ingredients Preview */}
        {/* <div className="flex flex-wrap gap-1 mt-2">
          {ingredients?.slice(0, 2).map((ingredient, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded-full"
            >
              {ingredient}
            </span>
          ))}
          {ingredients?.length > 2 && (
            <span className="text-gray-500 text-xs">
              +{ingredients.length - 2} more
            </span>
          )}
        </div> */}
      </div>
    </Link>
  );
};

export default Card;
