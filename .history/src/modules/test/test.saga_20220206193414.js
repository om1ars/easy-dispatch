import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts, getPostsSuccess } from "./test.slice";

export function* getPostsSaga() {
  const data = yield call(() =>
    fetch("https://jsonplaceholder.tyicode.com/todos")
  );
  const formatedData = yield data.json();
  yield put(getPostsSuccess(formatedData));
}

export function* getPostsWatcher() {
  yield takeEvery("test/getPosts", getPostsSaga);
}


