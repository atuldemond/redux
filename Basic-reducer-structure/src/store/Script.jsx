import React from "react";
import { createStore } from "redux";
import { productList } from "./File_Data";

const Script = () => {
  let initialstate = {
    products: productList,
    cartItem: [],
    wishList: [],
  };
  console.log(productList);
  const INCREMENT = "post/increment";
  const DECREMENT = "post/decrement";
  const POST_ADD = "post/add"; //+10
  const POST_SUB = "post/sub";

  //   const inc = "moreadd "
  function reducer(state = initialstate, actions) {
    console.log(actions);

    switch (actions.type) {
      case INCREMENT:
        return { ...state, post: state.post + 1 };

      case DECREMENT:
        return { ...state, post: state.post - 1 };

      case POST_ADD:
        return { ...state, post: state.post + actions.payload };

      case POST_SUB:
        return { ...state, post: state.post - actions.payload };

      default:
        return state;
    }
  }

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch({ type: INCREMENT });
  store.dispatch({ type: POST_ADD, payload: 10 });
  store.dispatch({ type: POST_ADD, payload: 10 });
  store.dispatch({ type: POST_SUB, payload: 5 });
  return <div></div>;
};

export default Script;
