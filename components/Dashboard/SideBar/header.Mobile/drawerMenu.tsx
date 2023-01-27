import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import { UnorderedListOutlined } from "@ant-design/icons";
import textData from "../../../../public/locales/en/en.json";

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
        <div className="w-full text-right items-center align-middle bg-lightGrayBg h-10 rounded-lg px-2  pl-6  ">
            <UnorderedListOutlined
                onClick={showDrawer}
                className=" text-3xl items-center place-self-center align-middle "
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
