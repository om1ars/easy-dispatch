import { all } from "redux-saga/effects";
import {  getPostsWatcher, getSinglePostWatcher,  } from "../../modules/test/test.saga";

export default function* rootSaga() {
  yield all([getPostsWatcher(), getSinglePostWatcher()]);
}
