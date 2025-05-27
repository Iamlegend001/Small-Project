import React, { createContext, useState } from "react";

// Create the context
export const recipeContext = createContext(null);

const RecipeProvider = (props) => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeProvider;
