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
    getPosts(state, ) {
      state.isLoading = true;
    },
    getPostsSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure(state, action) {
      state.isLoading = false;
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsFailure } = testSlice.actions;

export default testSlice.reducer;
