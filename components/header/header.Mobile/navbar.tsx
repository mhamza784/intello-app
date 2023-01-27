import React from "react";
import Image from "next/image";
import styles from "@/styles/mobileNavbar.module.css";
import DrawerMenu from "./drawerMenu";

const Navbar = () => {
    return (
        <div className="md:hidden basis-1/4 max-md:basis-1/2 flex justify-between p-5 items-center">
            <Image
                src="/logo.png"
                width="240"
                height="100"
                className={styles.logo}
                alt="Logo"
            />
            <DrawerMenu />
        </div>
    );
};

export default Navbar;
