
import axios from "../utlis/axios.jsx";
import React, { useEffect } from "react";

const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    console.log("home.jsx Mounted")
    getproduct()

    return ()=>{
      console.log("Home.jsx Unmount")
    }
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}> get product</button>
    </div>
  );
};

export default Home;
