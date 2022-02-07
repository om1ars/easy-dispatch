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
        
    },
  },
});

export const { getPosts } = testSlice.actions;

export default testSlice.reducer;
