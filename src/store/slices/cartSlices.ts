import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  showDrawerOpen: boolean;
}

const initialState: CartState = {
  showDrawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.showDrawerOpen = true;
    },
    closeCartDrawer: (state) => {
      state.showDrawerOpen = false;
    },
  },
});

export const { openCartDrawer, closeCartDrawer } = cartSlice.actions;

export default cartSlice.reducer;
