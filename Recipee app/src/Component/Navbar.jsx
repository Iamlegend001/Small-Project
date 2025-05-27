import React from "react";
import Recipes from "./../Pages/Recipes";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-6 px-6 py-4 bg-gray-900 shadow-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 ${
            isActive ? "bg-gray-800 font-medium text-white" : ""
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/recipe"
        className={({ isActive }) =>
          `text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 ${
            isActive ? "bg-gray-800 font-medium text-white" : ""
          }`
        }
      >
        Recipes
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) =>
          `bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 ${
            isActive ? "bg-blue-700 font-medium" : ""
          }`
        }
      >
        Create
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 ${
            isActive ? "bg-gray-800 font-medium text-white" : ""
          }`
        }
      >
        About
      </NavLink>
    </div>
  );
};
export default Navbar;
