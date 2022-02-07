import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  singlePosts: [],
};

const SinglePostSlice = createSlice({
  name: "singlePost",
  initialState,
  reducers: {
    singlePostFetch(state) {
      // state.singlePosts =
      state.loading = true;
    },
    singlePostSuccess(state, action) {
      state.singlePosts = action.payload;
      state.loading = false;
    },
    singlePostFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const {} = SinglePostSlice.actions;

export default SinglePostSlice.reducer;
