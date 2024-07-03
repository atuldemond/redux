import { createStore, combineReducers } from "redux";

import {
  ADD_TO_CART,
  CART_DECREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  REMOVE_FROM_CART,
  cart_reducer,
} from "./reducer/cart_reducer";
import {
  ADD_TO_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
  whislist_reducer,
} from "./reducer/wishlist_reducer";
import { product_reducer } from "./reducer/product_reducer";

const main_reducer = combineReducers({
  product_list: product_reducer,
  cart_items: cart_reducer,
  wish_list: whislist_reducer,
});

const store = createStore(
  main_reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

store.subscribe(() => {
  console.log(store.getState());
});

try {
  store.dispatch({ type: ADD_TO_CART, payload: { id: 1, quantity: 1 } });
  store.dispatch({ type: ADD_TO_CART, payload: { id: 6, quantity: 1 } });
  store.dispatch({ type: ADD_TO_CART, payload: { id: 5, quantity: 1 } });
  store.dispatch({ type: REMOVE_FROM_CART, payload: 1 });
  store.dispatch({ type: REMOVE_FROM_CART, payload: 6 });
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: 5 });
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: 5 });
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: 5 });
  store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: 5 });
  //---------------------------------WHISLIST-------------ADDING--OR--REMOVING----------
  store.dispatch({
    type: ADD_TO_WISH_LIST,
    payload: { id: 1, name: "Product 1" },
  });
  store.dispatch({
    type: ADD_TO_WISH_LIST,
    payload: { id: 6, name: "Product 6" },
  });
  store.dispatch({
    type: ADD_TO_WISH_LIST,
    payload: { id: 5, name: "Product 5" },
  });
  store.dispatch({ type: REMOVE_FROM_WISH_LIST, payload: 1 });
  store.dispatch({ type: REMOVE_FROM_WISH_LIST, payload: 6 });
} catch (error) {
  console.error("An error occurred while dispatching actions:", error);
}
