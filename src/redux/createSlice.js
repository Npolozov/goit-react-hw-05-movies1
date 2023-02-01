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
      const index = state.watchlistMovies.findIndex(
        task => task.id === action.payload
      );
      console.log(index);
      state.watchlistMovies.splice(index, 1);
    },
  },
});

export const { addMoviesToWatchList, deleteMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
