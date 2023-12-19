import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const Store = configureStore({
  reducer: {
    cartState: cartSlice.reducer,
  },
});
