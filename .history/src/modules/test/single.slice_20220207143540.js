import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    error: null,
    
};

const SinglePostSlice = createSlice({
  name: "singlePost",
  initialState,
  reducers: {
    singlePostFetch(state) {

    },
  },
});

export const {} = SinglePostSlice.actions;

export default SinglePostSlice.reducer;
