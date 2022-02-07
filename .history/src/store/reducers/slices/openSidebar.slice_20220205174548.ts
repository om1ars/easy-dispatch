import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

const openSidebar = createSlice({
  name: "openSidebar",
  initialState,
  reducers: {
      setOpenSidebar(state:any, {type, ...rest}) {
          switch(type){
              case(type){

              }
          }
      }
  },
});

export const {} = openSidebar.actions;

export default openSidebar.reducer;
