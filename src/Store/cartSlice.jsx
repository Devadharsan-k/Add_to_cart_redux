import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    add(state, action) {
      const temp = state.filter((item) => item.name === action.payload.name);
      if (temp.length < 1) {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.name != action.payload.name);
    },
    reset(state, action) {
      return [];
    },
  },
});

export default cartSlice;
