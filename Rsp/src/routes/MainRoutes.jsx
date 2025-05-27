import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import Create from "../Pages/Create";
import About from "../Pages/About";
import SingleRecipe from "../Pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/recipe/detail/:id" element={<SingleRecipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainRoutes;
