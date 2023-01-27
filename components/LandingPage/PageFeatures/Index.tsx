import { useTranslation } from "next-i18next";
import CardSection from "./CardSection";
import MainHeading from "../molecules/mainHeading";

const PageFeatures = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="text-center justify-center  items-center  tracking-[-0.019925282510272rem]">
            <div className=" flex flex-col font-helvetica not-italic text-center ">
                <MainHeading title={translations("homePage.Features.title")} />
                <div className="items-center self-center sm:mt-3 mt-2 text-greyText ">
                    <p className="font-helvetica  w-32 sm:w-56 md:w-[30rem]  text-[0] sm:text-xs md:text-2xl font-normal">
                        {translations("homePage.Features.description")}
                    </p>
                </div>
                <div>
                    <CardSection />
                </div>
            </div>
        </div>
    );
};

export default PageFeatures;
