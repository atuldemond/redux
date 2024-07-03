import { createStore } from "redux";
import { product_list } from "./product_list";

const intial_state = {
  product_list: product_list,
  cart_items: [],
  wish_list: [],
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CART_INCREASE_ITEM_QUANTITY = "CART_INCREASE_ITEM_QUANTITY";
const CART_DECREASE_ITEM_QUANTITY = "CART_DECREASE_ITEM_QUANTITY";

const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

const reducer = (state = intial_state, action) => {
  console.log(action);
  try {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart_items: [...state.cart_items, action.payload],
        };

      case REMOVE_FROM_CART:
        return {
          ...state,
          cart_items: state.cart_items.filter(
            (item) => item.id !== action.payload
          ),
        };
      case CART_INCREASE_ITEM_QUANTITY:
        return {
          ...state,
          cart_items: state.cart_items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case CART_DECREASE_ITEM_QUANTITY:
        return {
          ...state,
          cart_items: state.cart_items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      case ADD_TO_WISH_LIST:
        return {
          ...state,
          wish_list: [...state.wish_list, action.payload],
        };

      case REMOVE_FROM_WISH_LIST:
        return {
          ...state,
          wish_list: state.wish_list.filter(
            (item) => item.id !== action.payload
          ),
        };
      default:
        return state;
    }
  } catch (error) {
    console.error("An error occurred in the reducer:", error);
    return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

store.subscribe(() => {
  console.log(store.getState());
});

try {
  store.dispatch({ type: "ADD_TO_CART", payload: { id: 1, quantity: 1 } });
  store.dispatch({ type: "ADD_TO_CART", payload: { id: 6, quantity: 1 } });
  store.dispatch({ type: "ADD_TO_CART", payload: { id: 5, quantity: 1 } });
  store.dispatch({ type: "REMOVE_FROM_CART", payload: 1 });
  store.dispatch({ type: "REMOVE_FROM_CART", payload: 6 });
  store.dispatch({ type: "CART_INCREASE_ITEM_QUANTITY", payload: 5 });
  store.dispatch({ type: "CART_INCREASE_ITEM_QUANTITY", payload: 5 });
  store.dispatch({ type: "CART_INCREASE_ITEM_QUANTITY", payload: 5 });
  store.dispatch({ type: "CART_DECREASE_ITEM_QUANTITY", payload: 5 });
  //---------------------------------WHISLIST-------------ADDING--OR--REMOVING----------
  store.dispatch({
    type: "ADD_TO_WISH_LIST",
    payload: { id: 1, name: "Product 1" },
  });
  store.dispatch({
    type: "ADD_TO_WISH_LIST",
    payload: { id: 6, name: "Product 6" },
  });
  store.dispatch({
    type: "ADD_TO_WISH_LIST",
    payload: { id: 5, name: "Product 5" },
  });
  store.dispatch({ type: "REMOVE_FROM_WISH_LIST", payload: 1 });
  store.dispatch({ type: "REMOVE_FROM_WISH_LIST", payload: 6 });
} catch (error) {
  console.error("An error occurred while dispatching actions:", error);
}
