import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
  user:null,
  useruid:null,
  mobile: null,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,

  reducers: {
    productLoader: (state, action) => {
      state.detail = action.payload;
    },

    SET_USER: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    SET_USERUID: (state, action) => {
      return {
        ...state,
        useruid: action.payload,
      };
    },
    SET_USER_MOBILE: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

export const { productLoader, SET_USER, SET_USER_MOBILE,SET_USERUID } = detailSlice.actions;

export const selectDetails = (state) => state.detail.detail;
export const selectUser = (state) => state.detail.user;
export const selectUserUid = (state) => state.detail.useruid;
export const selectMobile = (state) => state.detail.mobile;

export default detailSlice.reducer;
