import { all } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPosts } from "./test.slice";

export function* getPostsSaga() {}

function* getPostsWatcher() {
    yield takeEvery(getPosts.t)
}
