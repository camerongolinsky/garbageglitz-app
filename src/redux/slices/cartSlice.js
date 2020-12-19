import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = { ...action.payload };
      const check = state.cart.filter((item) => item.id == cartItem.id);
      if (check.length === 0) {
        cartItem.quantity = 1;
        state.cart.push(cartItem);
      } else {
        check[0].quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.filter(
        (item) => item.id == action.payload
      )[0];
      if (cartItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
     
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;

export const getCartItems = (state) => state.products.products;

export default slice.reducer;
