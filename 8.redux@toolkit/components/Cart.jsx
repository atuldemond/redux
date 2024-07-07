import React from "react";
import "../style/css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
} from "../reducer/slices/cart_slice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../reducer/slices/wishlist_slice";

const Cart = () => {
  const { product_list, cart_items } = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div className="cart-2">
      <h1>Items in Your Cart</h1>
      <hr />
      <button onClick={() => dispatch(addToCart({ id: 1, quantity: 1 }))}>
        Add to cart
      </button>{" "}
      <br />
      <br />
      <button onClick={() => dispatch(removeFromCart(1))}>
        Remove from cart
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(increaseCartItemQuantity(1))}>
        Increase quantity
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(decreaseCartItemQuantity(1))}>
        Decrease quantity
      </button>
      <hr />
      <hr />
      <br />
      <button
        onClick={() => dispatch(addToWishlist({ id: 1, title: "Product 1" }))}
      >
        Add to wishlist
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(removeFromWishlist(1))}>
        Remove from wishlist
      </button>
    </div>
  );
};

export default Cart;
