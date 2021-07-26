import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detailSlice";
import basketReducer from "../features/basketSlice";
import wishlistReducer from "../features/wishlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistConfig1 = {
  key: "root1",
  storage: storage,
};

const persistConfig2 = {
  key: "root2",
  storage: storage,
};

const detailedReducer = persistReducer(persistConfig, detailReducer);
const basketedReducer = persistReducer(persistConfig1, basketReducer);
const wishlistedReducer = persistReducer(persistConfig2, wishlistReducer);

export const store = configureStore({
  reducer: {
    detail: detailedReducer,
    basket: basketedReducer,
    wishlist: wishlistedReducer,
  },
});

export const persistor = persistStore(store);
