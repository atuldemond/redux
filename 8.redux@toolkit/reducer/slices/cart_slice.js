import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        state[existingItemIndex].quantity += action.payload.quantity || 1;
      } else {
        // Item does not exist, add new item with quantity set to action.payload.quantity or default to 1
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseCartItemQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseCartItemQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
