import { useTranslation } from "next-i18next";
import { FiBell } from "react-icons/fi";
import Image from "next/image";
import { Input } from "antd";
import styles from "@/styles/FormTopbar.module.css";
import DropDown from "./DropDown";

interface myProps {
    title: string;
}
const { Search } = Input;

const HeaderSection = (props: myProps) => {
    const { title } = props;

    const { t: translations } = useTranslation();

    return (
        <div className="flex text-center justify-between  items-center  bg-lightGrayBg h-12 rounded-lg px-2 md:px-6 pl-6 md:pl-14 ">
            <h2 className="text-darkBlueText order-first mt-[.7%] text-center self-center ml-[-1rem] text-base font-bold md:text-2xl">
                {title}
            </h2>
            <div className="flex  items-center gap-1 md:gap-2">
                <Search
                    size="small"
                    className={styles.searchBar}
                    placeholder={`${translations(
                        "dashboardForm.formHeader.searchBar"
                    )}`}
                    enterButton
                />
                <FiBell className="stroke-DarkGrayishText bg-lightGrayIconBg text-sm md:text-base rounded-sm" />

                <span className="text-DarkGrayishText justify-self-center  text-2xl mb-[2%]">
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

export default HeaderSection;
