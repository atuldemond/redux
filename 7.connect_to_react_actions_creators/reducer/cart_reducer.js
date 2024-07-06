//ACTIONS TYPES------------------------>

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_INCREASE_ITEM_QUANTITY = "CART_INCREASE_ITEM_QUANTITY";
export const CART_DECREASE_ITEM_QUANTITY = "CART_DECREASE_ITEM_QUANTITY";
//ACTONS CREATORS----------------------->

export function add_to_cart(id, quantity = 1) {
  return { type: ADD_TO_CART, payload: { id: id, quantity: quantity } };
}

export function remove_from_cart(id) {
  return { type: REMOVE_FROM_CART, payload: id };
}

export function decrease_cart_item_quantity(payload) {
  return { type: CART_DECREASE_ITEM_QUANTITY, payload };
}
export function increase_cart_item_quantity(payload) {
  return { type: CART_INCREASE_ITEM_QUANTITY, payload };
}

//REDUCERS---------------------------->
export const cart_reducer = (state = [], action) => {
  try {
    switch (action.type) {
      case ADD_TO_CART:
        // Check if the item already exists in the cart
        try {
          const existingItem = state.find(
            (item) => item.id === action.payload.id
          );

          if (existingItem) {
            // Item exists, update quantity
            return state.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // Item does not exist, add new item with quantity set to action.payload.quantity or default to 1
            return [
              ...state,
              { ...action.payload, quantity: action.payload.quantity || 1 },
            ];
          }
        } catch (error) {
          console.error(
            "An error occurred while processing ADD_TO_CART:",
            error
          );
          return state;
        }

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
