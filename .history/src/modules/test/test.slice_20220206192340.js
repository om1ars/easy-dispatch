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
        state.isLoading = true
    },
    getPostsSuccess(state, action){
        state.
    }
  },
});

export const { getPosts } = testSlice.actions;

export default testSlice.reducer;
