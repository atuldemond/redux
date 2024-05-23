import React from "react";
import { combineReducers, createStore } from "redux";
import { productList } from "./File_Data";
import cartReducer, {
  CART_ADD_ITEM,
  CART_ADD_ITEM_QUANTITY,
  CART_REMOVE_ITEM,
  CART_SUB_ITEM_QUANTITY,
  addIteminCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeIteminCart,
} from "./cartReducer";
import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
  wishLIstAdditem,
  wishLIstRemoveitem,
} from "./wishList";
import productsReducer from "./productsReducer";

const Script = () => {
  // let initialstate = {
  //   products: productList,
  //   cartItem: [],
  //   wishList: [],
  // };
  // const CART_ADD_ITEM = "cart/addItem";
  // const CART_REMOVE_ITEM = "cart/removeItem";
  // const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
  // const CART_SUB_ITEM_QUANTITY = "cart/subItemQuantity";

  // const WISHLIST_ADD_ITEM = "wishlist/addItem";
  // const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

  // //   const inc = "moreadd "
  // function reducer(state = initialstate, actions) {
  //   switch (actions.type) {
  //     case CART_ADD_ITEM:
  //       return { ...state, cartItem: [...state.cartItem, actions.payload] };

  //     case CART_REMOVE_ITEM:
  //       return {
  //         ...state,
  //         cartItem: state.cartItem.filter((value) => {
  //           return value.productId !== actions.payload.productId;
  //         }),
  //       };

  //     case CART_ADD_ITEM_QUANTITY:
  //       return {
  //         ...state,
  //         cartItem: state.cartItem.map((cartItem) => {
  //           if (cartItem.productId === actions.payload.productId) {
  //             return {
  //               ...cartItem,
  //               quantity: cartItem.quantity + 1,
  //             };
  //           }
  //           return cartItem;
  //         }),
  //       };

  //     case CART_SUB_ITEM_QUANTITY:
  //       return {
  //         ...state,
  //         cartItem: state.cartItem.map((cartItem) => {
  //           if (cartItem.productId === actions.payload.productId) {
  //             return {
  //               ...cartItem,
  //               quantity: cartItem.quantity - 1,
  //             };
  //           }
  //           return cartItem;
  //         }).filter((cartItem)=>cartItem.quantity >0)
  //       };
  //     case WISHLIST_ADD_ITEM:
  //       return { ...state, wishList: [...state.wishList, actions.payload] };

  //     case WISHLIST_REMOVE_ITEM:
  //       return {
  //         ...state,
  //         wishList: state.wishList.filter((value) => {
  //           return value.productId !== actions.payload.productId;
  //         }),
  //       };
  //     default:
  //       return state;
  //   }
  // }
  const reducer = combineReducers({
    products: productsReducer,
    carts: cartReducer,
    whishlist: wishListReducer,
  });

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

  store.dispatch(addIteminCart(8, 2));
  store.dispatch(addIteminCart(6, 2));
  store.dispatch(addIteminCart(7, 2));
  store.dispatch(removeIteminCart(8, 1));
  store.dispatch(increaseCartItemQuantity(6));
  store.dispatch(decreaseCartItemQuantity(6));
  store.dispatch(wishLIstAdditem(8));
  store.dispatch(wishLIstAdditem(6));
  store.dispatch(wishLIstAdditem(7));
  store.dispatch(wishLIstRemoveitem(8));

  console.log(store.getState());

  return <div></div>;
};

export default Script;
