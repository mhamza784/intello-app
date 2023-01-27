import { takeEvery, call } from "redux-saga/effects";
import { createPurchaseRequisitionAPI } from "../service/prForm.service";
import { CREATE_PR_FORM_API } from "../types";

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

export function* createPRSaga(action: any) {
    yield call(createPurchaseRequisitionAPI, action.payload);
}
export function* watchPRAsync() {
    yield takeEvery(CREATE_PR_FORM_API, createPRSaga);
}
