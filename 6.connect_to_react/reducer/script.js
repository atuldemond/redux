import { createStore, combineReducers } from "redux";

import {
  cart_reducer,
  increase_cart_item_quantity,
  decrease_cart_item_quantity,
  add_to_cart,
  remove_from_cart,
} from "./cart_reducer";
import {
  whislist_reducer,
  add_to_wishlist,
  remove_from_wishlist,
} from "./wishlist_reducer";
import { product_reducer } from "./product_reducer";

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

//-----------------------------ACTION CREATORS ----------------
const a = store.dispatch(increase_cart_item_quantity(5));
console.log(a);
const b = store.dispatch(decrease_cart_item_quantity(5));
console.log(b);
const c = store.dispatch(add_to_cart(6, 1));
console.log(c);
const d = store.dispatch(remove_from_cart(6));
console.log(d);
const e = store.dispatch(add_to_wishlist(6, "Product 6"));
console.log(e);
const f = store.dispatch(remove_from_wishlist(6));
console.log(f);
