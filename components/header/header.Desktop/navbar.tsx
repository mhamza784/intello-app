import React from "react";
import NavbarLinks from "./navbarLinks";
import LogoComponent from "./logoComponent";
import ButtonsComponent from "./buttons";

const Navbar = () => {
    return (
        <div className="flex flex-row font-poppins font-normal text-[0.950rem] max-md:hidden">
            <LogoComponent />
            <NavbarLinks />
            <ButtonsComponent />
        </div>
    );
};

export default Navbar;
