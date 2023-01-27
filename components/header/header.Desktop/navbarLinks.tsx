/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const NavbarLinks = () => {
    const { t: translations } = useTranslation();
    const navbarLinks: any = translations("homePage.header.navbarLinks", {
        returnObjects: true,
    });
    const navBarLinksWhiteText = navbarLinks.map((element: any, index: any) => {
        return (
            // eslint-disable-next-line react/no-array-index-key
            <Link href="/" key={index} className="text-white">
                {element}
            </Link>
        );
    });

    return (
        <div className="basis-1/2 max-md:basis-1/4 flex justify-center items-center max-lg:text-xs space-x-6 max-lg:space-x-3 bg-gradient-Background">
            {navBarLinksWhiteText}
        </div>
    );
};

export default NavbarLinks;
