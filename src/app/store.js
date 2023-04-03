import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../features/counter/api_service";
import cartSlice from "../features/counter/cartSlice";

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
setupListeners(store.dispatch);
