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
        state.loading = true
    },
    singlePost
  },
});

export const {} = SinglePostSlice.actions;

export default SinglePostSlice.reducer;
