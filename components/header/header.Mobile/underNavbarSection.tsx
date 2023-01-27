import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/underNavSection.module.css";

const UnderNavbarSection = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="md:hidden">
            <div>
                <Image
                    src="/heroImage.jpg"
                    height="450"
                    width="750"
                    className={styles.heroImageMobile}
                    alt="statistics"
                />
            </div>

            <div className="py-8 bg-gradient-Background rounded-br-[6rem]">
                <div className="flex flex-row justify-center py-4">
                    <p className="bg-[#E1F8FD] font-medium font-poppins text-[1rem] leading-[0.375rem] max-sm:leading-4 max-sm:text-center max-sm:mx-5 py-3 px-4 rounded-3xl text-blueHeading tracking-[0.235rem]">
                        {translations("homePage.header.textWithBanner")}
                    </p>
                </div>
                <div className="flex flex-row justify-center py-4">
                    <p className="text-white font-semibold font-helvetica text-5xl text-center px-28">
                        {translations("homePage.header.headingMiddle")}
                    </p>
                </div>
                <div className="flex flex-row justify-center pb-3">
                    <p className="text-white font-helvetica font-light text-xl text-center px-16">
                        {translations("homePage.header.textUnderHeading")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnderNavbarSection;
