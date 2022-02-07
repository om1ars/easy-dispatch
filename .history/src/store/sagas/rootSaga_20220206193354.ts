import { all } from "redux-saga/effects";
import {  getPostsWatcher, postsSaga } from "../../modules/test/test.saga";

export default function* rootSaga() {
  yield all([getPostsWatcher()]);
}
