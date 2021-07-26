import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
    user: null,
  },

  reducers: {
    productLoader: (state, action) => {
      state.detail = action.payload;
    },

    SET_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { productLoader, SET_USER } = detailSlice.actions;

export const selectDetails = (state) => state.detail.detail;
export const selectUser = (state) => state.detail.user;

export default detailSlice.reducer;
