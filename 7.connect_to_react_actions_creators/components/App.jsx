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
      <div id="main">
        {product_list.map((product) => {
          return (
            <Product
              key={product.id}
              product_id={product.id}
              title={product.title}
              rating={product.rating.rate}
              price={product.price}
              imageurl={product.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
