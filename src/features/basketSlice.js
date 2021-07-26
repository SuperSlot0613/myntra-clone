import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },

  reducers: {
    ADD_TO_BASKET: (state, action) => {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    },
    EMPTY_BASKET: (state) => {
      return {
        ...state,
        basket: [],
      };
    },
    REMOVE_FROM_BASKET: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); //Cut the same index to the newBasket by one
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in
              basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    },
  },
});

export const { ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET } =
  basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
