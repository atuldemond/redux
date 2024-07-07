// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // Check if the item already exists in the wishlist
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        // Item does not exist, add new item
        state.push(action.payload);
      }
      // If the item exists, do nothing
    },
    removeFromWishlist: (state, action) => {
      // Remove the item from the wishlist
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;
