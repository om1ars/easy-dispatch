import { all, call } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPosts } from "./test.slice";

export function* getPostsSaga() {
    const data  = yield call(get)
}

function* getPostsWatcher() {
    yield takeEvery(getPosts.type, getPostsSaga)
}
