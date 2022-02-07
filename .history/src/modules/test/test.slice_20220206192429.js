import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.isLoading = true;
    },
    getPostsSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure(state, action) {
        
    },
  },
});

export const { getPosts, getPostsSuccess } = testSlice.actions;

export default testSlice.reducer;
