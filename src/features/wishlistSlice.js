import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },

  reducers: {
    ADD_TO_WISHLIST: (state, action) => {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    },
    EMPTY_WISHLIST: (state) => {
      return {
        ...state,
        wishlist: [],
      };
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      const index = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.payload
      );
      let newwishlist = [...state.wishlist];

      if (index >= 0) {
        newwishlist.splice(index, 1); 
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in
              wishlist`
        );
      }
      return {
        ...state,
        wishlist: newwishlist,
      };
    },
  },
});

export const { ADD_TO_WISHLIST, EMPTY_WISHLIST, REMOVE_FROM_WISHLIST } =
  wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer;
