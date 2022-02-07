import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts, getPostsFailure, getPostsSuccess } from "./test.slice";

function* getPostsSaga() {
  try {
    const data = yield call(getPostsApi);
    const formatedData = yield data.json();
    yield put(getPostsSuccess(formatedData));
  } catch (error) {
    yield put(getPostsFailure(error.message));
  }
}

export function* getPostsWatcher() {
  yield takeEvery("test/getPosts", getPostsSaga);
}
