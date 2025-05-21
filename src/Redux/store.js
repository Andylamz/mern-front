import { configureStore } from "@reduxjs/toolkit";
import api from "./api.js";
import productSlice from "./productSlice.js";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export default store;
