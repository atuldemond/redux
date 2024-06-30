import React from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
const Nav = () => {
  return (
    <div className="">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">services</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Nav;
