import { all } from "redux-saga/effects";
import {  getPostsWatcher,  } from "../../modules/test/test.saga";

export default function* rootSaga() {
  yield all([getPostsWatcher(), getSinglePostWatcher]);
}
