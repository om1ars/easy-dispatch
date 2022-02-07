import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

const openSidebar = createSlice({
  name: "openSidebar",
  initialState,
  reducers: {
      setOpenSidebar(state, {type, ...rest}) {
          
      }
  },
});

export const {} = openSidebar.actions;

export default openSidebar.reducer;
