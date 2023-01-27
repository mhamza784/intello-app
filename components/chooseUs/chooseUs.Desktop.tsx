import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/chooseUsDesktop.module.css";
import MainHeading from "../molecules/mainHeading";

const ChooseUsDesktop = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="mt-12 bg-contain bg-no-repeat bg-whyChooseUs-Background max-md:hidden">
            <div className="flex justify-center items-center mt-4">
                <span className="font-semibold text-5xl text-black font-helvetica tracking-tight">
                    <MainHeading
                        title={translations("homePage.chooseUs.title")}
                        description=""
                        discount=""
                        buttonText=""
                        textAbovePrice=""
                        price=""
                        isActive={false}
                    />
                </span>
            </div>

            <div className="flex justify-center items-center mt-6">
                <span className=" basis-1/4 text-greyText font-normal text-2xl tracking-tight text-center">
                    {translations("homePage.chooseUs.textBelowTitle")}
                </span>
            </div>

            <div className="grid grid-rows-4 grid-cols-2 grid-flow-col mt-4 pl-24">
                <div className="row-span-2 justify-center self-end px-24">
                    <span className="font-helvetica font-light tracking-tighter text-blueText text-[2.5rem]">
                        {translations("homePage.chooseUs.description")}
                    </span>
                </div>
                <div className="row-span-2 justify-center px-24 mt-9">
                    <span className="font-helvetica text-greyText font-light text-2xl">
                        {translations("homePage.chooseUs.textBelowDescription")}
                    </span>
                </div>
                <div className="row-span-4">
                    <Image
                        src="/whychooseUs.png"
                        height="450"
                        width="450"
                        className={styles.imageWhychooseUs}
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChooseUsDesktop;
