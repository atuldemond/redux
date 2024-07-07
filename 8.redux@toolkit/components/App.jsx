import React from "react";
import Product from "./Product";
// import { product_list } from "../data/product_list";
import "../style/css/app.css";
import { useSelector } from "react-redux";
import Navbar from "../utils/Navbar";
import Cart from "./Cart";

const App = () => {
  const product_list = useSelector((state) => state.product_list);
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
};

export default App;
