import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovieList: null,
    popularMovieList: null,
    topRateMovieList: null,
    movieTrailerId: null,
  },
  reducers: {
    addNowPlayingMovie(state, action) {
      state.nowPlayingMovieList = action.payload;
    },
    addPopularMovie(state, action) {
      state.popularMovieList = action.payload;
    },
    addTopRatedMovie(state, action) {
      state.topRateMovieList = action.payload;
    },
    addMovieTrailerId(state, action) {
      state.movieTrailerId = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addMovieTrailerId,
} = movieSlice.actions;
export default movieSlice.reducer;
