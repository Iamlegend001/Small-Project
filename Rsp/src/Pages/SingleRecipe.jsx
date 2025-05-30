import React, { useContext, useEffect } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id == params.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title || "",
      chef: recipe?.chef || "",
      image: recipe?.image || "",
      instruction: recipe?.instruction || "",
      description: recipe?.description || "",
      ingredients: recipe?.ingredients || "",
      category: recipe?.category || "",
    },
  });

  const onSubmit = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id == params.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...updatedRecipe };
    setData(copyData);
    toast.success("Recipe updated successfully!");
  };

  const deleteHandler = () => {
    const filteredData = data.filter((r) => r.id != params.id);
    setData(filteredData);
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  // if (!recipe) {
  //   return (
  //     <div className="min-h-screen flex justify-center items-center text-white text-xl">
  //       Loading...
  //     </div>
  //   );
  // }
  useEffect(()=>{
    console.log("home.jsx Mounted")
    // getproduct()

    return ()=>{
      console.log("Home.jsx Unmount")
    }
  },[])

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Recipe Info */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-6 text-center md:text-left">
            {recipe.title}
          </h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Edit Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 bg-zinc-900 p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Edit Recipe
          </h2>

          {/* Fields */}
          {[
            { id: "image", label: "Image URL", type: "url" },
            { id: "title", label: "Recipe Title", type: "text" },
            { id: "chef", label: "Chef Name", type: "text" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-emerald-300 font-medium mb-2"
              >
                {label}
              </label>
              <input
                id={id}
                {...register(id, { required: `${label} is required` })}
                type={type}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {errors[id] && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors[id].message}
                </p>
              )}
            </div>
          ))}

          {/* Textareas */}
          {[
            { id: "description", label: "Description" },
            {
              id: "ingredients",
              label: "Ingredients (comma-separated or new lines)",
            },
            { id: "instruction", label: "Instruction (step-by-step)" },
          ].map(({ id, label }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-emerald-300 font-medium mb-2"
              >
                {label}
              </label>
              <textarea
                id={id}
                {...register(id, { required: `${label} is required` })}
                placeholder={`Write ${label.toLowerCase()}...`}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {errors[id] && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors[id].message}
                </p>
              )}
            </div>
          ))}

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-emerald-300 font-medium"
            >
              Select Category
            </label>
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
            >
              <option value="">-- Choose a Category --</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="dessert">Dessert</option>
              <option value="beverage">Beverage</option>
              <option value="beverage">Beverage</option>
            </select>
            {errors.category && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-lg transition duration-300"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 mt-4"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
