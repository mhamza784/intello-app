import React from "react";
import { useTranslation } from "next-i18next";
import ImageSection from "./imageSection";
import TextSection from "./textSection";

const AboutUs = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="bg-aboutUsBg flex md:flex-row px-10 py-5 max-md:px-[3%] md:mx-[3%] max-md:flex-col rounded-lg">
            <TextSection
                title={translations("homePage.aboutUs.title")}
                description={translations("homePage.aboutUs.description")}
                textInImage=""
            />

            <ImageSection
                textInImage={translations("homePage.aboutUs.textInImage")}
                description=""
                title=""
            />
        </div>
    );
};

export default AboutUs;
