import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/underNavSection.module.css";

const UnderNavbarSection = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="flex flex-row max-md:hidden relative">
            <div className="basis-1/4 flex justify-center items-center">
                <Image
                    src="/heroImage.jpg"
                    height="450"
                    width="750"
                    className={styles.heroImage}
                    alt="statistics"
                />
            </div>
            <div className="basis-3/4 flex justify-center items-center h-[33rem] bg-gradient-Background rounded-br-[6rem]">
                <div className="ml-96 pr-28 pl-36 max-xl:p-0 xl:ml-[30%]">
                    <p className="bg-[#E1F8FD] w-fit mb-10 font-medium font-poppins text-[1rem] max-xl:text-sm max-lg:text-[0.7rem] max-sm:text-[0.5rem] leading-[0.375rem] p-4 max-lg:py-2 max-lg:px-2 rounded-3xl text-blueHeading tracking-[0.235rem]">
                        {translations("homePage.header.textWithBanner")}
                    </p>
                    <div className="">
                        <span className="text-white font-semibold font-helvetica text-5xl">
                            {translations("homePage.header.headingMiddle")}
                        </span>
                        <p className="text-white font-helvetica font-light text-xl mt-6 pr-[35%]">
                            {translations("homePage.header.textUnderHeading")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderNavbarSection;
