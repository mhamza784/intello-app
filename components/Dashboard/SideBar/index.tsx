import React from "react";
import HeaderDesktop from "./header.Desktop/index";
import HeaderMobile from "./header.Mobile/index";

const Header = () => {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
        </>
    );
};

export default Header;
