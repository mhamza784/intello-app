import React from "react";
import LoginFormDesktop from "./loginForm.Desktop";
import LoginFormMobile from "./loginForm.Mobile";

const LoginForm = () => {
    return (
        <>
            <LoginFormDesktop />
            <LoginFormMobile />
        </>
    );
};

export default LoginForm;
