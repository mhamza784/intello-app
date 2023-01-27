import React from "react";
import { useTranslation } from "next-i18next";
import { FiBell } from "react-icons/fi";
import Image from "next/image";
import { Input } from "antd";
import styles from "@/styles/FormTopbar.module.css";
import DropDown from "./DropDown";
import Menu from "./DashboardMenu";

const { Search } = Input;

const NavbarLinks = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="flex text-center  w-screen items-center  bg-lightGrayBg h-15 rounded-lg px-4 pl-6">
            <div className="justify-start w-full">
                <Menu />
            </div>
            <div className="flex  items-center w-full  justify-end  gap-1 md:gap-2">
                <Search
                    size="middle"
                    className={styles.searchBarTopBar}
                    placeholder={`${translations(
                        "dashboardForm.formHeader.searchBar"
                    )}`}
                    enterButton
                />
                <FiBell className="stroke-DarkGrayishText bg-lightGrayIconBg text-sm md:text-base rounded-sm" />

                <span className="text-DarkGrayishText justify-self-center  text-2xl">
                    |
                </span>
                <Image
                    className="p-[1%]  "
                    src="/images/DashboardForm.png"
                    alt="Picture of the author"
                    width={54}
                    height={54}
                />
                <DropDown />
            </div>
        </div>
    );
};

export default NavbarLinks;
