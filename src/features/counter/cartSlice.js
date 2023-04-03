import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  subTotal: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
      // localStorage.setItem("cartData", state.cart);
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id != payload.id);
    },
    increaseQty: (state, { payload }) => {
      [
        state.cart.map((item) => {
          if (item.id === payload.id) {
            item.qty = item.qty + 1;
          }
          return item;
        }),
      ];
    },
    decreaseQty: (state, { payload }) => {
      [
        state.cart.map((item) => {
          if (item.id === payload.id && item.qty > 1) {
            item.qty = item.qty - 1;
          }
          return item;
        }),
      ];
    },
    emptyCart: (state, { payload }) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
