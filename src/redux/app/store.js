import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
