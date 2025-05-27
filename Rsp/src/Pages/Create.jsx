import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(recipeContext);
  const Submithandler = (recipe) => {
    recipe.id = nanoid();

    setData([...data, recipe]);
    toast.success('New Recipe Created')
    reset();
    navigate("/racipe")
    // const formData = new FormData(e.target);
    // const data2 = {
    //   name: formData.get("name"),
    //   category: formData.get("category"),
    //   instructions: formData.get("instructions"),
    //   photoUrl: formData.get("photoUrl"),
    //   description: formData.get("description"),
    // };
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Recipe
      </h2>
      <form onSubmit={handleSubmit(Submithandler)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            name="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Instructions
          </label>
          <textarea
            {...register("instructions")}
            id="instructions"
            name="instructions"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="photoUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Photo URL
          </label>
          <input
            {...register("photoUrl")}
            type="url"
            id="photoUrl"
            name="photoUrl"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
