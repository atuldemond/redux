//Actions types :--------------

export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
export const CART_SUB_ITEM_QUANTITY = "cart/subItemQuantity";

//Actions Creators:-------------

export function removeIteminCart(productId, quantity = 1) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId, quantity },
  };
}
export function addIteminCart(productId, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}
export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ADD_ITEM_QUANTITY,
    payload: { productId },
  };
}
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_SUB_ITEM_QUANTITY,
    payload: { productId },
  };
}

//Reducers :---------------------
export default function cartReducer(state = [], actions) {
  switch (actions.type) {
    case CART_ADD_ITEM:
      return [...state, actions.payload];

    case CART_REMOVE_ITEM:
      return state.filter((value) => {
        return value.productId !== actions.payload.productId;
      });
    case CART_ADD_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === actions.payload.productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });

    case CART_SUB_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === actions.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
