/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FooterLinks = () => {
    const { t: translations } = useTranslation();
    const footerLinks: any = translations("homePage.footer.footerLinks", {
        returnObjects: true,
    });
    const footerElements = footerLinks.map((element: any, index: number) => {
        return (
            <Link
                href="/"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="font-helvetica text-white text-xs font-normal tracking-tight leading-8 max-sm:leading-6"
            >
                {element}
            </Link>
        );
    });

    return (
        <div className="basis-3/5">
            <div className="grid grid-rows-4 grid-flow-col">
                {footerElements}
            </div>
        </div>
    );
};

export default FooterLinks;
