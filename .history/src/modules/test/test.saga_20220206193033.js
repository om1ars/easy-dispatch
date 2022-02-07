import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts, getPostsSuccess } from "./test.slice";

export function* getPostsSaga() {
  const data = yield call();
  yield put(getPostsSuccess(data));
}

function* getPostsWatcher() {
  yield takeEvery("test/getPosts", getPostsSaga);
}

export function* postsSaga() {
  yield all([getPostsWatcher]);
}
