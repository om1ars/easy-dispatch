import { all } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";

export function* getPostsSaga() {}

function* getPostsWatcher() {
    yield takeEvery(get)
}
