import React from "react";
import Image from "next/image";
import DrawerMenu from "./drawerMenu";

const Navbar = () => {
    return (
        <div className="md:hidden basis-1/4 max-md:basis-1/2 w-screen flex text-center px-1 py-1 justify-between p-5 items-center">
            <Image src="/logo.png" width="180" height="80" alt="Logo" />
            <DrawerMenu />
        </div>
    );
};

export default Navbar;
