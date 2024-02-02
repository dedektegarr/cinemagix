import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { filters: { trending: "day" } },
  reducers: {
    filterChange(state, action) {
      state.filters.trending = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
