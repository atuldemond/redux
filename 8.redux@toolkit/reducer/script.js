import { createStore, combineReducers } from "redux";

import { addToCart, cartSlice, removeFromCart } from "./slices/cart_slice";
import { wishlistSlice } from "./slices/wishlist_slice";
import { product_reducer } from "./slices/product_slice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    product_list: product_reducer,
    cart_items: cartSlice.reducer,
    wish_list: wishlistSlice.reducer,
  },
});



store.subscribe(() => {
  console.log(store.getState());
});


