import { all, spawn } from "redux-saga/effects";
import { watchUsersAsync } from "./user";
import { watchPRAsync } from "./purchaseRequisition";

// export function* rootSaga() {
//     yield all([watchUsersAsync()]);
//     yield all([watchPRAsync()]);
//     console.log("watchUsersAsync");
// }

export default function* rootSaga() {
    yield all([spawn(watchUsersAsync), spawn(watchPRAsync)]);
}
