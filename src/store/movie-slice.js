import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { filter: { trending: "day" } },
  reducers: {
    filterChange(state, action) {
      state.filter.trending = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
