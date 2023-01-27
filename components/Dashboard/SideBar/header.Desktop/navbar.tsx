import React from "react";
import NavbarLinks from "./navbarLinks";
import LogoComponent from "./logoComponent";

const Navbar = () => {
    return (
        <div className="flex flex-row font-poppins font-normal py-2 text-[0.950rem] max-md:hidden">
            <LogoComponent />
            <NavbarLinks />
        </div>
    );
};

export default Navbar;
