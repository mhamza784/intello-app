import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

const LogoComponent = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="basis-2/5 pl-32 pr-52 max-lg:pr-20 max-xl:pr-28 max-md:pr-10 max-md:pl-10 max-sm:px-5">
            <Image
                src="/intello.png"
                height="40"
                width="120"
                className={styles.logoImage}
                alt="logo"
            />
            <p className="font-helvetica text-white text-xs font-normal tracking-tight leading-4 mt-4">
                {translations("homePage.footer.textUnderLogo")}
            </p>
        </div>
    );
};

export default LogoComponent;
