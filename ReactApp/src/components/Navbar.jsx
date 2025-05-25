import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-start items-center gap-1 px-10 py-2 bg-[#000000] text-[0.9rem] sticky top-0 z-50">
      <NavLink
        // className={({ isActive }) =>
        //   `px-1 py-2 transition-colors font-medium ${
        //     isActive
        //       ? "text-white bg-gray-600"
        //       : "text-gray-300 hover:text-white hover:bg-gray-700"
        //   }`
        // }
        to="/"
      >
        <img src="/Picture/logo (1).svg" alt="Logo" className="h-10 w-30" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/motorcycle"
      >
        Motorcycles
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/accessories"
      >
        Accessories
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/clothing"
      >
        Clothing
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/owners"
      >
        Owners
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/discover"
      >
        Discover
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-1 py-2 transition-colors font-medium uppercase ${
            isActive
              ? "text-white bg-gray-600"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`
        }
        to="/racing"
      >
        Racing
      </NavLink>
    </div>
  );
};

export default Navbar;
