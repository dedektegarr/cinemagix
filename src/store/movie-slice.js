import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    favorites: [],
    filters: { trending: "day", popular: "movie" },
  },
  reducers: {
    setFavorite(state) {
      const favoritesStorage = JSON.parse(localStorage.getItem("favorites"));
      if (favoritesStorage) {
        state.favorites = favoritesStorage;
      } else {
        localStorage.setItem("favorites", JSON.stringify([]));
      }
    },
    addFavorite(state, action) {
      const isFavoriteMovieExist = state.favorites.some(
        (favMovie) => favMovie.id === action.payload.id
      );

      if (!isFavoriteMovieExist) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        state.favorites = state.favorites.filter(
          (favMovie) => favMovie.id !== action.payload.id
        );
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    filterChange(state, action) {
      state.filters[action.payload.filterName] = action.payload.selectedFilter;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
