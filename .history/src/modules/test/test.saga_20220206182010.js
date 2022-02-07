import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts } from "./test.slice";

export function* getPostsSaga() {
  const data = yield call(getPostsApi);
  yield put(getPosts());
}

function* getPostsWatcher() {
  yield takeEvery(getPosts.type, getPostsSaga);
}

export function* postsSaga() {
    yield all([getPostsWatcher]);
}
