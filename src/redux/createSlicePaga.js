import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    page: 1,
  },
  reducers: {
    changePages(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changePages } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
