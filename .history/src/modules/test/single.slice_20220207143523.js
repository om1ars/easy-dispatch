import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const SinglePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  reducers: {
      singlePost
  },
});

export const {} = SinglePostSlice.actions;

export default SinglePostSlice.reducer;
