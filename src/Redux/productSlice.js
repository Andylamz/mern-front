import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts(state, { payload }) {
      state.products = payload;
    },
  },
});

export const { addProduct, getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
