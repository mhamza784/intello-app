import React from "react";
import { useTranslation } from "next-i18next";
import MainHeading from "../molecules/mainHeading";
import CardsSection from "./cardsSection";

const Pricing = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="mt-8">
            <MainHeading
                title={translations("homePage.pricing.title")}
                description=""
                discount=""
                buttonText=""
                textAbovePrice=""
                price=""
                isActive={false}
            />
            <CardsSection />
        </div>
    );
};

export default Pricing;
