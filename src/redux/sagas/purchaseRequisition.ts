import { put, takeEvery, call } from "redux-saga/effects";
import {
    getPurchaseRequisitionAPI,
    createPurchaseRequisitionAPI,
} from "../service/prForm.service";
import { getPRSlice } from "../slices/purchaseRequisition";
import { CREATE_PR_FORM_API, GET_PR_FORM_DATA } from "../types";

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

export function* getPRSaga() {
    const purchaseRequisition: ResponseGenerator = yield call(
        getPurchaseRequisitionAPI
    );
    yield put(getPRSlice(purchaseRequisition?.data?.data));
}

export function* createPRSaga(action: any) {
    yield call(createPurchaseRequisitionAPI, action.payload);
}
export function* watchPRAsync() {
    yield takeEvery(GET_PR_FORM_DATA, getPRSaga);
    yield takeEvery(CREATE_PR_FORM_API, createPRSaga);
}
