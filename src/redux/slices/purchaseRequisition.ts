import { createSlice } from "@reduxjs/toolkit";
import { CREATE_PR_FORM_API } from "../types";

const purchaseRequisition = createSlice({
    name: "purchaseRequisition",
    initialState: [
        {
            PurchaseRequisitionNumber: "",
            PurchaseRequisitionAttachment: "",
            PurchaseRequisitionDescription: "",
            PurchaseRequisitionPreparer: "",
            PurchaseRequisitionStatus: "",
            PurchaseRequisitionCurrency: "",
            PurchaseRequisitionDate: "",
            PurchaseRequisitionReason: "",
            PurchaseRequisitionJustification: "",
        },
    ],
    reducers: {
        getPRSlice: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state = action.payload;
        },
        addPRSlice(state, action) {
            state.push(action.payload);
        },
    },
});

const createPRAction = (payload: any) => ({
    type: CREATE_PR_FORM_API,
    payload,
});

export const actions = { ...purchaseRequisition.actions, createPRAction };
export default purchaseRequisition.reducer;
