import React from "react";
import { createStore } from "redux";
import { productList } from "./File_Data";

const Script = () => {
  let initialstate = {
    products: productList,
    cartItem: [],
    wishList: [],
  };
  const CART_ADD_ITEM = "cart/addItem";
  const CART_REMOVE_ITEM = "cart/removeItem";
  const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
  const CART_SUB_ITEM_QUANTITY = "cart/subItemQuantity";

  const WISHLIST_ADD_ITEM = "wishlist/addItem";
  const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

  //   const inc = "moreadd "
  function reducer(state = initialstate, actions) {
    switch (actions.type) {
      case CART_ADD_ITEM:
        return { ...state, cartItem: [...state.cartItem, actions.payload] };

      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItem: state.cartItem.filter((value) => {
            return value.productId !== actions.payload.productId;
          }),
        };

      case CART_ADD_ITEM_QUANTITY:
        return {
          ...state,
          cartItem: state.cartItem.map((cartItem) => {
            if (cartItem.productId === actions.payload.productId) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              };
            }
            return cartItem;
          }),
        };

      case CART_SUB_ITEM_QUANTITY:
        return {
          ...state,
          cartItem: state.cartItem.map((cartItem) => {
            if (cartItem.productId === actions.payload.productId) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          }).filter((cartItem)=>cartItem.quantity >0)
        };
      case WISHLIST_ADD_ITEM:
        return { ...state, wishList: [...state.wishList, actions.payload] };

      case WISHLIST_REMOVE_ITEM:
        return {
          ...state,
          wishList: state.wishList.filter((value) => {
            return value.productId !== actions.payload.productId;
          }),
        };
      default:
        return state;
    }
  }

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

  store.dispatch({
    type: CART_ADD_ITEM,
    payload: { productId: 1, quantity: 1 },
  });

  store.dispatch({
    type: CART_ADD_ITEM,
    payload: { productId: 6, quantity: 1 },
  });

  store.dispatch({
    type: CART_ADD_ITEM,
    payload: { productId: 10, quantity: 1 },
  });

  store.dispatch({
    type: CART_REMOVE_ITEM,
    payload: { productId: 10, quantity: 5 },
  });
  store.dispatch({
    type: CART_ADD_ITEM_QUANTITY,
    payload: { productId: 6 },
  });
  store.dispatch({
    type: CART_ADD_ITEM_QUANTITY,
    payload: { productId: 6 },
  });

  store.dispatch({
    type: CART_SUB_ITEM_QUANTITY,
    payload: { productId: 6 },
  });

  store.dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: { productId: 1 },
  });

  store.dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: { productId: 2 },
  });

  store.dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: { productId: 3 },
  });

  store.dispatch({
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId: 2 },
  });

  return <div></div>;
};

export default Script;
