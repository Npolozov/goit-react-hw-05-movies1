import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './createSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
