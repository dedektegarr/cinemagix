import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { toggleNavMobile: false },
  reducers: {
    toggle(state) {
      state.toggleNavMobile = !state.toggleNavMobile;
      document.body.classList.toggle("mobile-nav-open");
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
