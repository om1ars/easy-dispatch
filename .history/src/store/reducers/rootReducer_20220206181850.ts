import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "../../modules/test/test.slice";
import openSidebarSlice from "./slices/openSidebar.slice";

const rootReducer = combineReducers({
  openSidebar: openSidebarSlice,
  test: testSlice,
});

export default rootReducer;
