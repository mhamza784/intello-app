/* eslint-disable import/named */
import {
    //  put,
    takeEvery,
    call,
} from "redux-saga/effects";

import {
    //  getUsersAPI,
    createUserAPI,
} from "../service/user.service";

// import { getUsersSlice } from "../slices/users";

import {
    CREATE_USER_API,
    // GET_USERS
} from "../types";

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

// export function* getUsersSaga() {
//     const users: ResponseGenerator = yield call(getUsersAPI);
//     yield put(getUsersSlice(users?.data?.data));
// }

export function* createUserSaga(action: any) {
    yield call(createUserAPI, action.payload);
}
export function* watchUsersAsync() {
    // yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(CREATE_USER_API, createUserSaga);
}
