import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Data from "../components/Data";
import Products from "../components/Products";

const Routing = () => {
  return (
    <div>
      <nav className="w-full h-[10vh] bg-red-400 flex justify-center gap-10 items-center">
        <Link
          className="bg-red-200 px-[2vw] py-[1vh] hover:bg-yellow-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="bg-red-200 px-[2vw] py-[1vh] hover:bg-yellow-200"
          to="/data"
        >
          Data
        </Link>

        <Link
          className="bg-red-200 px-[2vw] py-[1vh] hover:bg-yellow-200"
          to="/products"
        >
          Products
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Routing;
