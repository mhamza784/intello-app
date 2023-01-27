import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import users from "./slices/users";
import purchaseRequisition from "./slices/purchaseRequisition";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users,
        purchaseRequisition,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
