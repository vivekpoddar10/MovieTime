import { createSlice } from "@reduxjs/toolkit";
import { addSearchMovieList } from "./movieSlice";

const searchMovie = createSlice({
  name: "search",
  initialState: {
    searchMovie: null,
    searchMovieList: null,
  },
  reducers: {
    addSearchMovieText(state, action) {
      state.searchMovie = action.payload;
    },
    addSearchMovieList(state, action) {
      state.searchMovieList = action.payload;
    },
  },
});

export const { addSearchMovieText, addSearchMovieList } = searchMovie.actions;

export default searchMovie.reducer;
