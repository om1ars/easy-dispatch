import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

const openSidebar = createSlice({
  name: "openSidebar",
  initialState,
  reducers: {
      setOp
  },
});

export const {} = openSidebar.actions;

export default openSidebar.reducer;
