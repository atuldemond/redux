import React from "react";

import "../style/css/header.css";
const Navbar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <header>
        <div className="logo">Logo</div>
        <div className="menu">
          <div className="wishlist">
            <span>0</span>
            <i class="fa-regular fa-2x  fa-heart"></i>
          </div>
          <div className="cart">
            <span>0</span>
            <i class="fa-solid fa-2x fa-cart-shopping"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
