import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  cartDrawerOpen: boolean;
}

const initialState: CartState = {
  cartDrawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.cartDrawerOpen = true;
    },
    closeCartDrawer: (state) => {
      state.cartDrawerOpen = false;
    },
  },
});

export const { openCartDrawer, closeCartDrawer } = cartSlice.actions;

export default cartSlice.reducer;
