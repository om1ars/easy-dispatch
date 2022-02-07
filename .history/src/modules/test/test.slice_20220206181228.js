import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getPosts() {},
  },
});

export const {} = testSlice.actions;

export default testSlice.reducer;
