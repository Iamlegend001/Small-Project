import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate()
  const { data, setData } = useContext(recipeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("New Recipe Created")
    reset();
    navigate("/recipes")
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-md text-white space-y-6"
      >
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Create a New Recipe
        </h2>

        {/* Image URL */}
        <div>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Image URL"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.image && (
            <small className="text-red-500">{errors.image.message}</small>
          )}
        </div>

        {/* Title */}
        <div>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe Title"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>
        <div>
          <input
            {...register("chef", { required: "Title is required" })}
            type="text"
            placeholder="Chef name"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>

        {/* Description */}
        <div>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Write Description here"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.description && (
            <small className="text-red-500">{errors.description.message}</small>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            {...register("ingredients", { required: "Ingredients are required" })}
            placeholder="Write ingredients"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.ingredients && (
            <small className="text-red-500">{errors.ingredients.message}</small>
          )}
        </div>

        {/* Instruction */}
        <div>
          <textarea
            {...register("instruction", { required: "Instruction is required" })}
            placeholder="Write instruction"
            className="w-full bg-transparent border-b border-zinc-600 p-2 focus:outline-none focus:border-emerald-400"
          />
          {errors.instruction && (
            <small className="text-red-500">{errors.instruction.message}</small>
          )}
        </div>

        {/* Category Section */}
        <div>
          <label className="block mb-1 text-emerald-300 font-medium">
            Select Category
          </label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full bg-zinc-800 border border-zinc-600 rounded-lg p-2 focus:outline-none focus:border-emerald-400 text-white"
          >
            <option value="">-- Choose a Category --</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
          </select>
          {errors.category && (
            <small className="text-red-500">{errors.category.message}</small>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 rounded-lg transition-colors"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
