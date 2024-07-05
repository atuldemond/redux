import React from "react";
import Product from "./Product";
// import { product_list } from "../data/product_list";
import "../style/css/app.css";
import { useSelector } from "react-redux";

const App = () => {
  const product_list = useSelector((state) => state.product_list);
  return (
    <div id="main">
      {product_list.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            rating={product.rating.rate}
            price={product.price}
            imageurl={product.image}
          />
        );
      })}
    </div>
  );
};

export default App;
