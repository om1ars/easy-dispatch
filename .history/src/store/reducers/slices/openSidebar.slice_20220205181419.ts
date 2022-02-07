import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: true,
};

const openSidebar = createSlice({
  name: "openSidebar",
  initialState,
  reducers: {
    setOpenSidebar(state: any, { type, ...rest }: any) {
      switch (type) {
        case "set":
          return { ...state, ...rest };
        default:
          return state;
      }
    },
  },
});

export const {setOpenSidebar} = openSidebar.actions;

export default openSidebar.reducer;
