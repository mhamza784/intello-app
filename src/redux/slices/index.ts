import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import purchaseRequisition from "./purchaseRequisition";

const reducers = combineReducers({
    users,
    purchaseRequisition,
});
export default reducers;
