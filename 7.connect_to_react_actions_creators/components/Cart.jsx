import React from "react";
import "../style/css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease_cart_item_quantity,
  increase_cart_item_quantity,
  remove_from_cart,
} from "../reducer/cart_reducer";

const Cart = () => {
  const { product_list, cart_items } = useSelector((state) => state);
  const cartItemIds = cart_items.map((item) => item.id);
  const cartItems = product_list.filter((item) =>
    cartItemIds.includes(item.id)
  );
  console.log(cartItems);

  const dispatch = useDispatch();
  return (
    <div className="cart-2">
      <h1>Items in Your Cart</h1>
      <hr />

      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>

            <div className="title">
              <h2>{item.title}</h2>
              <div className="star">
                <div className="rating">{item.rating.rate}</div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p>${item.price}</p>
            <div className="quantity-plus-minus">
              <button
                onClick={() => dispatch(decrease_cart_item_quantity(item.id))}
              >
                -
              </button>
              <p>
                {cart_items.find((x) => x.id === item.id).quantity === 0
                  ? "1"
                  : cart_items.find((x) => x.id === item.id).quantity}
              </p>
              <button
                onClick={() => dispatch(increase_cart_item_quantity(item.id))}
              >
                +
              </button>
            </div>
            <div className="total">
              $
              {cart_items.find((x) => x.id === item.id).quantity *
                item.price ===
              0
                ? `${item.price} `
                : cart_items.find((x) => x.id === item.id).quantity *
                  item.price}
            </div>
            <div className="remove">
              <button onClick={() => dispatch(remove_from_cart(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
