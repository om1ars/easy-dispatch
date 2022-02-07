import { combineReducers } from "@reduxjs/toolkit";
import singleSlice from "../../modules/test/single.slice";
import testSlice from "../../modules/test/test.slice";
import openSidebarSlice from "./slices/openSidebar.slice";

const rootReducer = combineReducers({
  openSidebar: openSidebarSlice,
  test: testSlice,
  singleTest: singleSlice
});

export default rootReducer;
