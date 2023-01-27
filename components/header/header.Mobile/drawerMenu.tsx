import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/drawerMenu.module.css";
import textData from "../../../public/locales/en/en.json";

const DrawerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const { navbarLinks } = textData.homePage.header;
    const navBarLinks = navbarLinks.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={index} className="my-1">
            <Link className="" href="/">
                {element}
            </Link>
        </p>
    ));

    return (
        <div className="relative">
            <Image
                src="/menu.png"
                id="menu"
                width="48"
                height="48"
                onClick={showDrawer}
                className={styles.hamburgerImage}
                alt="closed"
            />
            <Drawer
                title="Pages"
                placement="right"
                onClose={onClose}
                open={open}
            >
                {navBarLinks}
            </Drawer>
        </div>
    );
};

export default DrawerMenu;
