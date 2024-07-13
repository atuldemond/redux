import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar-container">
      <div className={`navbar ${showNavbar ? "show" : ""}`}>
        <div className="menu-icon" onClick={handleNavbar}>
          {showNavbar ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`links-container ${showNavbar ? "show-links" : ""}`}>
          <Link className="link" to="/" onClick={() => setShowNavbar(false)}>
            Home
          </Link>
          <Link
            className="link"
            to="/about"
            onClick={() => setShowNavbar(false)}
          >
            About
          </Link>
          <Link
            className="link"
            to="/contact"
            onClick={() => setShowNavbar(false)}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={`content ${showNavbar ? "content-hidden" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
