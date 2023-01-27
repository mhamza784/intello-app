import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "@/styles/LandingPage.module.css";

const Blockchain = () => {
    const { t: translations } = useTranslation();

    return (
        <div className=" w-full px-6  md:mt-28  sm:mt-12  mt-3 pb-5  sm:pb-9 md:pb-12 lg:pb-20">
            <div className=" px-20  flex flex-col  text-center justify-center  items-center">
                <p className=" font-helvetica not-italic font-bold items-center text-2xl sm:text-4xl  lg:text-5xl tracking-[-0.019925282510272rem] mb-0">
                    {" "}
                    {translations("homePage.blockChain.title")}
                </p>
                <div className=" flex bg-blockChainBg w-screen sm:w-[34.14712rem]  md:w-full lg:w-full md:h-[34.063rem] h-[16rem] sm:h-[16.6rem]  justify-center  items-center rounded-none  md:rounded-2xl  mt-3  sm:mt-5    md:mt-11 ">
                    <Image
                        src="/images/ERPSoftware.png"
                        className={styles.BlockchainBg}
                        alt="Picture of the author"
                        width={1000}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blockchain;
