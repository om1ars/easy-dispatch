import { all, call } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { getPostsApi } from "../../helpers/test.api";
import { getPosts } from "./test.slice";

export function* getPostsSaga() {
    const data  = yield call(getPostsApi)
    yield p
}

function* getPostsWatcher() {
    yield takeEvery(getPosts.type, getPostsSaga)
}
