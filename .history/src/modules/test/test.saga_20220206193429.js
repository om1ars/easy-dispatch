import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts, getPostsSuccess } from "./test.slice";

export function* getPostsSaga() {
 try {
     
 } catch (error) {
     
 }
}

export function* getPostsWatcher() {
  yield takeEvery("test/getPosts", getPostsSaga);
}


