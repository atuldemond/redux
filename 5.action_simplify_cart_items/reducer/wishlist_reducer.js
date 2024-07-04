//ACTION TYPES-------------------->

export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
export const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

//ACTIONS CREATORS----------------->
export function add_to_wishlist(id, name) {
  return {
    type: ADD_TO_WISH_LIST,
    payload: { id: id, name: name },
  };
}
export function remove_from_wishlist(id) {
  return {
    type: REMOVE_FROM_WISH_LIST,
    payload: id,
  };
}

//REDUCERS---------------------->

export const whislist_reducer = (state = [], action) => {
  try {
    switch (action.type) {
      case ADD_TO_WISH_LIST:
        // Add the new item to the wish list
        return [...state, action.payload];

      case REMOVE_FROM_WISH_LIST:
        // Remove the item from the wish list
        return state.filter((item) => item.id !== action.payload);

      default:
        return state;
    }
  } catch (error) {
    console.error("An error occurred in the wishlist reducer:", error);
    return state;
  }
};
