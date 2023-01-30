import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    watchlistMovies: [],
    watchedListMovies: [],
  },
  reducers: {
    addMoviesToWatchList(state, action) {
      state.watchlistMovies.push(action.payload);
    },
    deleteMovies(state, action) {
      state.watchlistMovies = state.watchlistMovies.filter(
        movie => movie.id !== action.payload
      );
    },
  },
});

export const { addMoviesToWatchList, deleteMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
