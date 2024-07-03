export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_INCREASE_ITEM_QUANTITY = "CART_INCREASE_ITEM_QUANTITY";
export const CART_DECREASE_ITEM_QUANTITY = "CART_DECREASE_ITEM_QUANTITY";

export const cart_reducer = (state = [], action) => {
  try {
    switch (action.type) {
      case ADD_TO_CART:
        // Assuming action.payload is the item to add
        return [...state, action.payload];

      case REMOVE_FROM_CART:
        // Filter out the item with the matching id
        return state.filter((item) => item.id !== action.payload);

      case CART_INCREASE_ITEM_QUANTITY:
        // Increase quantity of the item with the matching id
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      case CART_DECREASE_ITEM_QUANTITY:
        // Decrease quantity of the item with the matching id
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
            : item
        );

      default:
        return state;
    }
  } catch (error) {
    console.error("An error occurred in the cart reducer:", error);
    return state;
  }
};
