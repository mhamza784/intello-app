import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/chooseUsDesktop.module.css";

const ChooseUsMobile = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="flex flex-col mt-12 bg-contain bg-no-repeat bg-white md:hidden">
            <div className="flex justify-center items-center mt-4">
                <span className="font-bold text-5xl text-black font-helvetica tracking-tight text-center">
                    {translations("homePage.chooseUs.title")}
                </span>
            </div>

            <div className="flex justify-center items-center mt-6">
                <span className="basis-3/4 text-greyText font-normal text-3xl tracking-tight text-center">
                    {translations("homePage.chooseUs.textBelowTitle")}
                </span>
            </div>

            <div className="justify-center px-12 text-center mt-6">
                <span className="font-helvetica font-normal tracking-tight text-blueText text-3xl leading-10">
                    {translations("homePage.chooseUs.description")}
                </span>
            </div>

            <div className="justify-center text-center px-12 mt-6">
                <span className="font-helvetica text-greyText font-light text-2xl">
                    {translations("homePage.chooseUs.textBelowDescription")}
                </span>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/whychooseUs.png"
                    height="450"
                    width="450"
                    className={styles.imageWhychooseUs}
                    alt="image"
                />
            </div>
        </div>
    );
};

export default ChooseUsMobile;
