import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovieList: null,
    movieTrailerId: null,
  },
  reducers: {
    addMovie(state, action) {
      state.nowPlayingMovieList = action.payload;
    },
    addMovieTrailerId(state, action) {
      state.movieTrailerId = action.payload;
    },
  },
});

export const { addMovie, addMovieTrailerId } = movieSlice.actions;
export default movieSlice.reducer;

//console.log(MovieSlice)
