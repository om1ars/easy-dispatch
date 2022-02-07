import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

const openSidebar = createSlice({
  name: "openSidebar",
  initialState,
  reducers: {
      setOpenSidebar(state:any, {type, ...rest}:any) {
          switch(type){
              case 'set': 
              return {...state, ...rest}
          }
      }
  },
});

export const {} = openSidebar.actions;

export default openSidebar.reducer;
