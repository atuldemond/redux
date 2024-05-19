import React from "react";
import { createStore } from "redux";

const Script = () => {
  let initialstate = {
    post: 0,
    name: "Atul Demond",
    age: 26,
  };

  //   const inc = "moreadd "
  function reducer(state = initialstate, actions) {
    console.log(actions);
    if (actions.type === "incre") {
      return { ...state, post: state.post + 1 };
    } else if (actions.type === "decre") {
      return { ...state, post: state.post - 1 };
    } else if (actions.type === "moreadd") {
      //we can store "more add in variable also "
      return { ...state, post: state.post + actions.payload };
    } else if (actions.type === "moredec") {
      return { ...state, post: state.post - actions.payload };
    }
    return state;
  }

  const store = createStore(reducer);
  store.subscribe(() => {
    console.log(store.getState());
  });

  //   store.dispatch({ type: "incre" });

  store.dispatch({ type: "incre" });
  store.dispatch({ type: "moreadd", payload: 10 });
  store.dispatch({ type: "moredec", payload: 10 });
  return <div></div>;
};

export default Script;
