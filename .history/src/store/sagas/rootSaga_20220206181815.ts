import { all } from "redux-saga/effects";
import { getPostsSaga } from "../../modules/test/test.saga";

export default function* rootSaga() {
  yield all([getPostsSaga()]);
}
