import { combineReducers } from "@reduxjs/toolkit";
import openSidebarSlice from "./slices/openSidebar.slice";

const rootReducer = combineReducers({
  openSidebar: openSidebarSlice,
});

export default rootReducer;
