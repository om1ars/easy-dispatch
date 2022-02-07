import { all, call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { singlePostSuccess } from "./single.slice";
import { getPostsFetch, getPostsFailure, getPostsSuccess } from "./test.slice";

function* getSinglePost(id) {
  try {
    const data = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    );

    const  formatedData = data.json();
    yield put(singlePostSuccess())
  } catch (error) {}
}

function* getPostsSaga() {
  try {
    const data = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts")
    );
    const formatedData = yield data.json();
    yield put(getPostsSuccess(formatedData));
  } catch (error) {
    yield put(getPostsFailure(error.message));
  }
}

export function* getPostsWatcher() {
  yield takeEvery("test/getPostsFetch", getPostsSaga);
}