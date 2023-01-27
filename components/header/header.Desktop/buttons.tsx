import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ButtonsComponent = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="basis-1/4 flex justify-center items-center space-x-3 bg-gradient-Background">
            <Link href="/" className="text-white">
                {translations("homePage.header.loginBtnText")}
            </Link>
            <span className="text-white">&nbsp;&nbsp;|</span>&nbsp;&nbsp;
            <Link
                href="/"
                className="text-btnColour font-medium text-[0.55rem] btn bg-button rounded-full px-3 py-1"
            >
                {translations("homePage.header.SignUpBtnText")}
            </Link>
        </div>
    );
};

export default ButtonsComponent;
