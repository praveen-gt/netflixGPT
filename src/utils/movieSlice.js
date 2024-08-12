import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    trendingVideo: null,
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    ADD_POPULAR_MOVIES: (state, action) => {
      state.popularMovies = action.payload;
    },
    ADD_TRAILER_VIDEO: (state, action) => {
      state.trailerVideo = action.payload;
    },
    ADD_TOP_RATED_MOVIES: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    ADD_TRENDING_VIDEO: (state, action) => {
      state.trendingVideo = action.payload;
    },
  },
});

export const {
  ADD_NOW_PLAYING_MOVIES,
  ADD_POPULAR_MOVIES,
  ADD_TRAILER_VIDEO,
  ADD_TOP_RATED_MOVIES,
  ADD_TRENDING_VIDEO,
} = moviesSlice.actions;
export default moviesSlice.reducer;
