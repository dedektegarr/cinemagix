import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { filters: { trending: "day", popular: "movie" } },
  reducers: {
    filterChange(state, action) {
      state.filters[action.payload.filterName] = action.payload.selectedFilter;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
