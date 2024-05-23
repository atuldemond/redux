//Action Types :----------------
export const WISHLIST_ADD_ITEM = "wishlist/addItem";
export const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

//Action Creators :--------------
export function wishLIstAdditem(productId) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId },
  };
}

export function wishLIstRemoveitem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

//Reducers :------------------------
export default function wishListReducer(state = [], actions) {
  switch (actions.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, actions.payload];

    case WISHLIST_REMOVE_ITEM:
      return state.filter((value) => {
        return value.productId !== actions.payload.productId;
      });

    default:
      return state;
  }
}
