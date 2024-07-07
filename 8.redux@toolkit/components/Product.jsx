import React from "react";
import "../style/css/product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/slices/cart_slice";

const Product = ({ product_id, title, rating, price, imageurl }) => {
  const dispatch = useDispatch();
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      ;
      <div id="card_box">
        <div className="card">
          <div id="img">
            <img src={imageurl} alt="" />
          </div>
          <h2>{title}</h2>
          <div className="title_rating_price">
            <div className="star">
              <div className="rating">{rating}</div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="price">{price}$</div>
          </div>
          <div id="btn">
            <button onClick={() => dispatch(addToCart(product_id))}>
              Add to Cart
            </button>
            <button>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
