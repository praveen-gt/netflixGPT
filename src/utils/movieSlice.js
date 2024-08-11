import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        ADD_NOW_PLAYING_MOVIES: (state, action) => {
            state.nowPlayingMovies = action.payload;           
        },
        ADD_TRAILER_VIDEO: (state, action) => {
            state.trailerVideo = action.payload;           
        }
    }
})

export const { ADD_NOW_PLAYING_MOVIES, ADD_TRAILER_VIDEO } = moviesSlice.actions
export default moviesSlice.reducer