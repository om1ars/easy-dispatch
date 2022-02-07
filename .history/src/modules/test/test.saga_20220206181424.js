import { all, call } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPosts } from "./test.slice";

export function* getPostsSaga() {
    yield call
}

function* getPostsWatcher() {
    yield takeEvery(getPosts.type, getPostsSaga)
}
