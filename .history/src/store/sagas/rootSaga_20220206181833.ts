import { all } from "redux-saga/effects";
import {  postsSaga } from "../../modules/test/test.saga";

export default function* rootSaga() {
  yield all([postsSaga()]);
}
