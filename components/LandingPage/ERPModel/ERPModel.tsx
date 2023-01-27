import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/LandingPage.module.css";

const ERPModel = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="w-full px-[4.5rem]">
            <div className="flex flex-col  text-center justify-center  items-center   ">
                <p className="font-helvetica not-italic font-bold  items-center text-2xl sm:text-3xl  lg:text-5xl tracking-[-0.019925282510272rem] mb-0 ">
                    {translations("homePage.erpModel.title")}
                </p>
                <div className="flex  bg-erpModulesBg  w-screen sm:w-[39.4rem] md:w-[47.5rem]  lg:w-full  h-[8.5rem] sm:h-[15rem] md:h-[30rem]  justify-center  items-center rounded-lg  mt-3 sm:mt-6 md:mt-12 ">
                    <Image
                        src="/images/ERPModel.png"
                        className={styles.ERPBg}
                        alt="Picture of the author"
                        width={1000}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default ERPModel;
