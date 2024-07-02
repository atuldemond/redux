import { createStore } from "redux";

const initialState = {
  post: 0,
};

const INCREASE = "post/increase";
const DECREASE = "post/decrease";
const INCREASE_BY = "post/increase_by";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, post: state.post + 1 };
    case DECREASE:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: INCREASE_BY, payload: 10 });
