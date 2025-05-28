import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-black shadow-md">

      {/* Brand */}
      <h1 className="text-2xl font-bold text-white tracking-widest">
        <span className="text-emerald-400">Recipe</span>App
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-400 font-medium border-b-2 border-emerald-400 pb-1"
              : "text-gray-300 hover:text-emerald-300 transition-all"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-400 font-medium border-b-2 border-emerald-400 pb-1"
              : "text-gray-300 hover:text-emerald-300 transition-all"
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-400 font-medium border-b-2 border-emerald-400 pb-1"
              : "text-gray-300 hover:text-emerald-300 transition-all"
          }
        >
          About
        </NavLink>
      </div>

      {/* Create Button */}
      <div className="px-4 py-2 border border-emerald-400 rounded-full hover:bg-emerald-400 hover:text-black transition-all">
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive
              ? "text-blue-200 font-semibold"
              : "text-white hover:text-black"
          }
        >
          Create Recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
