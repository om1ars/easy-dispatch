import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getPostsFetch(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPostsSuccess(state, action) {
      state.posts = act;
      state.isLoading = false;
      state.error = null;
    },
    getPostsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = testSlice.actions;

export default testSlice.reducer;
