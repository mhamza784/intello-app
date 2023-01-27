import { createSlice } from "@reduxjs/toolkit";
import { CREATE_USER_API } from "../types";

const users = createSlice({
    name: "users",
    initialState: [
        {
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            companySize: "",
            country: "",
            language: "",
            password: "",
        },
    ],
    reducers: {
        getUsersSlice: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state = action.payload;
        },
        addUserSlice(state, action) {
            state.push(action.payload);
        },
    },
});

const createUserAction = (payload: any) => ({
    type: CREATE_USER_API,
    payload,
});

export const actions = { ...users.actions, createUserAction };
export default users.reducer;
